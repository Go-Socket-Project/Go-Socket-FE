import { apiClient } from "@/utils/apiClient";
import { UserController } from "@/utils/requestUrls";

export const signin = async (email: string, password: string) => {
  try {
    await apiClient.post(UserController.signin, {
      email: email,
      password: password,
    });

    return alert("로그인이 되었습니다.");
  } catch (e: any) {
    if (e.message === "Request failed with status code 401") {
      alert(e.response.data.message);
    }

    return false;
  }
};

export const signup = async (name: string, email: string, password: string) => {
  try {
    await apiClient.post(UserController.signup, {
      name: name,
      email: email,
      password: password,
    });
    alert("회원가입이 되었습니다");
    return true;
  } catch (e: any) {
    if (e.message === "Request failed with status code 403") {
      alert("이미 가입된 유저에요.");
    }
    return false;
  }
};
