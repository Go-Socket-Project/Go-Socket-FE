"use client";

import * as S from "./style";
import { ArrowIcon } from "@/asset/svg";

const StateBox = () => {
  return (
    <S.StateBoxWrapper>
      <S.State />
      <ArrowIcon />
    </S.StateBoxWrapper>
  );
};

export default StateBox;
