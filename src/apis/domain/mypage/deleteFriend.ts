import { deleteResponse } from "@apis/instance";

export const deleteFriend = async (memberId: string): Promise<boolean> => {
	const response = await deleteResponse(`/api/follows/${memberId}`);
	return response;
};
