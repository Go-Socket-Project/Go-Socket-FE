"use client";

import * as S from "./style";
import { useRouter } from "next/navigation";
import { getDMList } from "@/api/chat";
import { useEffect, useState } from "react";

const DMList = () => {
  const router = useRouter();
  const [DMList, setDMList] = useState<any>([
    {
      id: 1,
      participants: [
        {
          id: 1,
          name: "이름1",
        },
        {
          id: 2,
          name: "나",
        },
      ],
    },
    {
      id: 2,
      participants: [
        {
          id: 3,
          name: "이름2",
        },
        {
          id: 2,
          name: "나",
        },
      ],
    },
  ]);

  // const get = async () => {
  //   await getDMList();
  // };

  // useEffect(() => {
  //   setDMList(get());
  // }, []);

  return (
    <S.ChatListWrapper>
      {[...DMList].map((e, i) => (
        <S.ChatItem key={i} onClick={() => router.push(`/dm/${e.id}`)}>
          <p>{e.participants[0].name}</p>
        </S.ChatItem>
      ))}
    </S.ChatListWrapper>
  );
};

export default DMList;
