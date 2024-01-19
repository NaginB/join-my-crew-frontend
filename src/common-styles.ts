import styled from "styled-components";

export const CommonInput = styled.input`
  width: 100%;
  height: 2rem;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #8f8f8f;
  color: #8f8f8f;
  opacity: 56%;
  //   font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

export const CommonButton = styled.div`
  background-color: #313131;
  width: 100%;
  padding: 0.8rem 0;
  color: #767676;
  text-align: center;
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
  font-size: 16px;
  &:hover {
    background: #fff;
    color: #000;
  }
  //   font-family: "Roboto", sans-serif;
`;

export const CommonIonButton = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  width: 100%;
  padding: 0.5rem 0;
  color: white;
  text-align: center;
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  img {
    // position: absolute;
    // top: 50%;
    // left: 20%;
    // transform: translate(-50%, -50%);
  }
`;
