import React from 'react'
import * as P from './style'
import ImageGallery from '../../Icons/ImageIcon'
import Folder from '../../Icons/Folter'
import Users from '../../Icons/Users'
import BlueTick from '../../Icons/BlueTick'

const ProfileCard: React.FC = () => {
    return (
        <P.ProfileCard>
            <P.ProfileImg src='/images/user_profile_img.png' />
            <P.ProfileDetails className='flex-1'>
                <P.ProfileTitleWrapper>
                    <P.ProfileTitle className='text-white font-bold'>Ranbir</P.ProfileTitle>
                    <BlueTick />
                </P.ProfileTitleWrapper>
                <P.ProfileEmail className='text-white'>ranbir@fanxo</P.ProfileEmail>
                <div className='flex gap-5 mt-5 items-center'>
                    <P.ProfileIconWrapper className='flex'>
                        <ImageGallery />
                        <span className='text-white'>89</span>
                    </P.ProfileIconWrapper>
                    <P.ProfileIconWrapper className='flex'>
                        <Folder />
                        <span className='text-white'>89</span>
                    </P.ProfileIconWrapper>
                </div>
            </P.ProfileDetails>
            <P.SubscribeBtn>
                <Users />
                Subscribe
            </P.SubscribeBtn>
        </P.ProfileCard>
    )
}

export default ProfileCard
