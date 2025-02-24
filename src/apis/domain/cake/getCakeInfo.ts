import { getResponse } from "@apis/instance";

export interface CandleData {
  candleId: number;
  imgUrl: string;
  content: string;
}

export interface CakeData {
  cakeId: number;
  nickname: string;
  color: string;
  candles: CandleData[];
  likeCount: number;
  like: boolean;
}

export const getCakeInfo = async (cakeId: number): Promise<CakeData | null> => {
  const response = await getResponse<{
    statusCode: 0;
    message: "string";
    data: CakeData;
  }>(`/api/cakes/cake/${cakeId}`);

  if (response && response.data) {
    return response.data;
  }
  return null;
};
