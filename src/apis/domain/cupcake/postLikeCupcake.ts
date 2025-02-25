import { postNoResponse } from "@apis/instance";

export const postLikeCupcake = async (cupCakeId: string) => {
	const response = await postNoResponse(
		`/api/hearts/cup-cakes/${cupCakeId}`,
		{},
	);
	console.log("postLikeCupcake api 요청 결과 : ", response);
};
