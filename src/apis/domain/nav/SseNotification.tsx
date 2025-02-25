import { useEffect, useRef } from "react";

interface SseNotificationProps {
  setHasNotification: (value: boolean) => void;
}

const SseNotification: React.FC<SseNotificationProps> = ({
  setHasNotification,
}) => {
  const readerRef = useRef<ReadableStreamDefaultReader | null>(null);
  const TOKEN = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!TOKEN) {
      console.error("❌ JWT 토큰이 없습니다.");
      return;
    }

    connectSSE();

    return () => {
      console.log("🔌 SSE 연결 해제");
      if (readerRef.current) {
        readerRef.current.cancel();
      }
    };
  }, [TOKEN]);

  const connectSSE = async (): Promise<void> => {
    console.log("📡 [INFO] SSE 연결 시도");

    const attemptConnection = async (): Promise<void> => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/connect`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${TOKEN}`,
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`서버 응답 실패: ${response.status}`);
        }

        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error("스트림 리더를 가져올 수 없습니다.");
        }

        readerRef.current = reader;
        const decoder = new TextDecoder();

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          const text = decoder.decode(value, { stream: true }).trim();
          console.log("📩 [MESSAGE] 새 알림 도착:", text);

          // 알림이 도착하면 상태 업데이트
          setHasNotification(true);

          // 정규식으로 cakeId 값 추출
          const match = text.match(/cakeId (\d+)/);
          if (match) {
            const cakeId = match[1];

            const prevCakeId = localStorage.getItem("cakeId");

            if (prevCakeId !== cakeId) {
              localStorage.setItem("cakeId", cakeId);
              window.location.reload();
            }
          }
        }
      } catch (error) {
        console.error("❌ SSE 연결 실패, 3초 후 재시도");
        setTimeout(() => {
          connectSSE();
        }, 3000);
      }
    };

    attemptConnection();
  };

  return null;
};

export default SseNotification;
