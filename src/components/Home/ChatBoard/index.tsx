"use client";

import * as S from "./style";
import ChatInput from "@/components/Home/ChatInput";

const ChatBoard = () => {
  const inbox = ["hi", "hello", "nice"];

  return (
    <S.ChatBoardWrapper>
      <S.Header>
        <span>Name</span>
      </S.Header>

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
    </S.ChatBoardWrapper>
  );
};

export default ChatBoard;
