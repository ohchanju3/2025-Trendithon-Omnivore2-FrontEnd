import { postNoResponse } from "@apis/instance";

export const postLikeCake = async (cakeId: string) => {
	const response = await postNoResponse(`/api/hearts/cakes/${cakeId}`, {});
	console.log("postLikeCupcake api 요청 결과 : ", response);
};
