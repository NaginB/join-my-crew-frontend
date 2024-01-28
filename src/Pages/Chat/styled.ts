import styled from "styled-components";

export const MessageWrapper = styled.div`
    padding: 2rem;
    padding-bottom: 0;
`;

export const UserListWrallper = styled.div`
    width: 320px;
    overflow: hidden;
    height: 100%;
    // background: blue;
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
`

export const MessageContainer = styled.div`
    padding-top: 1rem;
    width: 100%;
    height: calc(100vh - 72px);
    display: flex;
`

export const NewMessageButton = styled.button`
    padding: .5rem 2rem;
    color: white;
    background: #000000;
    border-radius: 50px;
`
