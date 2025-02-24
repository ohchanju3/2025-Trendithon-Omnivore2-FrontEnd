import { postResponse } from "@apis/instance";
import { colorMapping } from "@constants/cakeColorConstants";

export const postCake = async (cakeName: string): Promise<number | null> => {
  const color = colorMapping[cakeName] || "CREAM";

  const response = await postResponse<
    { color: string },
    { statusCode: number; message: string; data: { cakeId: number } }
  >("/api/cakes", { color });

  if (response && response.data && response.data.cakeId) {
    localStorage.setItem("cakeId", response.data.cakeId.toString());
    return response.data.cakeId;
  }

  return null;
};
