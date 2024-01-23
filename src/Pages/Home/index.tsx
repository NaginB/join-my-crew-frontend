import React from "react";
import * as H from "./style";
import * as C from "../../common-styles";
import { ExploreIcon } from "../../Icons/Explore";
import { TbSearch } from "react-icons/tb";
import Post from "../../Components/Post/Post";
const Home: React.FC = () => {
  return (
    <H.HomeWrapper>
      <H.Feed>
        <H.Header className="flex items-center justify-center">
          <C.IconInputWrapper className="header-search">
            <C.CommonInput placeholder="Search" />
            <TbSearch color="#B3B3B3" className="input-icon" />
          </C.IconInputWrapper>
        </H.Header>
        <H.FeedWrapper>
          {Array(10)
            .fill("")
            .map(() => (
              <Post />
            ))}
        </H.FeedWrapper>
      </H.Feed>
      <H.SuggesstionWrapper></H.SuggesstionWrapper>
    </H.HomeWrapper>
  );
};

export default Home;
