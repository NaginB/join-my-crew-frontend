import React, { useState } from "react";
import * as S from "./styles";
import { HomeIcon } from "../../Assets/Icons/Home";
import { SidebarItems } from "./interface";
import { ExploreIcon } from "../../Assets/Icons/Explore";
import { MessagesIcon } from "../../Assets/Icons/Messages";
import { ApetureIcon } from "../../Assets/Icons/Apeture";
import AppLogo from "../../Assets/Images/logo.svg";
import UserImage from "../../Assets/Images/user-profile-img.png";

const Sidebar: React.FC = () => {
  const [items] = useState<SidebarItems[]>([
    {
      id: 1,
      icon: HomeIcon,
      title: "Home",
      link: '/home'
    },
    {
      id: 2,
      icon: ExploreIcon,
      title: "Explore",
      link: '/explore'
    },
    {
      id: 3,
      icon: MessagesIcon,
      title: "Messages",
      link: '/messages'
    },
    {
      id: 4,
      icon: ApetureIcon,
      title: "Gallery",
      link: '/gallery'
    },
  ]);

  return (
    <S.SidebardWrapper>
      <S.Logo src={AppLogo} />
      <S.ProfileImage src={UserImage} />

      <hr />

      <S.SidebarItems>
        {items.map((item) => (
          <S.SidebarItem to={item.link} key={item.id}>
            <item.icon />
            <span className="item-title">{item.title}</span>
          </S.SidebarItem>
        ))}
      </S.SidebarItems>
    </S.SidebardWrapper>
  );
};

export default Sidebar;
