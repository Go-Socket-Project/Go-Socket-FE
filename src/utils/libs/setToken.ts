import { setCookie } from "nookies";

export const setToken = (Authorization: string, RefreshToken: string): void => {
  setCookie(null, "Authorization", `Bearer ${Authorization}`, {
    maxAge: 86400,
    path: "/",
  }); // 1일
  setCookie(null, "Refresh", `Bearer ${RefreshToken}`, {
    maxAge: 604800,
    path: "/",
  }); // 7일
};
