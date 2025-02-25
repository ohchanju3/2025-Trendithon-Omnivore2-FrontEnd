import { getResponse } from "@apis/instance";

export type SocialCupcake = {
	cupcakeId: number;
	nickname: string;
	date: string;
	accessRange: string;
	emotion: string;
	content: string;
	likeCount: number;
	like: boolean;
};

export const getSocialCupcakes = async (
	page: number = 0,
	size: number = 10,
): Promise<SocialCupcake[] | null> => {
	const response = await getResponse<{
		statusCode: number;
		message: string;
		data: SocialCupcake[];
	}>(`/api/cupcakes/follow?page=${page}&size=${size}`);

	if (response && response.data) {
		console.log("API 응답 데이터:", response.data);
		return response.data;
	}

	console.warn("API 응답이 없거나 비어있습니다.", response);
	return null;
};
