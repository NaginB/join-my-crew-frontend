import React from 'react';
import * as P from './style';
import likedImage from "../../Assets/Images/profileGirl.jpeg";
import { FeedPosts } from '../../Config/interface.config';

interface Props{
  post?: FeedPosts;
}

const PostFame: React.FC<Props> = () => {
  return (
    <>
      <P.LikesWrapper>
        <P.LikedByImg src={likedImage} />
        <P.LikedByText> Liked by
          <b> craig_love</b> and
          <b> 44, 686 orders</b>
        </P.LikedByText>
      </P.LikesWrapper>
      <P.Description>
        <span>joshua_l</span> The game in Japan was amazing and I want to share some photos.
      </P.Description>
    </>
  )
}

export default PostFame
