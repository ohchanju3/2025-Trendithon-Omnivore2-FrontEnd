import { useState } from "react";

const SseTest = () => {
  const [targetMemberId, setTargetMemberId] = useState("");
  const TOKEN = localStorage.getItem("accessToken");

  const sendNotification = async () => {
    if (!targetMemberId) {
      alert("📌 알림을 보낼 사용자 ID를 입력하세요!");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/send/${targetMemberId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      if (!response.ok) throw new Error("서버 응답 실패");

      alert("✅ 알림 전송 완료!");
    } catch (error) {
      console.error("❌ 알림 전송 실패:", error);
      alert("🚨 알림 전송 실패!");
    }
  };

  return (
    <div>
      <h2>📢 알림 보내기</h2>
      <input
        type="number"
        placeholder="받는 사람 ID"
        value={targetMemberId}
        onChange={(e) => setTargetMemberId(e.target.value)}
      />
      <button onClick={sendNotification}>알림 보내기</button>
    </div>
  );
};

export default SseTest;
