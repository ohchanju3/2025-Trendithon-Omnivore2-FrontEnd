import * as S from "./DigitalCake.styled";
import { useEffect, useState } from "react";
import Button from "@components/button/Button";
import DigitalCakeModal from "@components/digitalCake/digitalCakeModal";
import { CakeData, getCakeInfo } from "@apis/domain/cake/getCakeInfo";

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
  const [cakeData, setCakeData] = useState<CakeData | null>(null);
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const cakeId = Number(localStorage.getItem("cakeId"));
    if (cakeId) {
      getCakeInfo(cakeId).then((data) => {
        console.log("받아온 케이크 데이터:", data);

        if (data) {
          setCakeData(data);
        }
      });
    }
  }, []);

  const handleCircleClick = (index: number) => {
    setModalOpen(index);
    console.log("누른 버튼", index);
    setModalIsOpen(true);
  };

  return (
    <S.DigitalCakeWrapper>
      <S.DigitalCakeContainer>
        <S.DigitalCakeImg src="/images/intro/cream-cake.png" />

        {cakeData &&
          candlePositions.map((pos, index) => {
            const matchedCandle = cakeData.candles?.find(
              (candle) => candle.candleId === index
            );
            console.log("matched", matchedCandle);

            return (
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
                  src={matchedCandle?.imgUrl || circleBodies[index]}
                  alt={`Circle ${index}`}
                />

                {/* 촛대 이미지 */}
                <S.CandleBody
                  src={candleBodies[index]}
                  alt={`촛대 ${index + 1}`}
                  height={candleHeights[index]}
                />
              </S.CandleContainer>
            );
          })}

        {/* 모달 */}
        {modalOpen !== null && (
          <DigitalCakeModal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
          />
        )}
      </S.DigitalCakeContainer>

      <S.DigitalCakeBtnContainer>
        <Button scheme="E2DAEB">
          <img src={"/images/shareBtn/likeBtn.png"} />
          <span>{cakeData?.likeCount || 0}</span>
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
