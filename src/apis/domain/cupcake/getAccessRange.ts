import { getResponse } from "@apis/instance";

export const getAccessRange = async (): Promise<{ access: string } | null> => {
	const response = await getResponse<{
		statusCode: number;
		message: string;
		data: {
			access: string;
		};
	}>("/api/cupcakes/my-access");

	if (response) {
		return response.data;
	}
	return null;
};
