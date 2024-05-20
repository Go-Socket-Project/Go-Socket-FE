"use client";

import CreateDMModal from "@/components/Home/atoms/CreateDMModal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <CreateDMModal />
    </>
  );
};
