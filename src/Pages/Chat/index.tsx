import React from 'react'
import * as C from './styled';
import ChatUser from '../../Components/Chat/ChatUser';

const Chat: React.FC = () => {
  return (
    <C.MessageWrapper className='text-red-700'>
      <div className='flex items-center justify-between'>
        <h1 className='text-white font-bold text-3xl'>Messages</h1>
        <C.NewMessageButton>New Message</C.NewMessageButton>
      </div>
      <C.MessageContainer>
        <C.UserListWrallper>
          {Array(20).fill('').map((dt) => (
            <ChatUser />
          ))}
        </C.UserListWrallper>
        <C.MessageSection>
          <h2 className="text-white">messages</h2>
        </C.MessageSection>
      </C.MessageContainer>

    </C.MessageWrapper>
  )
}

export default Chat;
