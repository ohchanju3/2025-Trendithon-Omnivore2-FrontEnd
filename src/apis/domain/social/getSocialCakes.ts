import { getResponse } from "@apis/instance";

export type Candle = {
	candleId: number;
	imgUrl: string;
	content: string;
	candleIndex: number;
};

export type CakeData = {
	cakeId: number;
	nickname: string;
	color: string;
	candles: Candle[];
	likeCount: number;
	like: boolean;
};

export const getSocialCakes = async (
	page: number = 0,
	size: number = 10,
): Promise<CakeData[] | null> => {
	const response = await getResponse<{
		statusCode: number;
		message: string;
		data: CakeData[];
	}>(`/api/cakes/follow?page=${page}&size=${size}`);
	if (response && response.data) return response.data;
	return null;
};
