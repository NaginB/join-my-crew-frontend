import React, { useState } from 'react'
import * as L from './style';
import { PiStarOfDavid } from "react-icons/pi";
import LogoLight from '../../Assets/Images/FanxoLight.svg'
import Card from './Card';
import { FamousUsers } from './interface';
import girlImage from '../../Assets/Images/profileGirl.jpeg'
import girlImage2 from '../../Assets/Images/profileGirl2.jpeg'
import boyImage from '../../Assets/Images/profileBoy.png'
import postGirlImg from '../../Assets/Images/girlWallpaper.jpg'
import iPhone11 from '../../Assets/Images/iphone11.png'
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

const Landing: React.FC = () => {

  const [famousUsers] = useState<FamousUsers[]>([
    {
      id: 1,
      name: 'ANNA SHUMATE',
      followers: '21.4M',
      imageURL: boyImage
    },
    {
      id: 2,
      name: 'ANNA SHUMATE',
      followers: '21.4M',
      imageURL: girlImage2
    },
    {
      id: 3,
      name: 'ANNA SHUMATE',
      followers: '21.4M',
      imageURL: girlImage
    },
    {
      id: 4,
      name: 'ANNA SHUMATE',
      followers: '21.4M',
      imageURL: girlImage2
    },
    {
      id: 5,
      name: 'ANNA SHUMATE',
      followers: '21.4M',
      imageURL: boyImage
    },
  ])

  return (
    <L.Landing>
      <L.Header>
        <PiStarOfDavid color='#ffffff' size={60} />
        <L.Logo src={LogoLight} />
        <div className='flex items-center gap-4'>
          <L.Login className='font-noto' to={'/login'}>Log in</L.Login>
          <L.SignUp className='font-noto' to={'/signup'}>Get Started</L.SignUp>
        </div>
      </L.Header>

      <L.SectionOne>
        <h1>#1st Time Ever In India, For Creators.</h1>
        <h3>EARN AS A CREATOR & <br /> CONNECT WITH YOUR TRUE FANS</h3>
        <div>
          <p>Monetize your community, post exclusive behind-the-</p>
          <p> scenes content,</p>
          <p>offer memberships and 10x your earnings only on fanxo.</p>
        </div>

        <L.CreatorBtn>I am a creator</L.CreatorBtn>
      </L.SectionOne>

      <L.SectionTwo>
        <L.SubHeading>PREMIUM CONTENT FOR <br />PREMIUM FANS</L.SubHeading>
        <L.CardWrapper>
          {
            famousUsers.map(user => <Card {...user} />)
          }
        </L.CardWrapper>
      </L.SectionTwo>

      <L.SectionThree>
        <L.SubHeading>Earnings as you have <br />never seen</L.SubHeading>
        <L.SecThreeImg src={postGirlImg} />
      </L.SectionThree>

      <L.SectionFour>
        <L.SubHeading>TRACK YOUR STATS</L.SubHeading>
        <L.SectionFlex>
          <L.PhoneImg src={iPhone11} />
          <L.StateBoxContainer>
            <L.StateBoxWrapper>
              <L.StateBox><h5>SUBSCRIBERS</h5></L.StateBox>
              <L.StateBox><h5>PAID DM’S</h5></L.StateBox>
            </L.StateBoxWrapper>

            <L.StateBoxWrapper>
              <L.StateBox><h5>TIPS</h5></L.StateBox>
              <L.StateBox><h5>EARNINGS</h5></L.StateBox>
            </L.StateBoxWrapper>
          </L.StateBoxContainer>
        </L.SectionFlex>
      </L.SectionFour>

      <L.FaqWrapper>
        <L.SubHeading>FREQUENTLY ASKED <br /> QUESTIONS</L.SubHeading>
        <Collapse>
          <Panel className='text-white' header="This is panel header 1" key="1">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ipsum eligendi quis doloribus nobis illum reiciendis. Velit, alias iste, in, officia at error reiciendis sequi nobis minima totam laborum pariatur.</p>
          </Panel>
        </Collapse>
      </L.FaqWrapper>
    </L.Landing>
  )
}

export default Landing
