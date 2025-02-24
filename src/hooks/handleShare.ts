export const handleShare = async () => {
  const shareData = {
    title: "Daily Cake 공유",
    text: "내 감정을 공유해요! 🧁",
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      console.log("✅ 공유 성공");
    } else {
      alert("현재 브라우저는 공유 기능을 지원하지 않습니다.");
    }
  } catch (error) {
    console.error("공유 오류:", error);
  }
};
