import { getResponse } from "@apis/instance";

export type Follower = {
	memberId: number;
	nickname: string;
	name: string;
	profileImage: string;
};

export const getMyFollowers = async (
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
	}>(`/api/members/follows?page=${page}&size=${size}`);

	if (response) {
		return response.data.followInfoResDto;
	}
	return null;
};
