import { apiClient } from "@/utils/apiClient";
import { UserController } from "@/utils/requestUrls";

export const signup = async (name: string, email: string, password: string) => {
  try {
    await apiClient.post(UserController.signup, {
      username: name,
      id: email,
      password: password,
    });
    return alert("회원가입이 되었습니다");
  } catch (e: any) {
    if (e.message === "error code") {
      alert("이미 가입된 유저에요.");
    }
    return false;
  }
};
