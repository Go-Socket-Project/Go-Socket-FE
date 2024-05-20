"use client";

import * as S from "../../AuthFormStyle/style";
import Image from "next/image";
import Link from "next/link";
import AuthInput from "../../AuthInput";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { RegexsData } from "@/asset/RegexsData";
import { SignupForm } from "@/types/Auth";
import AuthButton from "../../AuthButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import { signUpObject, signUpStep } from "@/recoilAtoms";

const FirstStep = () => {
  const { register, handleSubmit } = useForm<SignupForm>();
  const setSignUpStep = useSetRecoilState(signUpStep);
  const [SignUpObject, setSignUpObject] = useRecoilState(signUpObject);

  const onInvalid: SubmitErrorHandler<SignupForm> = (state) =>
    alert(state.name?.message || state.email?.message);

  const onValid: SubmitHandler<SignupForm> = async (state) => {
    setSignUpObject({
      ...SignUpObject,
      name: state.name,
      email: state.email,
    });
    setSignUpStep("second");
  };

  return (
    <S.AuthWrapper>
      <S.FormWrapper>
        <div>
          <S.IntroWrapper>
            <S.Logo>
              <Image src={"/rocket.png"} width={80} height={80} alt="Logo" />
            </S.Logo>
            <S.TitleWrapper>
              <h1>Go-Socket 계정만들기</h1>
              <div>이름을 입력하세요.</div>
            </S.TitleWrapper>
          </S.IntroWrapper>
          <S.TextFieldWrapper>
            <AuthInput
              register={register("name", {
                required: "이름을 입력해주세요.",
              })}
              labelName="성명"
              type="text"
            />
            <AuthInput
              register={register("email", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value: RegexsData.EMAIL,
                  message: "이메일형식에 맞게 입력해주세요.",
                },
              })}
              labelName="아이디"
              type="text"
            />
          </S.TextFieldWrapper>
          <S.FooterButtonWrapper>
            <Link href={"/sign-in"}>로그인으로 이동하기 &gt;</Link>
            <AuthButton
              text="다음"
              type={"submit"}
              onClick={handleSubmit(onValid, onInvalid)}
            />
          </S.FooterButtonWrapper>
        </div>
      </S.FormWrapper>
    </S.AuthWrapper>
  );
};

export default FirstStep;
