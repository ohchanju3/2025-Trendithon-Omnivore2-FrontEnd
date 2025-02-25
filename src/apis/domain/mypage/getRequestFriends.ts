import { getResponse } from "@apis/instance";

export type FollowerWithId = {
	memberId: number;
	followId: number;
	nickname: string;
	name: string;
	profileImage: string;
};

export const getRequestFriends = async (
	page: number = 0,
	size: number = 10,
): Promise<FollowerWithId[] | null> => {
	const response = await getResponse<{
		statusCode: number;
		message: string;
		data: {
			followInfoResDto: FollowerWithId[];
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
