import React from 'react'
import * as P from "./style";
import CommentIcon from "../../Assets/Icons/Comment";
import { CiHeart } from "react-icons/ci";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { FeedPosts } from '../../Config/interface.config'

interface Props{
  post?: FeedPosts;
}

const PostFooter: React.FC<Props> = () => {
  return (
    <P.PostFooter>
      <P.ActionWrapper>
        <CiHeart className="text-white" size={36} />
        <CommentIcon />
        <HiOutlineCurrencyRupee strokeWidth={1} className="text-white" size={34} />
      </P.ActionWrapper>
    </P.PostFooter>
  )
}

export default PostFooter;
