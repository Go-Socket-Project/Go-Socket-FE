import axios from "axios";
import { onRequest } from "./onRequest";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

apiClient.interceptors.request.use(onRequest);
