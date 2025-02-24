import { patchNoResponse } from "@apis/instance";

export const updateAccess = async (range: string) => {
	const response = await patchNoResponse<{ range: string }>(
		"/api/cupcakes/update-access",
		{ range: range },
	);
	if (response) {
		console.log(`변경 완료! ${range}`);
	}
};
