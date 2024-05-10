"use client";

import * as S from "./style";

import ChatInput from "@/components/Home/atoms/ChatInput";

const DMBoard = () => {
  const inbox = ["hi", "hello", "nice"];

  return (
    <S.DMBoardWrapper>
      <S.HeaderWrapper>
        <span>Name</span>
      </S.HeaderWrapper>

      <S.ChatBoard>
        <div>
          {inbox.map((message: string, index: number) => (
            <S.ChatItemWrapper>
              <S.ChatUserProfile />
              <S.ChatUserName>Name</S.ChatUserName>
              <S.ChatText key={index}>
                <span>{message}</span>
              </S.ChatText>
            </S.ChatItemWrapper>
          ))}
        </div>
      </S.ChatBoard>

      <ChatInput />
    </S.DMBoardWrapper>
  );
};

export default DMBoard;
