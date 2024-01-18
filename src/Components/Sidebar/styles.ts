import styled from "styled-components";

export const SidebardWrapper = styled.div`
  width: 250px;
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #252525;
  color: white;
  overflow: auto;

  hr {
    width: 90%;
    height: 1px;
    background-color: #d9d9d9;
    opacity: 50%;
    border: none;
    margin: 3rem auto;
  }
`;

export const Logo = styled.img`
  width: 80%;
  object-fit: cover;
  margin: 3rem auto;
`;

export const Image = styled.img`
  width: 120px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 1rem;
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.2rem;
  cursor: pointer;

  .item-title {
    font-size: 18px;
    position: relative;
    bottom: 1px;
  }
`;
