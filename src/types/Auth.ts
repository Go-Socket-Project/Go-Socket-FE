import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface AuthInputProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register: UseFormRegisterReturn;
  labelName?: string;
  isValue?: boolean;
}

export interface SigninForm {
  email?: string;
  password?: string;
}

export interface SignupForm {
  name?: string;
  email?: string;
  password?: string;
  passwordCheck?: string;
}

export interface AuthButtonProps {
  text: string;
  type: "button" | "submit";
  onClick: () => void;
}
