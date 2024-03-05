import styled from "styled-components";

export const ForgotPasswordWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #1d1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 2rem 0;
`;

export const ForgotPasswordContainer = styled.div`
  width: 600px;
  max-width: 95%;
  border-radius: 0.7rem;
  margin: auto;
  background-color: #000;
  padding: 2rem 0;
`;

export const ColoredLogo = styled.img`
  width: 150px;
  max-width: 90%;
  margin: auto;
  display: block;
  margin-top: 2rem;
`;

export const ForgotPasswordContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 3rem auto;

  .forgot-password-form {
    width: 400px;
    max-width: 90%;
    margin: auto;
  }

  h1 {
    color: white;
    font-size: 1.8rem;
    font-weight: 100;
  }

  .text-white {
    color: white;
  }

  .text-center {
    text-align: center;
  }
`;
