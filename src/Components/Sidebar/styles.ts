import styled from "styled-components";
import { Link } from 'react-router-dom'

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

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: unset;
  }

  hr {
    width: 90%;
    height: 1px;
    background-color: #d9d9d9;
    opacity: 50%;
    border: none;
    margin: 3rem auto;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  width: 80%;
  object-fit: cover;
  margin: 3rem auto;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ProfileImage = styled.img`
  width: 120px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 1rem;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 0;
    background: linear-gradient(90deg, #C1F1FF 0%, #C6CAFD 49.41%, #ECB8FF 100%);
  }
`;

export const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.2rem;
  cursor: pointer;
  gap: 0.5rem;

  svg{
    @media screen and (max-width: 1200px) {
        color: black;
    }

  }
  .item-title {
    font-size: 18px;
    position: relative;
    bottom: 1px;
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
`;
