import styled from "styled-components";

export const UserImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    object-fit: cover;
`


export const ChatUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
    cursor: pointer;
    border-radius: 10px;
    .last-message-time{
        color: #8B8B8B;
        font-size: 12px;
    }

    &:hover{
        background: #393939;
    }
`



export const LastMessage = styled.div`
   color: 17px;
`

export const UserDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`