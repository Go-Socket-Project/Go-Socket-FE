"use client";

import * as S from "./style";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ChatInput from "@/components/Home/atoms/ChatInput";

const DMBoard = () => {
  const path = usePathname();
  const id = path.split("/").pop();

  const [socket, setSocket] = useState<any>(undefined);
  const [inbox, setInbox] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  const handelSendMeassage = () => {
    socket.send(JSON.stringify({ message: message }));
    setMessage("");
  };

  useEffect(() => {
    const socket = new WebSocket(
      `${process.env.NEXT_PUBLIC_BASE_URL}/ws/chat/${id}/`
    );

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setInbox((inbox: string[]) => [...inbox, data.message]);
      console.log(data);
    };

    socket.onopen = () => {
      socket.send(JSON.stringify({ message: "Hello, server!" }));
    };

    socket.onerror = (error) => {
      console.error("WebSocket error observed:", error);
    };

    socket.onclose = (event) => {
      console.log("WebSocket is closed now.", event);
    };

    setSocket(socket);
  }, []);

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

      <ChatInput
        handelSendMeassage={handelSendMeassage}
        message={message}
        setMessage={setMessage}
      />
    </S.DMBoardWrapper>
  );
};

export default DMBoard;
