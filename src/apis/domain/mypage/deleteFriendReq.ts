import { deleteResponse } from "@apis/instance";

export const deleteFriendReq = async (followId: string): Promise<boolean> => {
	try {
		const response = await deleteResponse(
			`/api/members/follows/reject/${followId}`,
		);
		return response;
	} catch (error) {
		console.error("친구 요청 거절 실패: ", error);
		return false;
	}
};
