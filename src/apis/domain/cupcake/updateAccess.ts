import { patchNoResponse } from "@apis/instance";

export const updateAccess = (range: string) => {
	const response = patchNoResponse<{ range: string }>(
		"/api/cupcakes/update-access",
		{ range: range },
	);
	if (response) {
		console.log(`변경 완료! ${range}`);
		return response;
	}
	return null;
};
