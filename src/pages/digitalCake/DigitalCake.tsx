import * as S from "./DigitalCake.styled";
import { useState } from "react";
import Button from "@components/button/Button";
import DigitalCakeModal from "@components/digitalCake/digitalCakeModal";

// 초와 동그라미의 위치 설정
const candlePositions = [0, 30, 45, 60, 60]; // 초의 왼쪽 위치
const candleBottoms = [36, 30, 35, 40, 45]; // 초의 아래쪽 위치
const candleHeights = [290, 290, 350, 250, 270]; //초의 길이
const circleTops = [40, 45, 55, 30, 35]; // 동그라미의 위쪽 위치
const circleLefts = [0, -12, -15, -20, 50]; // 동그라미의 왼쪽 위치
const candleBodies = [
  "/images/digitalCake/candle_body1.png",
  "/images/digitalCake/candle_body2.png",
  "/images/digitalCake/candle_body3.png",
  "/images/digitalCake/candle_body4.png",
  "/images/digitalCake/candle_body5.png",
];

const circleBodies = [
  "/images/digitalCake/circle1.png",
  "/images/digitalCake/circle2.png",
  "/images/digitalCake/circle3.png",
  "/images/digitalCake/circle4.png",
  "/images/digitalCake/circle5.png",
];

const DigitalCake = () => {
  const [modalOpen, setModalOpen] = useState<number | null>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleCircleClick = (index: number) => {
    setModalOpen(index);
    setModalIsOpen(true);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <S.DigitalCakeWrapper>
      <S.DigitalCakeContainer>
        {/* TODO: 백엔드 응답 response data 확인 후 이미지 연결되도록 수정 필요 */}
        <S.DigitalCakeImg src="/images/intro/cream-cake.png" />
        {candlePositions.map((pos, index) => (
          <S.CandleContainer
            key={index}
            left={pos}
            bottom={candleBottoms[index]}
          >
            {/* 동그라미 이미지 클릭 시 모달 열기 */}
            <S.CandleCircle
              top={circleTops[index]}
              left={circleLefts[index]}
              onClick={() => handleCircleClick(index)}
              src={circleBodies[index]}
              alt={`Circle ${index + 1}`}
            />

            {/* 촛대 이미지 */}
            <S.CandleBody
              src={candleBodies[index]}
              alt={`촛대 ${index + 1}`}
              height={candleHeights[index]}
            />
          </S.CandleContainer>
        ))}

        {/* 모달 */}
        {modalOpen !== null && (
          <DigitalCakeModal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
          />
        )}
      </S.DigitalCakeContainer>
      {/* TODO: api 연동시 좋아요 버튼 상태 필요 */}
      <S.DigitalCakeBtnContainer>
        <Button scheme="E2DAEB" onClick={toggleLike}>
          <img
            src={
              liked
                ? "/images/shareBtn/likeBtn.png"
                : "/images/shareBtn/unlikeBtn.png"
            }
          />
          <span>13</span>
        </Button>
        <Button scheme="E2DAEB">
          <img src="public/images/shareBtn/Send.png" alt="shareBtnIcon" />
          <span>공유</span>
        </Button>
      </S.DigitalCakeBtnContainer>
    </S.DigitalCakeWrapper>
  );
};

export default DigitalCake;
