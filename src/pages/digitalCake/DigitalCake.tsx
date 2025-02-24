import * as S from "./DigitalCake.styled";
import { useEffect, useState } from "react";
import Button from "@components/button/Button";
import { CakeData, getCakeInfo } from "@apis/domain/cake/getCakeInfo";
import DigitalCakeModal from "@components/digitalCake/DigitalCakeModal";
import DigitalCakeModalNoContent from "@components/digitalCake/digitalCakeModalNoContent";
import { colorToCakeImage } from "@constants/cakeColorConstants";
import { candleData } from "@constants/candleData";

const DigitalCake = () => {
  const [cakeData, setCakeData] = useState<CakeData | null>(null);
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isMatchedCandle, setIsMatchedCandle] = useState<boolean>(true);

  useEffect(() => {
    const cakeId = Number(localStorage.getItem("cakeId"));
    if (cakeId) {
      getCakeInfo(cakeId).then((data) => {
        if (data) setCakeData(data);
      });
    }
  }, []);

  const handleCircleClick = (index: number) => {
    const matchedCandle = cakeData?.candles?.find(
      //Todo: candleId 추후 백 수정 후 프 변경 필요 (아마 candleIndex로)
      (candle) => candle.candleId === index
    );
    setIsMatchedCandle(!!matchedCandle);
    setModalOpen(index);
    setModalIsOpen(true);
  };

  const cakeImage = cakeData
    ? colorToCakeImage[cakeData.color] || "/images/intro/cream-cake.png"
    : "/images/intro/cream-cake.png";

  return (
    <S.DigitalCakeWrapper>
      <S.DigitalCakeContainer>
        <S.DigitalCakeImg src={cakeImage} />

        {cakeData &&
          candleData.map((candle, index) => {
            const matchedCandle = cakeData.candles?.find(
              //Todo: candleId 추후 백 수정 후 프 변경 필요 (아마 candleIndex로)
              (candleItem) => candleItem.candleId === index
            );

            return (
              <S.CandleContainer
                key={index}
                left={candle.position}
                bottom={candle.bottom}
              >
                <S.CandleCircle
                  top={candle.circleTop}
                  left={candle.circleLeft}
                  onClick={() => handleCircleClick(index)}
                  src={matchedCandle?.imgUrl || candle.circleBody}
                  alt={`Circle ${index}`}
                />

                <S.CandleBody
                  src={candle.candleBody}
                  alt={`촛대 ${index + 1}`}
                  height={candle.height}
                />
              </S.CandleContainer>
            );
          })}

        {/* 모달 */}
        {modalOpen !== null && modalIsOpen && (
          <>
            {isMatchedCandle ? (
              <DigitalCakeModal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
              />
            ) : (
              <DigitalCakeModalNoContent
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
              />
            )}
          </>
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
