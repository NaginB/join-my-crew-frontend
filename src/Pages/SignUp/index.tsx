import React, { useEffect, useState } from "react";
import * as S from "./styles";
import * as C from "../../common-styles";
import { Link, useParams } from "react-router-dom";
import { TbEyeClosed } from "react-icons/tb"; // Assuming this is the correct import for the icon
import ColoredLogo from "../../Assets/Images/logo-colored.svg";
import GoogleIcon from "../../Assets/Images/google-icon.svg";
import { SignUpInterface } from "./interface"; // Assuming SignUpInterface is defined in "./interface"
import { Formik, Form, FormikHelpers } from "formik";
import * as validation from '../../Config/validation.config'

const SignUp: React.FC = () => {
  const { role } = useParams<{ role: string }>(); // Specify the type for useParams

  const [formData] = useState<SignUpInterface>({
    email: "",
    name: "",
    password: "",
    role: ""
  });

  const onSignUp = (values: SignUpInterface, actions: FormikHelpers<SignUpInterface>) => {
    // Your submission logic goes here
    values.role = role ?? 'user';
    console.log(values);
  }

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
              resetForm
            }) => (
              <Form>
                <div className="login-form">
                  <div>
                    <C.CommonInput
                      placeholder="Full name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-white mt-0.5">{errors.name && touched.name && errors.name}</p>
                  </div>
                  <div>
                    <C.CommonInput
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-white mt-0.5">{errors.email && touched.email && errors.email}</p>
                  </div>
                  <div>
                    <C.IconInputWrapper>
                      <C.CommonInput
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <TbEyeClosed className="input-icon" size={18} />
                    </C.IconInputWrapper>
                    <p className="text-white mt-0.5">{errors.password && touched.password && errors.password}</p>
                  </div>

                  <C.CommonButton type="submit" disabled={isSubmitting}>
                    Continue
                  </C.CommonButton>

                  {role && (
                    <Link to={"/signup"} onClick={() => resetForm()} className="text-[#767676] text-center">
                      Back to Sign up
                    </Link>
                  )}

                  <p className="text-white text-center">
                    By signing up you agree to our terms and privacy policy
                  </p>

                  {role !== "creator" && (
                    <Link onClick={() => resetForm()} className="text-center text-white" to="/signup/creator">
                      Sign up as creator
                    </Link>
                  )}

                  <div className="or-title">
                    <span>Or</span>
                  </div>

                  <div className="text-center">
                    <p className="text-[#767676]">
                      Already have an account ?
                      <Link className="text-white" to={"/"}>
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
