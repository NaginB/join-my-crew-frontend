import React, { useState } from "react";
import * as S from "./styles";
import { HomeIcon } from "../../Icons/Home";
import { SidebarItems } from "./interface";
import { ExploreIcon } from "../../Icons/Explore";
import { MessagesIcon } from "../../Icons/Messages";
import { ApetureIcon } from "../../Icons/Apeture";

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
      <S.Logo src="/images/logo.svg" />
      <S.Image src="/images/user_profile_img.png" />

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
