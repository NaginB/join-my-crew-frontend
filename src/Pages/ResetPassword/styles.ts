import styled from "styled-components";

export const ResetPasswordWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #1d1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 2rem 0;
`;

export const ResetPasswordContainer = styled.div`
  width: 600px;
  max-width: 95%;
  // height: 85vh;
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

export const ResetPasswordContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 3rem auto;

  .reset-form-tag{
    width: 400px;
    max-width: 90%;
    margin: auto;
  }
  h1 {
    color: white;
    font-size: 1.8rem;
    font-weight: 100;
  }

  .reset-password-form {
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

