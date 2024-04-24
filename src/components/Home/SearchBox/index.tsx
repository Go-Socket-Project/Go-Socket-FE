"use client";

import * as S from "./style";
import { SearchIcon } from "@/asset/svg";

const SearchBox = () => {
  return (
    <S.SearchBoxWrapper>
      <S.SearchBox>
        <label>
          <input placeholder="Search" type="text" />
          <SearchIcon />
        </label>
      </S.SearchBox>
    </S.SearchBoxWrapper>
  );
};

export default SearchBox;
