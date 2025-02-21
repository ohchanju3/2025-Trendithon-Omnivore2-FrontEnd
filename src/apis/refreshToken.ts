import { instance } from "./instance";
interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const refreshAccessToken = async (
  refreshToken: string
): Promise<RefreshTokenResponse | null> => {
  try {
    const response = await instance.post<RefreshTokenResponse>(
      "/api/token/access",
      {
        refreshToken,
      }
    );

    if (response) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      return response.data;
    }
    return null;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return null;
  }
};
