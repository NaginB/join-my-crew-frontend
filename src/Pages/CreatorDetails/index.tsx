import * as C from "./styled";
import Logo from "../../Assets/Images/logo-colored.svg";
import { useEffect, useState } from "react";
import { CommonButton, CommonInput } from "../../common-styles";
import { GoLink } from "react-icons/go";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaThreads } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as I from "../../Config/interface.config";
import * as Path from "../../API/path";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { getUserDetails } from "../../Redux/slices/userSlice";
import toast from "react-hot-toast";
import APIRequest from "../../API";
import { useNavigate } from "react-router-dom";

const CreatorDetails = () => {
  const { loading, id: user_id } = useSelector(
    (state: RootState) => state.user
  );

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [termsCond] = useState<string[]>([
    "fanxo requires a minimum of 5000 followers across all socials.",
    "fanx creators must be 16 years or above of age.",
    "fanxo creators keep 90% of their earnings.",
    "Content suggesting child or minor abuse is not allowed.",
    "Identity verification and bank account connection required for payment processing.",
    "Working with a talent agency? Email us at talent@fanxo.club to expedite this process.",
  ]);

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    instagram: Yup.string().required("Instagram is required"),
    youtube: Yup.string().required("YouTube is required"),
    threads: Yup.string().required("Threads is required"),
    others: Yup.string().required("Others is required"),
  });

  // Define initial form values
  const initialValues: I.CreatorDetails = {
    username: "magnifiqqq",
    instagram: "instagram.magnifiqqq",
    youtube: "youtube.magnifiqqq",
    threads: "threads.magnifiqqq",
    others: "others.magnifiqqq",
  };

  // Handle form submission
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    const path: any = { ...Path.updateUser };
    path.url = path.url.replaceAll("{{id}}", user_id);

    const promise = APIRequest(path, { socialLinks: values });

    toast.promise(promise, {
      loading: "updating details",

      success: (data: any) => {
        setSubmitting(false);

        if (data?.error) throw new Error(data?.error?.message);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
        return "Details stored successfully";
      },

      error: (err: any) => {
        setSubmitting(false);
        return err.message;
      },
    });
  };

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  return (
    <C.CreatorWrapper>
      <C.CreatorDetails>
        <img src={Logo} alt="fanxo logo" className="app-logo mx-auto" />
        <h1 className="text-white text-center font-roboto text-2xl mt-5">
          Creator Application
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <ul className="mt-6">
                {termsCond.map((trm, ind) => (
                  <li
                    className="text-white list-disc font-roboto mt-4"
                    key={`terms-cond-${ind}`}
                  >
                    {trm}
                  </li>
                ))}
              </ul>

              <div>
                <div className="flex gap-4 items-center mt-5">
                  <span className="text-white">@</span>
                  <Field
                    type="text"
                    name="username"
                    placeholder="username"
                    as={CommonInput}
                    size={20}
                  />
                </div>
                <p className="text-red-600 mt-2">
                  {errors.username && touched.username && errors.username}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-white">Top Social Platforms</h3>
                <div>
                  <div className="flex gap-4 items-center mt-4">
                    <BsInstagram size={20} className="text-white" />
                    <Field
                      type="text"
                      name="instagram"
                      as={CommonInput}
                      placeholder="Instagram"
                    />
                  </div>
                  <p className="text-red-600 mt-2">
                    {errors.instagram && touched.instagram && errors.instagram}
                  </p>
                  <div className="flex gap-4 items-center mt-4">
                    <BsYoutube size={20} className="text-white" />
                    <Field
                      type="text"
                      name="youtube"
                      as={CommonInput}
                      placeholder="YouTube"
                    />
                  </div>
                  <p className="text-red-600 mt-2">
                    {errors.youtube && touched.youtube && errors.youtube}
                  </p>
                  <div className="flex gap-4 items-center mt-4">
                    <FaThreads size={20} className="text-white" />
                    <Field
                      type="text"
                      name="threads"
                      as={CommonInput}
                      placeholder="Threads"
                    />
                  </div>
                  <p className="text-red-600 mt-2">
                    {errors.threads && touched.threads && errors.threads}
                  </p>
                  <div className="flex gap-4 items-center mt-4">
                    <GoLink size={20} className="text-white" />
                    <Field
                      type="text"
                      name="others"
                      as={CommonInput}
                      placeholder="Others"
                    />
                  </div>
                </div>
                <p className="text-red-600 mt-2">
                  {errors.others && touched.others && errors.others}
                </p>
                <div className="mt-10">
                  <CommonButton
                    className="text-white w-full"
                    type="submit"
                    disabled={isSubmitting || loading}
                  >
                    {isSubmitting ? "Submitting..." : "Continue"}
                  </CommonButton>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </C.CreatorDetails>
    </C.CreatorWrapper>
  );
};

export default CreatorDetails;
