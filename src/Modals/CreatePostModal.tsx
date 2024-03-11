import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import * as interFace from '../Config/interface.config';
import * as M from './styled'; 
import { useDispatch } from 'react-redux';
import { createNewPost } from '../Redux/slices/postSlice';
import { AppDispatch } from '../Redux/store';

interface Props {
  onHide: () => void;
  show: boolean;
}

const CreatePostModal: React.FC<Props> = ({ onHide, show }) => {
  const dispatch:AppDispatch = useDispatch()

  const createPost = () => {
    const body: interFace.Post = {
      "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
      "creator": "650ea58888085cd79bcdc0d2",
      "files": ["65ed8d0cb4ab8ec10b96970f", "65ed8d7ab4ab8ec10b969711"],
      "likeCount": [],
      "comments": [],
      "tips": [],
      "isLocked": true
    };

    dispatch(createNewPost(body));
  }

  return (
    <Modal width={1000} open={show} onCancel={onHide}>
      <div>
        <M.DragAndDrop>
          <div>
            <h1>Drag photos and videos here</h1>
            <Button onClick={createPost} type='primary' className='mt-2'>Select From Computer</Button>
          </div>
        </M.DragAndDrop>
      </div>
    </Modal>

  );
};
 
export default CreatePostModal;
