import React, { useState } from "react";
import * as S from "./styles";
import * as C from "../../common-styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TbEyeClosed } from "react-icons/tb"; // Assuming this is the correct import for the icon
import ColoredLogo from "../../Assets/Images/logo-colored.svg";
import GoogleIcon from "../../Assets/Images/google-icon.svg";
import { Formik, Form } from "formik";
import * as validation from "../../Config/validation.config";
import * as config from "../../Config/common.config";
import * as APIPATHS from "../../API/path";
import APIRequest from "../../API";
import toast from "react-hot-toast";
import { AiOutlineEye } from "react-icons/ai";
import * as interFace from "../../Config/interface.config";

const SignUp: React.FC = () => {
  const { role } = useParams<{ role: string }>(); // Specify the type for useParams
  const navigate = useNavigate();
  const [formData] = useState<interFace.SignUpInterface>({
    email: "naginuser@gmail.com",
    fullname: "Nagin User",
    password: "Nagin@2204",
    role: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSignUp = async (values: interFace.SignUpInterface) => {
    // Your submission logic goes here
    values.role = role
      ? process.env.REACT_APP_CREATOR_ROLE_ID
      : process.env.REACT_APP_USER_ROLE_ID;
    const promise = APIRequest(APIPATHS.register, values);

    // creating new user
    toast.promise(promise, {
      loading: "Signin you up...",
      success: (data: any) => {
        if (data.error) throw new Error(data.error.message);
        const { access, refresh }: interFace.AuthData = data.data.tokens;
        config.updateToken(access.token, refresh.token);
        navigate(role ? "/creator-details" : "/home");
        return "Account created successfully.";
      },
      error: (err) => {
        return err.message;
      },
    });
  };

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <S.SignUpWrapper>
      <S.SignUpContainer>
        <S.ColoredLogo src={ColoredLogo} />
        <S.SignUpContent>
          <h1 className="font-roboto font-reg capitalize">
            {role === "creator" ? "Creator Application" : "Sign Up"}
          </h1>

          <Formik
            initialValues={formData}
            onSubmit={onSignUp}
            validationSchema={validation.signUpValidation}
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
                <div className="login-form">
                  <div>
                    <C.CommonInput
                      placeholder="Full name"
                      name="fullname"
                      value={values.fullname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-white mt-0.5">
                      {errors.fullname && touched.fullname && errors.fullname}
                    </p>
                  </div>
                  <div>
                    <C.CommonInput
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-white mt-0.5">
                      {errors.email && touched.email && errors.email}
                    </p>
                  </div>
                  <div>
                    <C.IconInputWrapper>
                      <C.CommonInput
                        placeholder="Password"
                        name="password"
                        type={!showPassword ? "password" : "text"}
                        value={values.password}
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
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>

                  <C.CommonButton type="submit" disabled={isSubmitting}>
                    Continue
                  </C.CommonButton>

                  {role && (
                    <Link
                      to={"/signup"}
                      onClick={() => resetForm()}
                      className="text-[#767676] text-center"
                    >
                      Back to Sign up
                    </Link>
                  )}

                  <p className="text-white text-center">
                    By signing up you agree to our terms and privacy policy
                  </p>

                  {role !== "creator" && (
                    <Link
                      onClick={() => resetForm()}
                      className="text-center text-white"
                      to="/signup/creator"
                    >
                      Sign up as creator
                    </Link>
                  )}

                  <div className="or-title">
                    <span>Or</span>
                  </div>

                  <div className="text-center">
                    <p className="text-[#767676]">
                      Already have an account ?
                      <Link className="text-white" to={"/login"}>
                        {" "}
                        Login
                      </Link>
                    </p>
                  </div>
                  <div>
                    <C.CommonIonButton>
                      <img alt="fanxo-logo" src={GoogleIcon} />
                      <span>Signup With Google</span>
                    </C.CommonIonButton>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </S.SignUpContent>
      </S.SignUpContainer>
    </S.SignUpWrapper>
  );
};

export default SignUp;
