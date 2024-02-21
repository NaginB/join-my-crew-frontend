import React from "react";
import * as P from "./style";
import PostHeader from "./PostHeader";
import PostSlider from "./PostSlider";
import PostFooter from "./PostFooter";
import PostFame from "./PostFame";

const Post: React.FC = () => {
  return (
    <P.Post>
      <PostHeader />
      <PostSlider />
      <PostFooter />
     <PostFame/>
    </P.Post>
  );
};

export default Post;
