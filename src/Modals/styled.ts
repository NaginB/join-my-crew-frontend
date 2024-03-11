import styled from "styled-components";

export const DragAndDrop = styled.div`
  width: 100%;
  height: 400px;
  border: 1px dashed #262626;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .button, [type='button'], [type='reset'], [type='submit']{
    background-color: #1677ff!important;
  }
`;