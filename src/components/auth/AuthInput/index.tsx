import * as S from "./style";
import { useState } from "react";
import { AuthInputProps } from "@/types/Auth";
import { EyeCloseIcon, EyeIcon } from "@/asset/svg";

const AuthInput = ({
  register,
  labelName,
  isValue,
  type,
  placeholder,
  maxLength,
  onSubmit,
  readOnly,
}: AuthInputProps) => {
  const [seePassword, setSeePassword] = useState(false);

  const handelIcon = () => setSeePassword((pre) => !pre);

  return (
    <S.AuthInput onSubmit={onSubmit}>
      <label>
        <p>{labelName}</p>
        <input
          readOnly={readOnly}
          placeholder={placeholder}
          {...register}
          type={seePassword ? "text" : type}
          maxLength={maxLength}
        />
        {isValue && type === "password" && (
          <>
            <div onClick={handelIcon}>
              {seePassword ? <EyeIcon /> : <EyeCloseIcon />}
            </div>
          </>
        )}
      </label>
    </S.AuthInput>
  );
};

export default AuthInput;
