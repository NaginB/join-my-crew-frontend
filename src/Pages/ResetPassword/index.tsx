import React, { useState } from "react";
import * as S from "./styles";
import * as C from "../../common-styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { TbEyeClosed } from "react-icons/tb";
import ColoredLogo from "../../Assets/Images/logo-colored.svg";
import * as interFace from "../../Config/interface.config";
import { Formik, Form } from "formik";
import * as validation from "../../Config/validation.config";
import * as APIPATHS from "../../API/path";
import APIRequest from "../../API";
import toast from "react-hot-toast";

const ResetPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [formData] = useState<interFace.ResetPasswordInterface>({
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onResetPassword = async (values: interFace.ResetPasswordInterface) => {
    const path: any = APIPATHS.resetPassword;
    path.url = path.url.replaceAll("{{token}}", token);
    const payload = {
      password: values.newPassword,
    };
    // Your reset password logic goes here
    const promise = APIRequest(path, payload);

    toast.promise(promise, {
      loading: "Resetting your password...",
      success: (data: any) => {
        if (data.error) throw new Error(data.error.message);
        navigate("/login");
        return "Password reset successfully.";
      },
      error: (err) => {
        return err.message;
      },
    });
  };

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <S.ResetPasswordWrapper>
      <S.ResetPasswordContainer>
        <S.ColoredLogo src={ColoredLogo} />
        <S.ResetPasswordContent>
          <h1 className="font-roboto font-reg capitalize">Reset Password</h1>

          <Formik
            initialValues={formData}
            onSubmit={onResetPassword}
            validationSchema={validation.resetPasswordValidation}
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
              <Form className="reset-form-tag">
                <div className="reset-password-form">
                  <div>
                    <C.IconInputWrapper>
                      <C.CommonInput
                        placeholder="New Password"
                        name="newPassword"
                        type={!showPassword ? "password" : "text"}
                        value={values.newPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {showPassword ? (
                        <AiOutlineEye
                          onClick={toggleShowPassword}
                          className="input-icon"
                          size={18}
                        />
                      ) : (
                        <TbEyeClosed
                          onClick={toggleShowPassword}
                          className="input-icon"
                          size={18}
                        />
                      )}
                    </C.IconInputWrapper>
                    <p className="text-white mt-0.5">
                      {errors.newPassword &&
                        touched.newPassword &&
                        errors.newPassword}
                    </p>
                  </div>
                  <div>
                    <C.IconInputWrapper>
                      <C.CommonInput
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        type={!showPassword ? "password" : "text"}
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {showPassword ? (
                        <AiOutlineEye
                          onClick={toggleShowPassword}
                          className="input-icon"
                          size={18}
                        />
                      ) : (
                        <TbEyeClosed
                          onClick={toggleShowPassword}
                          className="input-icon"
                          size={18}
                        />
                      )}
                    </C.IconInputWrapper>
                    <p className="text-white mt-0.5">
                      {errors.confirmPassword &&
                        touched.confirmPassword &&
                        errors.confirmPassword}
                    </p>
                  </div>

                  <C.CommonButton type="submit" disabled={isSubmitting}>
                    Reset Password
                  </C.CommonButton>

                  <div className="text-center">
                    <Link className="text-white" to={"/home"}>
                      Return
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </S.ResetPasswordContent>
      </S.ResetPasswordContainer>
    </S.ResetPasswordWrapper>
  );
};

export default ResetPassword;
