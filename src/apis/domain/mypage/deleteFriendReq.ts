import { deleteResponse } from "@apis/instance";

export const deleteFriendReq = async (followId: string): Promise<boolean> => {
	const response = deleteResponse(`/api/members/follows/reject/${followId}`);
	return response;
};
