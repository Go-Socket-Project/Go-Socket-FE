import { apiClient } from "@/utils/apiClient";
import { UserController } from "@/utils/requestUrls";

export const signin = async (email: string, password: string) => {
  try {
    const { data } = await apiClient.post(UserController.signin, {
      custom_id: email,
      password: password,
    });

    return alert("로그인이 되었습니다.");
  } catch (e: any) {
    console.log(e);

    return false;
  }
};

export const signup = async (
  name: string,
  email: string,
  password: string,
  password_confirm: string
) => {
  try {
    await apiClient.post(UserController.signup, {
      name: name,
      custom_id: email,
      password: password,
      password_confirm: password_confirm,
    });
    return alert("회원가입이 되었습니다");
  } catch (e: any) {
    if (e.message === "Request failed with status code 403") {
      alert("이미 가입된 유저에요.");
    }
    return false;
  }
};
