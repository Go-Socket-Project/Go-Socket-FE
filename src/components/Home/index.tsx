"use client";

import * as S from "./style";
import Header from "@/components/Home/Header";
import Sidebar from "@/components/Home/Sidebar";
import ChatBoard from "@/components/Home/ChatBoard";

const Home = () => {
  return (
    <S.HomeWrapper>
      <Sidebar />
      <S.ContentWrapper>
        <Header />
        <ChatBoard />
      </S.ContentWrapper>
    </S.HomeWrapper>
  );
};

export default Home;
