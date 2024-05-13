import { SignupForm } from "@/types/Auth";
import { atom } from "recoil";

export const signUpStep = atom<string>({
  key: "signUpStep",
  default: "1",
});

export const signUpObject = atom<SignupForm>({
  key: "signUpObject",
  default: {},
});
