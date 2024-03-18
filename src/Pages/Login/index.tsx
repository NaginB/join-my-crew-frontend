import React, { useEffect, useState } from "react";
import * as S from "./styles";
import * as C from "../../common-styles";
import { Link, useNavigate, useParams } from "react-router-dom";
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



const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);


  const [formData] = useState<intterFace.LoginInterface>({
    email: "naginbanodha@gmail.com",
    password: "Nagin@1234",
  });

  const { role } = useParams<{ role: string }>(); // Specify the type for useParams


  const onLogin = async (values: intterFace.LoginInterface) => {
    const promise = APIRequest(APIPATHS.login, values);
    // creating new user
    toast.promise(promise, {
      loading: "Signing in...",
      success: (data: any) => {
        if (data.error) throw new Error(data.error.message);

        const user: intterFace.UserDetails = data.data.user;
        const { access, refresh }: intterFace.AuthData = data.data.tokens;
        config.updateToken(access.token, refresh.token)
        dispatch(updateUser(user));
        navigate('/home');
        return `Welcome back ${user.fullname} !`;
      },
      error: (err) => {
        return err?.message || '';
      },
    });
  };

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  useEffect(() => {
    if (config.getSessionToken()) navigate('/home')
  }, [navigate])

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
                        type={!showPassword ? "password" : 'text'}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {
                        showPassword ?
                          <AiOutlineEye onClick={toggleShowPassword} className="input-icon" size={18} /> :
                          <TbEyeClosed onClick={toggleShowPassword} className="input-icon" size={18} />
                      }
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
                      Don't have an account ?
                      <Link className="text-white" to={"/signup"}>
                        {" "}
                        Sign up
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
        </S.LoginContent>
      </S.LoginContainer>
    </S.LoginWrapper>
  );
};

export default Login;
