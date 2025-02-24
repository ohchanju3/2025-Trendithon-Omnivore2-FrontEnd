import { postResponse } from "@apis/instance";

type requestType = {
	emotion: string;
	content: string;
	accessRange: string;
};

export const postCupCake = async (
	emotion: string,
	content: string,
	accessRange: string,
): Promise<{ cupcakeId: number } | null> => {
	console.log({ emotion: emotion, content: content, accessRange: accessRange });
	const response = await postResponse<requestType, { cupcakeId: number }>(
		"/api/cupcakes",
		{
			emotion: emotion,
			content: content,
			accessRange: accessRange,
		},
	);

	if (response) {
		return response;
	}
	return null;
};
