import { getResponse } from "@apis/instance";
import { Follower } from "./getMyFollowers";

export const getRequestFriends = async (
	page: number = 1,
	size: number = 10,
): Promise<Follower[] | null> => {
	const response = await getResponse<{
		statusCode: number;
		message: string;
		data: {
			followInfoResDto: Follower[];
			pageInfoResDto: {
				currentPage: number;
				totalPages: number;
				totalItems: number;
			};
		};
	}>(`/api/members/follows/requests?page=${page}&size=${size}`);

	if (response) {
		return response.data.followInfoResDto;
	}
	return null;
};
