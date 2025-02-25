import { getResponse } from "@apis/instance";

export type Candle = {
	candleId: number;
	imgUrl: string;
	content: string;
	candleIndex: number;
};

export type CakeData = {
	cakeId: number;
	color: string;
	candles: Candle[];
	likeCount: number;
};

export const getSocialCake = async (
	memberId: string,
): Promise<CakeData | null> => {
	const response = await getResponse<{
		statusCode: number;
		message: string;
		data: CakeData;
	}>(`/api/cakes/member/${memberId}`);

	if (response && response.data) {
		console.log("API 응답 데이터:", response.data);
		return response.data;
	} else {
		console.warn("API 응답이 없습니다.");
		return null;
	}
};
