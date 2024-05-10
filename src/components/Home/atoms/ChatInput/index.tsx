"use client";

import * as S from "./style";
import { SendIcon } from "@/asset/svg";

const ChatInput = () => {
  return (
    <S.ChatInputWrapper>
      <label>
        <input placeholder="메세지 보내기" type="text" />
        <SendIcon />
      </label>
    </S.ChatInputWrapper>
  );
};

export default ChatInput;
