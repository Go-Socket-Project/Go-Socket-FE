"use client";

import * as S from "./style";
import { RocketIcon } from "@/asset/svg";
import NewChatBtn from "@/components/Home/NewChatBtn";
import AlarmList from "@/components/Home/AlarmList";
import ChatList from "@/components/Home/ChatList";

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <S.Header>
        <RocketIcon />
        <p>Chat</p>
      </S.Header>
      <NewChatBtn />
      <AlarmList />
      <ChatList />
    </S.SidebarWrapper>
  );
};

export default Sidebar;
