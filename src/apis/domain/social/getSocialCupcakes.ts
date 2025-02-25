import { getResponse } from "@apis/instance";

export const getSocialCupcakes = async (
	page: number = 0,
	size: number = 10,
): Promise<string[] | null> => {
	const response = await getResponse<{
		statusCode: number;
		message: string;
		data: string[];
	}>(`/api/cupcakes/follow?page=${page}&size=${size}`);
	if (response && response.data) return response.data;
	return null;
};
