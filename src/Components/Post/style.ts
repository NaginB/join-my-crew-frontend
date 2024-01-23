import styled from "styled-components";

export const Post = styled.div`
  width: 700px;
  max-width: 90%;
  margin: auto;
  margin-bottom: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  padding-bottom: 0;
`;

export const UserImage = styled.img`
  width: 60px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
  border: 1.5px solid #fff;
`;

export const UserTitle = styled.p`
  font-size: 1.3rem;
  color: white;
`;

export const Time = styled.p`
  color: #8b8b8b;
  font-size: 14px;
  margin-top: 0;
`;

export const Description = styled.div`
  color: #ffffff;
  font-size: 14px;
  padding: 1rem;
  margin: auto;
`;

export const PostImage = styled.img`
  border-radius: 10px;
  margin: auto;
`;
export const ActionWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const CommentWrapper = styled.div`
  p {
    margin-top: 10px;
    font-size: 13px;
    color: #8e8e8e;
    cursor: pointer;
  }
`;
