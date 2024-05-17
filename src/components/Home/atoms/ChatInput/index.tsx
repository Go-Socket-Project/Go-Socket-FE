"use client";

import * as S from "./style";
import { SendIcon } from "@/asset/svg";

interface InputProps {
  handelSendMeassage: () => void;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const ChatInput = ({ handelSendMeassage, message, setMessage }: InputProps) => {
  return (
    <S.ChatInputWrapper>
      <label>
        <input
          placeholder="메세지 보내기"
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && message !== "") {
              handelSendMeassage();
            }
          }}
        />
        <SendIcon onClick={handelSendMeassage} />
      </label>
    </S.ChatInputWrapper>
  );
};

export default ChatInput;
