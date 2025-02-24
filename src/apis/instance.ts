import axios from "axios";
import { refreshAccessToken } from "./refreshToken";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false,
});

instance.interceptors.request.use(
  async (config) => {
    let accessToken = localStorage.getItem("accessToken");

    // 만약 엑세스 토큰이 없다면, 리프레시 토큰으로 엑세스 토큰을 갱신
    if (!accessToken) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        const newTokens = await refreshAccessToken(refreshToken);
        if (newTokens) {
          accessToken = newTokens.accessToken;
        }
      }
    }

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터를 추가하여 401 상태 코드에 대해 리프레시 토큰을 갱신
//TODO: 백에게 리프레시 토큰 만료 에러 코드 물어보고 다시 설정 필요함
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 만약 401 에러가 발생하고, 재시도한 적이 없다면
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        const newTokens = await refreshAccessToken(refreshToken);
        if (newTokens) {
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${newTokens.accessToken}`;
          return instance(originalRequest);
        }
      }
    }

    return Promise.reject(error);
  }
);

// GET 요청
export const getResponse = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.error("API 요청 실패", error);
    return null;
  }
};

// DELETE 요청
export const deleteResponse = async (url: string): Promise<boolean> => {
  try {
    await instance.delete(url);
    return true;
  } catch (error) {
    return false;
  }
};

// POST 요청 (응답 데이터 없음)
export const postResponseNoData = async (url: string): Promise<boolean> => {
  try {
    await instance.post(url, {
      headers: {
        Authorization: `Bearer `,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

// POST 요청 (응답 데이터 있음)
export const postResponse = async <TRequest, TResponse>(
  url: string,
  body: TRequest
): Promise<TResponse | null> => {
  try {
    const response = await instance.post<TResponse>(url, body);
    return response.data;
  } catch (error) {
    return null;
  }
};

// POST 요청 (응답 데이터 없음)
export const postNoResponse = async <TRequest>(
  url: string,
  requestBody: TRequest,
  config?: { headers?: { [key: string]: string } }
): Promise<boolean> => {
  try {
    // FormData를 사용하면 Content-Type을 자동으로 설정하지 않아도 되지만,
    // 명시적으로 multipart/form-data를 설정할 수 있습니다.
    if (requestBody instanceof FormData) {
      config = {
        ...config,
        headers: {
          ...config?.headers,
          "Content-Type": "multipart/form-data",
        },
      };
    }

    await instance.post(url, requestBody, config); // API 요청 전송
    return true; // 성공적으로 처리됨
  } catch (error) {
    console.error("Error posting request:", error);
    return false; // 오류 발생 시 false 반환
  }
};
