import React, { useState } from "react";
import * as S from "./styles";
import { TiHome } from "react-icons/ti";
import { SidebarItems } from "./interface";
import { IoSearch } from "react-icons/io5";
import { PiChatTeardropTextFill } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import AppLogo from "../../Assets/Images/logo.svg";
import UserImage from "../../Assets/Images/user-profile-img.png";

const Sidebar: React.FC = () => {
  const [items] = useState<SidebarItems[]>([
    {
      id: 1,
      icon: <TiHome size={30} />,
      title: "Home",
      link: '/home'
    },
    {
      id: 2,
      icon: <IoSearch size={30} />,
      title: "Explore",
      link: '/explore'
    },
    {
      id: 3,
      icon: <PiChatTeardropTextFill size={30} />,
      title: "Messages",
      link: '/messages'
    },
    {
      id: 4,
      icon: <FaRegCircleUser size={30} />,
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
            {item.icon}
            <span className="item-title">{item.title}</span>
          </S.SidebarItem>
        ))}
      </S.SidebarItems>
    </S.SidebardWrapper>
  );
};

export default Sidebar;
