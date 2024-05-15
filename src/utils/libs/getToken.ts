import { parseCookies } from "nookies";

export const getToken = async () => {
  const { Authorization, RefreshToken } = parseCookies();
  return { Authorization, RefreshToken };
};
