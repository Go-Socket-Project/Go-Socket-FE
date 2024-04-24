"use client";

import * as S from "./style";
import SearchBox from "@/components/Home/SearchBox";
import StateBox from "@/components/Home/StateBoard";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <SearchBox />
      <StateBox />
    </S.HeaderWrapper>
  );
};

export default Header;
