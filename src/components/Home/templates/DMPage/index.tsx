"use client";

import * as T from "../style";
import Sidebar from "@/components/Home/modules/Sidebar";
import Header from "@/components/Home/modules/Header";
import DMBoard from "../../modules/DMBoard";

const DMPage = () => {
  return (
    <T.HomeWrapper>
      <Sidebar />
      <T.ContentWrapper>
        <Header />
        <DMBoard />
      </T.ContentWrapper>
    </T.HomeWrapper>
  );
};

export default DMPage;
