"use client";

import * as S from "./style";
import { PulsIcon } from "@/asset/svg";

const NewChatBtn = () => {
  return (
    <S.NewChatButton>
      <PulsIcon />
      <p>새 채팅</p>
    </S.NewChatButton>
  );
};

export default NewChatBtn;
