"use client";

import * as S from "./style";
import SearchBox from "@/components/Home/atoms/SearchBox";
import StateBox from "@/components/Home/atoms/StateBoard";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <SearchBox />
      <StateBox />
    </S.HeaderWrapper>
  );
};

export default Header;
