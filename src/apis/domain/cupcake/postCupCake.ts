import { postResponse } from "@apis/instance";

type RequestType = {
	emotion: string;
	content: string;
	accessRange: string;
};

type ResponseType = {
	statusCode: number;
	message: string;
	data: {
		cupCakeId: number;
	};
};

export const postCupCake = async (
	emotion: string,
	content: string,
	accessRange: string,
): Promise<number | null> => {
	console.log({ emotion, content, accessRange });

	const response = await postResponse<RequestType, ResponseType>(
		"/api/cupcakes",
		{
			emotion: emotion,
			content: content,
			accessRange: accessRange,
		},
	);

	return response?.data.cupCakeId ?? null;
};
