import React, { useState } from 'react'
import * as C from './styled';
import ChatUser from '../../Components/Chat/ChatUser';
import { TbPlus } from 'react-icons/tb';
import { IoIosSend, IoMdMenu } from "react-icons/io";
import Messages from '../../Components/Chat/Messages';

const Chat: React.FC = () => {
  const [showUserList, setShowUserList] = useState<boolean>(false);
  return (
    <C.MessageWrapper>
      <C.MessageShader 
      isVisible={showUserList}
      onClick={() => setShowUserList(!showUserList)} />
      <C.MessageHeader>
        <C.MessageHeading className='text-white font-bold text-3xl'>
          <IoMdMenu
            onClick={() => setShowUserList(!showUserList)}
            className='menu-icon' />
          <span>Messages</span>
        </C.MessageHeading>
        <C.NewMessageButton>
          <TbPlus />
          <span>New Message</span>
        </C.NewMessageButton>
      </C.MessageHeader>

      <C.MessageContainer>
        <C.UserListWrallper showUserList={showUserList}>
          {Array(20).fill('').map((_, index) => (
            <ChatUser key={`user-${index}`} />
          ))}
        </C.UserListWrallper>

        <C.MessageSection>
          <C.SubscribeBox>
            <C.SubscribeButton>Subscribe for ₹  399/mo</C.SubscribeButton>
          </C.SubscribeBox>

          <C.MessagesWrapper>
            <Messages />
          </C.MessagesWrapper>

          <C.MessageActionWrapper>
            <C.NewMessage placeholder='Write a message...' />
            <C.SendButton>
              <IoIosSend className='send-icon' />
            </C.SendButton>
          </C.MessageActionWrapper>
        </C.MessageSection>

      </C.MessageContainer>
    </C.MessageWrapper>
  )
}

export default Chat;
