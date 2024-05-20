import { AuthButtonProps } from "@/types/Auth";
import * as S from "./style";

const AuthButton = ({ text, type, onClick }: AuthButtonProps) => {
  return (
    <S.AuthButton type={type} onClick={onClick}>
      {text}
    </S.AuthButton>
  );
};

export default AuthButton;
