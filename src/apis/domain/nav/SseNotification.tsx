import { useEffect, useState, useRef } from "react";

const SseNotification = ({
  setHasNotification,
}: {
  setHasNotification: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [notifications, setNotifications] = useState<string[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const readerRef = useRef<ReadableStreamDefaultReader | null>(null);

  const TOKEN = localStorage.getItem("accessToken");

  useEffect(() => {
    console.log("🔍 [DEBUG] SSE 연결을 시작합니다.");

    if (!TOKEN) {
      console.error("❌ [ERROR] JWT 토큰이 없습니다.");
      setError("JWT 토큰이 없습니다.");
      return;
    }

    connectSSE();

    return () => {
      console.log("🔌 [CLOSE] SSE 연결 해제");
      if (readerRef.current) {
        readerRef.current.cancel();
      }
    };
  }, []);

  const connectSSE = async () => {
    console.log("📡 [INFO] SSE 연결 시도: /api/connect");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/connect`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
            Accept: "text/event-stream",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`서버 응답 실패: ${response.status}`);
      }

      if (!response.body) {
        throw new Error("SSE 스트리밍을 위한 body가 없습니다.");
      }

      const reader = response.body.getReader();
      readerRef.current = reader;
      const decoder = new TextDecoder();

      setIsConnected(true);
      setError(null);

      // 스트리밍 데이터 읽기
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const text = decoder.decode(value, { stream: true });
        console.log("📩 [MESSAGE] 새 알림 도착:", text);

        setNotifications((prev) => {
          const updatedNotifications = [...prev, text];
          setHasNotification(updatedNotifications.length > 0);
          return updatedNotifications;
        });
      }
    } catch (error) {
      console.error("❌ [ERROR] SSE 연결 실패:", error);
      setIsConnected(false);
      setError("SSE 연결 실패. 서버 문제일 수 있음.");

      // 자동 재연결 시도 (3초 후)
      setTimeout(() => {
        console.log("♻️ [RECONNECT] SSE 재연결 시도");
        setError(null);
        setIsConnected(false);
        setNotifications([]);
        connectSSE();
      }, 3000);
    }
  };

  useEffect(() => {
    console.log("🟢 SSE 연결 상태:", isConnected);
    console.log("❌ SSE 연결 오류:", error);
    console.log("📩 알림 목록:", notifications);
  }, [isConnected, error, notifications]);

  return null;
};

export default SseNotification;
