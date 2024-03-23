import React, { useState } from "react";
import * as S from "./styles";
import * as C from "../../common-styles";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import ColoredLogo from "../../Assets/Images/logo-colored.svg";
import * as interFace from "../../Config/interface.config";
import { Formik, Form } from "formik";
import * as validation from "../../Config/validation.config";
import * as APIPATHS from "../../API/path";
import APIRequest from "../../API";
import toast from "react-hot-toast";
import { TbEyeClosed } from "react-icons/tb";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [formData] = useState<interFace.ForgotPasswordInterface>({
    email: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onForgotPassword = async (
    values: interFace.ForgotPasswordInterface
  ) => {
    // Your forgot password logic goes here
    const promise = APIRequest(APIPATHS.forgotPassword, values);

    toast.promise(promise, {
      loading: "Sending reset link...",
      success: (data: any) => {
        if (data.error) throw new Error(data.error.message);
        navigate("/login");
        return "Reset link sent successfully.";
      },
      error: (err) => {
        return err.message;
      },
    });
  };

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <S.ForgotPasswordWrapper>
      <S.ForgotPasswordContainer>
        <S.ColoredLogo src={ColoredLogo} />
        <S.ForgotPasswordContent>
          <h1 className="font-roboto font-reg capitalize">Forgot Password</h1>

          <Formik
            initialValues={formData}
            onSubmit={onForgotPassword}
            validationSchema={validation.forgotPasswordValidation}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
              resetForm,
            }) => (
              <Form>
                <div className="forgot-password-form">
                  <div className="my-6">
                    <C.IconInputWrapper>
                      <C.CommonInput
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </C.IconInputWrapper>
                    <p className="text-white mt-1">
                      {errors.email && touched.email && errors.email}
                    </p>
                  </div>

                  <div className="text-center mb-5">
                    <C.CommonButton type="submit" disabled={isSubmitting}>
                      Send Reset Link
                    </C.CommonButton>
                  </div>

                  <div className="text-center">
                    <Link className="text-white" to={"/login"}>
                      Back to Login
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </S.ForgotPasswordContent>
      </S.ForgotPasswordContainer>
    </S.ForgotPasswordWrapper>
  );
};

export default ForgotPassword;
