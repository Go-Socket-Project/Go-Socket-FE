import { apiClient } from "@/utils/libs/apiClient";
import { ChatController } from "@/utils/libs/requestUrls";

export const getDMList = async () => {
  try {
    const { data } = await apiClient.get(ChatController.getDM);
    console.log(data);
    return data;
  } catch (e: any) {
    console.log(e);

    return false;
  }
};
export const createDMRoom = async (email: string) => {
  try {
    await apiClient.post(ChatController.createDM, {
      email: email,
    });

    return true;
  } catch (e: any) {
    console.log(e);

    return false;
  }
};
