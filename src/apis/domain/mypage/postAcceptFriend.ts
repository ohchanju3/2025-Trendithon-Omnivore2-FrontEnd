import { postNoResponse } from "@apis/instance";

export const postAcceptFriend = async (followId: string): Promise<boolean> => {
	const response = await postNoResponse(
		`/api/members/follows/accept/${followId}`,
		{},
	);

	return response;
};
