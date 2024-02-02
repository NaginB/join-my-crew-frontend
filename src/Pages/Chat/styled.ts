import styled from "styled-components";
import { CommonButton, CommonInput } from '../../common-styles'

export const MessageWrapper = styled.div`
    padding: 2rem;
    padding-bottom: 0;
`;

export const MessageContainer = styled.div`
padding-top: 1rem;
width: 100%;
height: calc(100vh - 72px);
display: flex;
`

export const UserListWrallper = styled.div`
width: 320px;
overflow: hidden;
height: 100%;
display: flex;
flex-direction: column;
gap: 1rem;
padding: 1rem 0;
padding-right: 0.5rem;
&:hover{
    overflow: auto;
}
`
export const MessageSection = styled.div`
flex: 8;
position: relative;
display:flex;
flex-direction: column;
`

export const SubscribeButton = styled.button`
background: #000000;
padding: .5rem 1rem;
color: #ffffff;
border-radius: 2rem;
font-size: 1.1rem;
`;

export const SubscribeBox = styled.div`
height: 80px;
width: 100%;
background: #393939;
display: flex;
align-items: center;
justify-content: center;
`

export const MessagesWrapper = styled.div`
flex: 1;
color: white;
overflow: auto;
`

export const MessageHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NewMessageButton = styled(CommonButton)`
    padding: 0.5rem 1rem;
    color: white;
    background: #000000;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`

export const MessageActionWrapper = styled.form`
    padding: .8rem;
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const NewMessage = styled(CommonInput)`
    flex: 1;
    background-color: #404040;
    height: unset;
    padding: .8rem 1rem;
    font-size: 18px;
    border-radius: 7px;
    border: none;
    color: #B8B8B8;
    font-family: 'Noto Sans', sans-serif;
    &::placeholder{
        color: #B8B8B8;
    }
`;

export const SendButton = styled.button`
    background-color: #fff;
    width: 40px;
    height: 40px;
    aspect-ratio: 1/1;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .send-icon{
        font-size: 2rem;
    }
`