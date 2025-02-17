import { Modal } from "@components/modal/Modal";
import * as S from "./DigitalCake.styled";
import { useState } from "react";

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
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCircleClick = (index: number) => {
    setModalOpen(index);
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
          <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
        )}
      </S.DigitalCakeContainer>
    </S.DigitalCakeWrapper>
  );
};

export default DigitalCake;
