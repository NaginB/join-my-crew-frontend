import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import * as interFace from '../Config/interface.config';
import * as M from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { createNewPost } from '../Redux/slices/postSlice';
import { AppDispatch, RootState } from '../Redux/store';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import UploadGallery from '../Assets/Images/UploadGallery.svg'
import type { GetProp, UploadFile, UploadProps } from 'antd';
import * as API from '../API/path';
import { getBase64 } from '../Config/common.config';
import { CommonButton, CommonInput } from '../common-styles';
import * as Yup from "yup";
import toast from 'react-hot-toast';
import { getUserDetails } from '../Redux/slices/userSlice';
import { Formik, Form, Field, ErrorMessage } from "formik";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
interface Props {
  onHide: () => void;
  show: boolean;
}

interface NewPostFormData {
  description: string;
}

const CreatePostModal: React.FC<Props> = ({ onHide, show }) => {
  const dispatch: AppDispatch = useDispatch()
  const [files, setFiles] = useState<string[]>([])
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<any>([]);
  const [step, setStep] = useState<number>(1)
  const { id: user_id } = useSelector((state: RootState) => state.user)

  // Define initial form values
  const initialValues: NewPostFormData = {
    description: "",
  };
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    description: Yup.string().required("Description is required"),
  });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleCancel = () => setPreviewOpen(false);

  // Handle form submission
  const handleSubmit = (values: NewPostFormData, { setSubmitting }: any) => {
    if (!user_id || typeof user_id !== 'string') {
      toast.error('Invalid user.')
      return;
    }

    const postData = {
      text: values.description,
      creator: user_id,
      files,
      "likeCount": [],
      "comments": [],
      "tips": [],
      "isLocked": true
    };

    setSubmitting(false);
    dispatch(createNewPost(postData)).then(() => onHide());
  };

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: `http://${process.env.REACT_APP_API_ENDPOINT}${API.fileUpload.url}`,
    onChange(info) {
      setFileList(info.fileList);
      const selectedFiles = info.fileList.map(myfile => {
        const newFile: interFace.UploadedFile = myfile.response;
        return newFile?.id;
      })
      setFiles(selectedFiles);
    },
  };

  useEffect(() => {
    dispatch(getUserDetails())
  }, [])

  return (
    <M.DragAndDrop>
      <Modal
        footer={false}
        className='create-post-modal'
        closeIcon={false}
        style={{ background: '#262626' }}
        width={710} 
        open={show} 
        onCancel={onHide} 
        destroyOnClose>
        <M.Header>
          <h1>Create New Post</h1>
        </M.Header>
        <div>
          {step === 1 &&
            <>
              <Upload.Dragger
                fileList={fileList}
                {...props}
                className='block'
                height={450}
                listType='picture-card'
                onPreview={handlePreview}
                style={{ background: '#262626' }}
              >
                <img src={UploadGallery} className='mx-auto' />
                <p className="ant-upload-text mt-0 !text-white">Drag and Photos videos here</p>
              </Upload.Dragger>
              {
                files.length > 0 &&
                <M.PostFooter>
                  <CommonButton onClick={() => setStep(2)}>Next</CommonButton>
                </M.PostFooter>
              }
            </>
          }

          {
            step === 2 &&
            <M.PostForm>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form>
                    <div className="mt-6">
                      <h3 className="text-white">Create New Post</h3>
                      <div>
                        <div className="flex gap-4 items-center mt-4">
                          <Field
                            as="textarea"
                            name="description"
                            className="w-full p-2 bg-[#262626] text-white rounded border border-[#515151]"
                            placeholder="Description"
                          />
                        </div>
                        <ErrorMessage
                          name="description"
                          component="p"
                          className="text-red-600 mt-2"
                        />
                        <div className="mt-10 flex justify-center gap-5">
                          <CommonButton
                            className="text-white"
                            type="button"
                            disabled={isSubmitting}
                            onClick={() => setStep(1)}
                          >
                            Return
                          </CommonButton>

                          <CommonButton
                            className="text-white"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Creating..." : "Create"}
                          </CommonButton>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
              {/* <CommonButton onClick={() => setStep(2)}>Next</CommonButton> */}
            </M.PostForm>
          }
        </div>
      </Modal>

      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </M.DragAndDrop>
  );
};

export default CreatePostModal;
