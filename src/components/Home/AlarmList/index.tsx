"use client";

import * as S from "./style";
import { HomeIcon, MentionIcon } from "@/asset/svg";

const AlarmList = () => {
  return (
    <S.AlarmListWrapper>
      <S.AlarmItem>
        <HomeIcon />
        <p>홈</p>
      </S.AlarmItem>
      <S.AlarmItem>
        <MentionIcon />
        <p>멘션</p>
      </S.AlarmItem>
    </S.AlarmListWrapper>
  );
};

export default AlarmList;
