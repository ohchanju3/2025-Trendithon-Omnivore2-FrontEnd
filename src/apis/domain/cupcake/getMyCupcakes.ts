import { getResponse } from "@apis/instance";
import { CupCakeDTO } from "./getCupCake";

export const getMyCupcakes = async (
	date: Date,
): Promise<CupCakeDTO[] | null> => {
	const formattedDate = `${date.getFullYear()}-${String(
		date.getMonth() + 1,
	).padStart(2, "0")}`;

	const response = await getResponse<{
		statusCode: 0;
		message: "string";
		data: CupCakeDTO[];
	}>(`/api/cupcakes/date?yearMonth=${formattedDate}`);

	if (response && response.data) {
		return response.data;
	}
	return null;
};
