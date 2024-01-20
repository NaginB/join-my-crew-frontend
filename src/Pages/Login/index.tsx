import React from "react";
import * as S from "./styles";
import * as C from "../../common-styles";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <S.LoginWrapper>
      <S.LoginContainer>
        <S.ColoredLogo src="/images/logo-colored.svg" />
        <S.LoginContent>
          <h1 className="font-roboto font-reg">Log in</h1>

          <div className="login-form">
            <div>
              <C.CommonInput placeholder="Email " />
            </div>
            <div>
              <C.CommonInput placeholder="Password " />
            </div>

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
              <p className="text-[#767676]">Don't have an account ?
                <Link className="text-white" to={'/signup'}> Sign up</Link>
              </p>
            </div>

            <div>
              <C.CommonIonButton>
                <img alt="fanxo-logo" src="/images/google-icon.svg" />
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
