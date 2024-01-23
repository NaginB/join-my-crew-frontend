import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  //   background: lightblue;
  display: flex;
`;

export const Feed = styled.div`
  width: 100%;
  min-height: 100vh;
  //   background: lightgreen;
  flex: 3;
`;

export const SuggesstionWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: yellow;
  flex: 1;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #2a2a2a;

  .header-search {
    input {
      border-bottom: none;
      color: #b3b3b3;
      opacity: 1;
    }
    padding: 2px 1rem;
    width: 400px;
    max-width: 90%;
    border: 1px solid #b3b3b3;
    border-radius: 50px;
  }
`;

export const FeedWrapper = styled.div`
  max-height: calc(100vh - 100px);
  padding: 1rem;
  overflow: auto;
`;
