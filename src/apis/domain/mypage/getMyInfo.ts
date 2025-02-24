import { getResponse } from "@apis/instance";

export const getMyInfo = async (): Promise<{
	picture: string;
	email: string;
	nickName: string;
	followerCount: number;
} | null> => {
	const response = await getResponse<{
		statusCode: number;
		message: string;
		data: {
			picture: string;
			email: string;
			nickName: string;
			followerCount: number;
		};
	}>("/api/members/my-page");

	if (response) return response.data;
	return null;
};
