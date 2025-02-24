import { patchResponse } from "@apis/instance";

export const updateMyInfo = async (
	nickName: string,
): Promise<{
	picture: string;
	email: string;
	nickName: string;
	followerCount: number;
} | null> => {
	const response = await patchResponse<
		{ nickname: string },
		{
			statusCode: number;
			message: string;
			data: {
				picture: string;
				email: string;
				nickName: string;
				followerCount: number;
			};
		}
	>("/api/members/my-page", { nickname: nickName });

	if (response) {
		return response.data;
	}
	return null;
};
