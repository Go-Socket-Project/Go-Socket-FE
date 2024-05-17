"use client";

import * as S from "./style";
import { RocketIcon } from "@/asset/svg";
import NewChatBtn from "@/components/Home/atoms/NewChatBtn";
import AlarmList from "@/components/Home/atoms/AlarmList";
import DMList from "@/components/Home/atoms/DMList";
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
      <DMList />
    </S.SidebarWrapper>
  );
};

export default Sidebar;
