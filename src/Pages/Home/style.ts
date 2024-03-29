import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

  @media screen and (max-width: 1200px) {
    min-height: unset;
  }
`;

export const Feed = styled.div`
  width: 100%;
  min-height: 100vh;
  flex: 6;
  @media screen and (max-width: 1200px) {
    min-height: unset;
  }
`;

export const SuggestionWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  flex: 2;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #2a2a2a;

  @media screen and (max-width: 600px) {
    background-color: white;
    height: 70px;
    .header-search {
      display: none;
    }
  }

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

export const FeedWrapper = styled.div<{ stretch?: boolean }>`
  max-height: ${(props) => (props.stretch ? `100vh` : `calc(100vh - 100px)`)};
  overflow: auto;
  padding: 1rem;

  @media screen and (max-width: 1200px) {
    max-height: ${(props) => (props.stretch ? `calc(100vh - 50px)` : `calc(100vh - 150px)`)};
  }
`;

export const SuggestedContentWrapper = styled.div`
  max-height: calc(100vh - 100px);
  overflow: auto;
  padding: 1rem;

  @media screen and (max-width: 1200px) {
    max-height: calc(100vh - 120px);
  }
`;

export const Logo = styled.img`
  width: 120px;
  max-width: 90%;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const CreatePostBtn = styled.button`
  background: linear-gradient(
    90deg,
    #259fd6 0%,
    #5d6abe 34.91%,
    #7554b4 62.9%,
    #7554b4 100%
  );
`;
