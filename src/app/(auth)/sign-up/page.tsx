"use client";

import FirstStep from "@/components/auth/Sign-up/FirstStep";
import SecondStep from "@/components/auth/Sign-up/SecondStep";
import { useRecoilState } from "recoil";
import { signUpStep } from "@/recoilAtoms";

export default function Page() {
  const [SignupStep] = useRecoilState(signUpStep);
  return <>{SignupStep === "1" ? <FirstStep /> : <SecondStep />}</>;
}
