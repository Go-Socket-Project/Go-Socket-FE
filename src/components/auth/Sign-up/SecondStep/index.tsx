"use client";

import * as S from "../../AuthFormStyle/style";
import Image from "next/image";
import AuthInput from "../../AuthInput";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { RegexsData } from "@/asset/RegexsData";
import { SignupForm } from "@/types/Auth";
import { isNotNull } from "@/utils/isNotNull";
import AuthButton from "../../AuthButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import { signUpObject, signUpStep } from "@/recoilAtoms";
import { signup } from "@/api/member";
import { useRouter } from "next/navigation";

const SecondStep = () => {
  const { register, watch, handleSubmit } = useForm<SignupForm>();
  const setSignUpStep = useSetRecoilState(signUpStep);
  const [SignUpObject] = useRecoilState(signUpObject);
  const router = useRouter();

  const onInvalid: SubmitErrorHandler<SignupForm> = (state) =>
    alert(state.password?.message || state.passwordCheck?.message);

  const onValid: SubmitHandler<SignupForm> = async (state) => {
    if (!SignUpObject.name || !SignUpObject.email || !state.password) return;
    if (state.password !== state.passwordCheck)
      return alert("비밀번호확인이 비밀번호와 맞지 않습니다.");
    const notError = await signup(
      SignUpObject.name,
      SignUpObject.email,
      state.password
    );
    if (notError) {
      setSignUpStep("first");
      router.push("/sign-in");
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
              <h1>안전한 비밀번호 만들기</h1>
              <div>
                문자, 숫자, 특수문자를 조합하여 안전한 비밀번호를 만드세요.
              </div>
            </S.TitleWrapper>
          </S.IntroWrapper>
          <S.TextFieldWrapper>
            <AuthInput
              register={register("password", {
                required: "비밀번호를 입력해주세요.",
                pattern: {
                  value: RegexsData.PASSWORD,
                  message: "영문, 숫자, 특수문자 포함 8~20자로 입력하세요.",
                },
              })}
              labelName="패스워드"
              type="password"
              isValue={isNotNull(watch("password"))}
            />
            <AuthInput
              register={register("passwordCheck", {
                required: "비밀번호 확인을 입력해주세요.",
              })}
              labelName="확인"
              type="password"
              isValue={isNotNull(watch("passwordCheck"))}
            />
          </S.TextFieldWrapper>
          <S.FooterButtonWrapper>
            <div></div>
            <AuthButton
              text="계정 만들기"
              type={"submit"}
              onClick={handleSubmit(onValid, onInvalid)}
            />
          </S.FooterButtonWrapper>
        </div>
      </S.FormWrapper>
    </S.AuthWrapper>
  );
};

export default SecondStep;
