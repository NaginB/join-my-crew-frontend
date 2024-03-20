import React, { useEffect, useState } from "react";
import * as H from "./style";
import * as C from "../../common-styles";
import { TbSearch } from "react-icons/tb";
import Post from "../../Components/Post/Post";
import Suggesstion from "../../Components/Suggesstion";
import logoDark from "../../Assets/Images/FanxoDark.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { MdGroupAdd } from "react-icons/md";
import { feedHandler } from "../../Redux/slices/postSlice";
import backgroundImg from "../../Assets/Images/view-profile-cover.jpeg";
import profileImg from "../../Assets/Images/profileGirl2.jpeg";
import WhiteTick from "../../Assets/Icons/WhiteTick";
import { isCreatorRole } from "../../Config/common.config";
import * as D from "../../Components/UserDetails/style";
// import { AiOutlineMessage } from "react-icons/ai";
// import { HiOutlineCurrencyRupee } from "react-icons/hi2";
// import { LuFolderLock } from "react-icons/lu";
// import { CiImageOn } from "react-icons/ci";
import EditIcon from "../../Assets/Icons/EditIcon";
import { getUserDetails } from "../../Redux/slices/userSlice";
import CreatePostModal from "../../Modals/CreatePostModal";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const [createPostModal, setCreatePostModal] = useState(false);

  const { feed, loading } = useSelector((state: RootState) => state.posts);
  const { role } = useSelector((state: RootState) => state.user);
  const user = useSelector((state: RootState) => state.user);
  useEffect(() => {
    dispatch(feedHandler({ limit: 10, page: 1 }));
  }, []);

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  return (
    <H.HomeWrapper>
      <H.Feed>
        {!isCreatorRole(role) && (
          <H.Header className="flex items-center justify-center">
            <C.IconInputWrapper className="header-search">
              <C.CommonInput placeholder="Search" />
              <TbSearch color="#B3B3B3" className="input-icon" />
            </C.IconInputWrapper>
            <H.Logo className="logo-img" src={logoDark} />
          </H.Header>
        )}

        <H.FeedWrapper stretch={isCreatorRole(role)}>
          {isCreatorRole(role) && (
            <D.ImageBox className="mb-[8rem]">
              <D.ProfileBackgroundImage src={backgroundImg} />
              <D.ProfileContentBox>
                <div className="flex items-center justify-between">
                  <div className="flex items-end gap-5">
                    <D.ProfileImage src={profileImg} />
                    <div className="mb-1">
                      <div className="flex gap-4 items-center">
                        <h1 className="text-white font-inter text-3xl">
                          {user.fullname}
                        </h1>
                        <WhiteTick key={"white"} />
                      </div>
                      <p className="text-white opacity-[76%] font-inter font-light">
                        @{user.socialLinks?.username}
                      </p>
                    </div>
                  </div>
                  <div>
                    <H.CreatePostBtn
                      onClick={() => setCreatePostModal(true)}
                      className="text-white mt-16 rounded flex gap-3 items-center py-1 px-4"
                    >
                      <EditIcon />
                      <span className="font-inter">Create</span>
                    </H.CreatePostBtn>
                  </div>
                </div>
              </D.ProfileContentBox>

              {/* Create Post Modal */}
              <CreatePostModal
                onHide={() => setCreatePostModal(false)}
                show={createPostModal}
                key={"create-post-modal"}
              />
            </D.ImageBox>
          )}
          {loading ? (
            <p className="text-white text-center mt-5">fetching posts...</p>
          ) : (
            feed?.results.map((post, index) => (
              <Post key={`post-key-${index}`} post={post} />
            ))
          )}
        </H.FeedWrapper>
      </H.Feed>

      {!isCreatorRole(role) && (
        <H.SuggestionWrapper>
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
        </H.SuggestionWrapper>
      )}
    </H.HomeWrapper>
  );
};

export default Home;
