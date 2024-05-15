import { removeToken } from "@/utils/libs/removeToken";

export const logout = () => {
  removeToken();
  alert("로그아웃되었습니다.");
};
