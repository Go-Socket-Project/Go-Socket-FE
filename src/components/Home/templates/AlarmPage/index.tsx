"use client";

import * as T from "../style";
import Header from "../../modules/Header";
import Sidebar from "../../modules/Sidebar";
import AlarmBoard from "../../modules/AlarmBoard";

const AlarmPage = () => {
  return (
    <>
      <T.HomeWrapper>
        <Sidebar />
        <T.ContentWrapper>
          <Header />
          <AlarmBoard />
        </T.ContentWrapper>
      </T.HomeWrapper>
    </>
  );
};

export default AlarmPage;
