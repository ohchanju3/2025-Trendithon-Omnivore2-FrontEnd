import { postNoResponse } from "@apis/instance";

export const patchCakeCandles = async (
  formData: FormData
): Promise<boolean> => {
  try {
    const result = await postNoResponse("/api/cakes/candles/update", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return result;
  } catch (error) {
    console.error("Error posting cake candles:", error);
    return false;
  }
};
