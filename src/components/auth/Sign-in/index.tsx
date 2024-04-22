"use client";

import * as S from "../AuthFormStyle/style";
import Image from "next/image";
import Link from "next/link";
import AuthInput from "../AuthInput";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { RegexsData } from "@/asset/RegexsData";
import { SigninForm } from "@/types";
import { isNotNull } from "@/utils/isNotNull";
import AuthButton from "../AuthButton";
import { signin } from "@/api/member";
import { useRouter } from "next/navigation";

const Signin = () => {
  const { register, watch, handleSubmit } = useForm<SigninForm>();
  const router = useRouter();

  const onInvalid: SubmitErrorHandler<SigninForm> = (state) => {
    if (state.email?.message) return alert(state.email?.message);
    else if (state.password?.message) return alert(state.password.message);
  };

  const onValid: SubmitHandler<SigninForm> = async (state) => {
    if (!state.email || !state.password) return;
    if (await signin(state.email, state.password)) {
      router.push("/");
    }
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
              <h1>로그인</h1>
              <div>본인의 아이디와 패스워드를 입력하세요.</div>
            </S.TitleWrapper>
          </S.IntroWrapper>
          <S.TextFieldWrapper>
            <AuthInput
              register={register("email", {
                required: "아이디를 입력해주세요.",
                pattern: {
                  value: RegexsData.EMAIL,
                  message: "이메일형식에 맞게 입력해주세요.",
                },
              })}
              labelName="아이디"
              type="text"
            />
            <AuthInput
              register={register("password", {
                required: "비밀번호 입력해주세요.",
                pattern: {
                  value: RegexsData.PASSWORD,
                  message: "영문, 숫자, 특수문자 포함 8~20자로 입력하세요.",
                },
              })}
              labelName="패스워드"
              type="password"
              isValue={isNotNull(watch("password"))}
            />
          </S.TextFieldWrapper>
          <S.FooterButtonWrapper>
            <Link href={"/sign-up"}>회원가입으로 이동하기 &gt;</Link>
            <AuthButton
              text="로그인"
              type={"submit"}
              onClick={handleSubmit(onValid, onInvalid)}
            />
          </S.FooterButtonWrapper>
        </div>
      </S.FormWrapper>
    </S.AuthWrapper>
  );
};

export default Signin;
