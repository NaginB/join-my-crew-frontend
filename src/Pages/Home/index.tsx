import React, { useEffect } from "react";
import * as H from "./style";
import * as C from "../../common-styles";
import { TbSearch } from "react-icons/tb";
import Post from "../../Components/Post/Post";
import Suggesstion from "../../Components/Suggesstion";
import logoDark from '../../Assets/Images/FanxoDark.svg'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { feedHandler } from "../../Redux/slices/postSlice";

const Home: React.FC = () => {

  const dispatch: AppDispatch = useDispatch();

  const { feed, loading } = useSelector((state: RootState) => state.posts);
 
  useEffect(() => {
    dispatch(feedHandler({ limit: 10, page: 1 }))
  }, []);

  return (
    <H.HomeWrapper>
      <H.Feed>
        <H.Header className="flex items-center justify-center">
          <C.IconInputWrapper className="header-search">
            <C.CommonInput placeholder="Search" />
            <TbSearch color="#B3B3B3" className="input-icon" />
          </C.IconInputWrapper>
          <H.Logo className="logo-img" src={logoDark} />
        </H.Header>
        <H.FeedWrapper>
          {
            loading ? <p className="text-white text-center mt-5">fetching posts...</p> :
              feed?.results.map((post, index) => (
                <Post key={`post-key-${index}`} post={post}/>
              ))
          }
        </H.FeedWrapper>
      </H.Feed>
      {/* <H.SuggestionWrapper>
        <H.Header className="flex items-center justify-center">
          <p className="text-xl text-white">Suggestions For You</p>
        </H.Header>
        <H.SuggestedContentWrapper>
          {Array(1)
            .fill("")
            .map((_, index) => (
              <Suggesstion key={`suggestion-key-${index}`} />
            ))}
        </H.SuggestedContentWrapper>
      </H.SuggestionWrapper> */}
    </H.HomeWrapper>
  );
};

export default Home;
