import React from "react";
import * as S from "./styles";
import * as C from "../../common-styles";
import { Link } from "react-router-dom";
import { TbEyeClosed } from "react-icons/tb";
import ColoredLogo from "../../Assets/Images/logo-colored.svg";
import GoogleIcon from "../../Assets/Images/google-icon.svg";

const Login: React.FC = () => {
  return (
    <S.LoginWrapper>
      <S.LoginContainer>
        <S.ColoredLogo src={ColoredLogo} />
        <S.LoginContent>
          <h1 className="font-roboto font-reg">Log in</h1>

          <div className="login-form">
            <div>
              <C.CommonInput placeholder="Email " />
            </div>
            <C.IconInputWrapper>
              <C.CommonInput placeholder="Password " />
              <TbEyeClosed className="input-icon" size={18} />
            </C.IconInputWrapper>

            <C.CommonButton>Continue</C.CommonButton>
            <div className="text-center">
              <Link to="/password/forget" className="text-white">
                Forgot Password ?
              </Link>
            </div>

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
                <span>Login With Google</span>
              </C.CommonIonButton>
            </div>
          </div>
        </S.LoginContent>
      </S.LoginContainer>
    </S.LoginWrapper>
  );
};

export default Login;
