import React from "react";
import * as P from "./style";
import LikeIcon from "../../Assets/Icons/Like";
import CommentIcon from "../../Assets/Icons/Comment";
import RupeeIcon from "../../Assets/Icons/RupeeIcon";
import PostImge from "../../Assets/Images/post_img.png";
import UserImage from "../../Assets/Images/user-profile-img.png";

const Post: React.FC = () => {
  return (
    <P.Post>
      <P.Header>
        <div className="flex items-center gap-3">
          <P.UserImage src={UserImage} alt="user" />
          <P.UserTitle>Ranbir</P.UserTitle>
        </div>
        <P.Time>16 Hours ago</P.Time>
      </P.Header>
      <P.Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sed
        sapiente iusto repudiandae rerum esse eligendi odit ipsa quod quia
        dignissimos accusantium exercitationem, cumque magni nulla quisquam
        dolor veritatis laborum.
      </P.Description>

      <P.PostImage src={PostImge} />

      <P.ActionWrapper>
        <LikeIcon />
        <CommentIcon />
        <RupeeIcon />
      </P.ActionWrapper>
      <P.CommentWrapper>
        <p>View All 100 comment</p>
      </P.CommentWrapper>
    </P.Post>
  );
};

export default Post;
