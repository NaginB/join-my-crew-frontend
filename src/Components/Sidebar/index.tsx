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
    },
    {
      id: 2,
      icon: ExploreIcon,
      title: "Explore",
    },
    {
      id: 3,
      icon: MessagesIcon,
      title: "Messages",
    },
    {
      id: 4,
      icon: ApetureIcon,
      title: "Gallery",
    },
  ]);

  return (
    <S.SidebardWrapper>
      <S.Logo src={AppLogo} />
      <S.Image src={UserImage} />

      <hr />

      <S.SidebarItems>
        {items.map((item) => (
          <S.SidebarItem key={item.id}>
            <item.icon />
            <span className="item-title">{item.title}</span>
          </S.SidebarItem>
        ))}
      </S.SidebarItems>
    </S.SidebardWrapper>
  );
};

export default Sidebar;
