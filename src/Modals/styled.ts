import styled from "styled-components";

export const DragAndDrop = styled.div`
:where(.css-dev-only-do-not-override-1xg9z9n).ant-modal .ant-modal-content{
  background-color: #262626;
}
`;

export const Header = styled.div`
  h1{
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  border-bottom: 1px solid #4f4f4f;
  padding-bottom: 10px;
  }
`

export const PostFooter = styled.div`
  text-align: center;
  button{
    background-color: #393939;
    color: white;
    padding: 0.3rem 1.5rem;
    border-radius: 4px;
    font-size: 14px;
    &:hover{
      color: white;
      background-color: #767676;
    }
  }
`

export const PostForm = styled.div`
  button{
    background-color: #393939;
    color: white;
    padding: 0.3rem 1.5rem;
    border-radius: 4px;
    font-size: 14px;
    &:hover{
      color: white;
      background-color: #767676;
    }
  }

  textarea{
    height: 250px;
    resize: none;
  }
`;