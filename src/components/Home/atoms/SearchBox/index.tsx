"use client";

import { SearchIcon } from "@/asset/svg";
import * as S from "./style";

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
