import React, { useState } from "react";
import * as P from "./style";
import PostHeader from "./PostHeader";
import PostSlider from "./PostSlider";
import PostFooter from "./PostFooter";
import PostFame from "./PostFame";
import { FeedPosts } from "../../Config/interface.config";

interface Props {
  locked?: boolean;
  post?: FeedPosts;
}

const Post: React.FC<Props> = ({ locked = false, post }: Props) => {
  return (
    <P.Post $locked={locked}>
      <PostHeader post={post} />
      <PostSlider post={post} locked={post?.isLocked} />
      {!locked && <PostFooter post={post} />}
      {!locked && <PostFame post={post} />}
    </P.Post>
  );
};

export default Post;
