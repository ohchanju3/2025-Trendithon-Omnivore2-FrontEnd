import { getResponse } from "@apis/instance";

export type FollowerWithId = {
	followId: number;
	memberId: number;
	name: string;
	nickname: string;
	profileImage: string | null;
};

export const getRequestFriends = async (
	page: number = 0,
	size: number = 10,
): Promise<FollowerWithId[] | null> => {
	try {
		const response = await getResponse<{
			statusCode: number;
			message: string;
			data: {
				followRequestInfoResDto: FollowerWithId[];
				pageInfoResDto: {
					currentPage: number;
					totalPages: number;
					totalItems: number;
				};
			};
		}>(`/api/members/follows/requests?page=${page}&size=${size}`);

		if (response && response.data) {
			console.log("API 응답 데이터:", response);

			return response.data.followRequestInfoResDto.length > 0
				? response.data.followRequestInfoResDto
				: null;
		} else {
			console.warn("⚠️ API 응답이 null이거나 비어 있음:", response);
			return null;
		}
	} catch (error) {
		console.error("API 요청 중 오류 발생:", error);
		return null;
	}
};
