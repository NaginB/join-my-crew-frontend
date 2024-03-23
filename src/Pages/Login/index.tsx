import React, { useEffect, useState } from "react";
import * as S from "./styles";
import * as C from "../../common-styles";
import { Link, useNavigate } from "react-router-dom";
import { TbEyeClosed } from "react-icons/tb";
import ColoredLogo from "../../Assets/Images/logo-colored.svg";
import GoogleIcon from "../../Assets/Images/google-icon.svg";
import { Formik, Form } from "formik";
import * as validation from "../../Config/validation.config";
import { AiOutlineEye } from "react-icons/ai";
import * as APIPATHS from "../../API/path";
import APIRequest from "../../API";
import toast from "react-hot-toast";
import { updateUser } from "../../Redux/slices/userSlice";
import { useDispatch } from "react-redux";
import * as intterFace from "../../Config/interface.config";
import * as config from "../../Config/common.config";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import * as interFace from "../../Config/interface.config";
import { jwtDecode } from "jwt-decode";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [formData] = useState<intterFace.LoginInterface>({
    email: "",
    password: "",
  });

  const onLogin = async (values: intterFace.LoginInterface) => {
    const promise = APIRequest(APIPATHS.login, values);
    // creating new user
    toast.promise(promise, {
      loading: "Signing in...",
      success: (data: any) => {
        if (data.error) throw new Error(data.error.message);

        const user: intterFace.UserDetails = data.data.user;
        const { access, refresh }: intterFace.AuthData = data.data.tokens;
        config.updateToken(access.token, refresh.token);
        dispatch(updateUser(user));
        navigate("/home");
        return `Welcome back ${user.fullname} !`;
      },
      error: (err) => {
        return err?.message || "";
      },
    });
  };

  const onLoginWithGoogle = async (
    values: intterFace.LoginWithGoogleInterface
  ) => {
    const promise = APIRequest(APIPATHS.authGooglelogin, values);
    // creating new user
    toast.promise(promise, {
      loading: "Loggin in...",
      success: (data: any) => {
        if (data.error) throw new Error(data.error.message);

        const user: intterFace.UserDetails = data.data.user;
        const { access, refresh }: intterFace.AuthData = data.data.tokens;
        config.updateToken(access.token, refresh.token);
        dispatch(updateUser(user));
        navigate("/home");
        return `Welcome back ${user.fullname} !`;
      },
      error: (err) => {
        return err?.message || "";
      },
    });
  };

  const loginWithGoogle = (credentialResponse: CredentialResponse) => {
    const token: string = credentialResponse.credential ?? "";
    if (!token) return toast.error("Invalid signup");

    const payload: interFace.LoginWithGoogleInterface = {
      token,
    };

    onLoginWithGoogle(payload);
  };

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  useEffect(() => {
    if (config.getSessionToken()) navigate("/home");
  }, [navigate]);

  return (
    <S.LoginWrapper>
      <S.LoginContainer>
        <S.ColoredLogo src={ColoredLogo} />
        <S.LoginContent>
          <h1 className="font-roboto font-reg">Log in</h1>

          <Formik
            initialValues={formData}
            onSubmit={onLogin}
            validationSchema={validation.LoginpValidation}
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
                  <div className="text-center">
                    <Link className="text-white" to={"/password/forgot"}>
                      Forgot password?
                    </Link>
                  </div>
                  <div className="or-title">
                    <span>Or</span>
                  </div>
                  <div className="relative">
                    <GoogleLogin
                      width={400}
                      shape="pill"
                      theme="outline"
                      onSuccess={loginWithGoogle}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                      useOneTap
                    />

                    <C.CommonIonButton
                      type="button"
                      className="!absolute !bg-black top-0 left-0 w-full h-[40px] pointer-events-none"
                    >
                      <img alt="fanxo-logo" src={GoogleIcon} />
                      <span>Login With Google</span>
                    </C.CommonIonButton>
                  </div>
                  <div className="text-center">
                    <p className="text-[#767676]">
                      Don't have an account ?
                      <Link className="text-white" to={"/signup"}>
                        {" "}
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </S.LoginContent>
      </S.LoginContainer>
    </S.LoginWrapper>
  );
};

export default Login;
