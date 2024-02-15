import styled from "styled-components";

export const ProfileCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding-top: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #3B3B3B;
    width: calc(100% - 1.5rem);

    @media screen and (max-width: 600px){
        flex-wrap: wrap;
    }
`

export const ProfileImg = styled.img`
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 1.5px solid #fff;

    @media screen and (max-width: 600px){
        flex: 1;
    }
`

export const ProfileDetails = styled.div`
    @media screen and (max-width: 600px){
        flex: 1;
    }
`

export const ProfileTitle = styled.h3`
    font-size: 1.8rem;
`

export const ProfileEmail = styled.p`

`

export const ProfileIconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const SubscribeBtn = styled.button`
    color: white;
    background-color: black;
    padding: 0.7rem 1rem;
    border-radius: 50px;
    display: flex;
    gap: 1rem;
    font-weight: 500;

    @media screen and (max-width: 600px){
        flex-basis: 100%;
        align-items: center;
        justify-content: center;
    }

`

export const ProfileTitleWrapper = styled.div`
    display:flex;
    align-items: center;
    gap: .2rem;
`

export const ProfileDetailBox = styled.div`
`