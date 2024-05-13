"use client";

import * as S from "./style";
import { RocketIcon } from "@/asset/svg";
import NewChatBtn from "@/components/Home/atoms/NewChatBtn";
import AlarmList from "@/components/Home/atoms/AlarmList";
import ChatList from "@/components/Home/atoms/ChatList";
import Link from "next/link";

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <Link href="/">
        <S.LogoBox>
          <RocketIcon />
          <h1>Chat</h1>
        </S.LogoBox>
      </Link>
      <NewChatBtn />
      <AlarmList />
      <ChatList />
    </S.SidebarWrapper>
  );
};

export default Sidebar;
