import React from 'react'
import * as P from "./style";
import UserImage from "../../Assets/Images/user-profile-img.png";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { FeedPosts } from '../../Config/interface.config';

interface Props {
  post?: FeedPosts;
}

const PostHeader: React.FC<Props> = ({ post }: Props) => {
  const navigate = useNavigate()

  const creator = post?.creator;
  return (
    <P.Header className='cursor-pointer' onClick={() => navigate('/profile/1')}>
      <div className="flex items-center gap-3">
        <P.UserImage src={UserImage} alt="user" />
        <div>
          <P.UserTitle>{creator?.fullname}</P.UserTitle>
          {/* <P.PostLocation>Tokyo, Japan</P.PostLocation> */}
        </div>
      </div>
      {/* <P.Time>16 Hours ago</P.Time> */}
      <BsThreeDots color={'#ffffff'} />
    </P.Header>
  )
}

export default PostHeader
