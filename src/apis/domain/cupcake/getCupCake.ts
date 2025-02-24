import { getResponse } from "@apis/instance";

export type CupCakeDTO = {
	cupCakeId: number;
	emotion: string;
	content: string;
	nickname: string;
	date: string;
	accessRange: string;
	likeCount: number;
	like: boolean;
};

export const getCupCake = async (id: string): Promise<CupCakeDTO | null> => {
	const responce = await getResponse<CupCakeDTO>(`/api/cupcakes/${id}`);

	if (responce) {
		return responce;
	}
	return null;
};
