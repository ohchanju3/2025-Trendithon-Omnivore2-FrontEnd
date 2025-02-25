import { useEffect, useRef, useState } from "react";
import SseModal from "@components/modal/SseModal";

interface SseNotificationProps {
  setHasNotification: (value: boolean) => void;
}

const SseNotification: React.FC<SseNotificationProps> = ({
  setHasNotification,
}) => {
  const [notificationMessage, setNotificationMessage] = useState<string | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);
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

          // 정규식으로 알림 내용에서 name: 뒤의 텍스트만 추출
          const match = text.match(/name: (.*)/);
          if (match) {
            const extractedMessage = match[1]; // data:name: 이후의 텍스트
            setNotificationMessage(extractedMessage);

            // 모달 띄우기
            setShowModal(true);

            // 5초 후에 모달을 닫기
            setTimeout(() => {
              setShowModal(false);
            }, 10000);
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

  // 친구 요청 페이지로 이동하는 함수
  const goToFriendRequestPage = () => {
    // 친구 요청 페이지로 이동하는 로직 추가 (예: react-router 사용)
    window.location.href = "/friendrequest";
  };

  return (
    <>
      {showModal && (
        <SseModal
          message={notificationMessage}
          onClose={() => setShowModal(false)}
          onGoToFriendRequest={goToFriendRequestPage}
        />
      )}
    </>
  );
};

export default SseNotification;
