import React from 'react'
import * as P from "./style";
import UserImage from "../../Assets/Images/user-profile-img.png";
import { BsThreeDots } from "react-icons/bs";

const PostHeader: React.FC = () => {
  return (
    <P.Header>
      <div className="flex items-center gap-3">
        <P.UserImage src={UserImage} alt="user" />
        <div>
          <P.UserTitle>Ranbir</P.UserTitle>
          <P.PostLocation>Tokyo, Japan</P.PostLocation>
        </div>
      </div>
      {/* <P.Time>16 Hours ago</P.Time> */}
      <BsThreeDots color={'#ffffff'} />
    </P.Header>
  )
}

export default PostHeader
