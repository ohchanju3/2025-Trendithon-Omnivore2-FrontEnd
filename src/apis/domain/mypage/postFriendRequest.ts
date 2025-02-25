import { postResponse } from "@apis/instance";

export const postFriendRequest = async (
	email: string,
): Promise<number | null> => {
	const response = await postResponse<
		{
			email: string;
		},
		{
			statusCode: number;
			message: string;
			data: {
				toMemberId: number;
			};
		}
	>("/api/members/follows", { email: email });

	if (response) {
		return response.data.toMemberId;
	}
	return null;
};
