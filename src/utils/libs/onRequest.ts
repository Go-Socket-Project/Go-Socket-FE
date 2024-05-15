import { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { getToken } from "./getToken";

export const onRequest = async (
  config: AxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  const { Authorization, RefreshToken } = await getToken();

  if (config.headers && Authorization) {
    config.headers["Authorization"] = Authorization;
  }

  return config as InternalAxiosRequestConfig;
};
