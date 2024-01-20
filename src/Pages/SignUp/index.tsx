import React from "react";
import * as S from "./styles";
import * as C from "../../common-styles";
import { Link, useParams } from "react-router-dom";
import { TbEyeClosed } from "react-icons/tb";

const SignUp: React.FC = () => {

  const { role } = useParams();
  return (
    <S.SignUpWrapper>
      <S.SignUpContainer>
        <S.ColoredLogo src="/images/logo-colored.svg" />
        <S.SignUpContent>
          <h1 className="font-roboto font-reg  capitalize">{role === 'creator' ? 'Creator Application' : 'Sign Up'}</h1>

          <div className="login-form">
            <div>
              <C.CommonInput placeholder="Full name " />
            </div>
            <div>
              <C.CommonInput placeholder="Email " />
            </div>
            <C.IconInputWrapper>
              <C.CommonInput placeholder="Password " />
              <TbEyeClosed className="input-icon" size={18} />
            </C.IconInputWrapper>


            <C.CommonButton>Continue</C.CommonButton>

            {
              role && <Link to={'/signup'} className="text-[#767676] text-center">Back to Sign up</Link>
            }

            <p className="text-white text-center">By signing up you agree to our terms and privacy policy</p>

            {
              role !== 'creator' && (
                <Link className="text-center text-white" to='/signup/creator'>Sign up as creator</Link>
              )
            }

            <div className="or-title">
              <span>Or</span>
            </div>

            <div className="text-center">
              <p className="text-[#767676]">Already have an account ?
                <Link className="text-white" to={'/'}> Login</Link>
              </p>
            </div>
            <div>
              <C.CommonIonButton>
                <img alt="fanxo-logo" src="/images/google-icon.svg" />
                <span>Signup With Google</span>
              </C.CommonIonButton>
            </div>
          </div>
        </S.SignUpContent>
      </S.SignUpContainer>
    </S.SignUpWrapper>
  );
};

export default SignUp;
