import * as S from "@pages/digitalCake/DigitalCake.styled";
import { useEffect, useState } from "react";
import Button from "@components/button/Button";
import { CakeData, getCakeInfo } from "@apis/domain/cake/getCakeInfo";
import { colorToCakeImage } from "@constants/cakeColorConstants";
import { candleData } from "@constants/candleData";
import { handleShare } from "@hooks/handleShare";
import DigitalCakeModalContent from "@components/digitalCake/digitalCakeModal";
import { postLikeCake } from "@apis/domain/cake/postLikeCake";

const SocialCakePage = () => {
  const [cakeData, setCakeData] = useState<CakeData | null>(null);
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    const friendCakeId = Number(localStorage.getItem("friendCakeId"));
    if (friendCakeId) {
      getCakeInfo(friendCakeId).then((data) => {
        if (data) {
          setCakeData(data);
          setLiked(data.like || false);
        }
      });
    }
  }, [modalIsOpen]);

  const handleCircleClick = (index: number) => {
    const matchedCandle = cakeData?.candles?.find(
      (candleItem) => candleItem.candleIndex === index
    );

    if (matchedCandle?.imgUrl && matchedCandle.content) {
      setModalOpen(index);
      setModalIsOpen(true);
    }
  };

  const handleLikeBtn = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (!cakeData) return;

    await postLikeCake(cakeData.cakeId.toString());

    setLiked((prevLiked) => !prevLiked);

    const updatedCakeData = await getCakeInfo(cakeData.cakeId);
    setCakeData(updatedCakeData);
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
              (candleItem) => candleItem.candleIndex === index
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
                  style={{
                    objectFit: "cover",
                  }}
                />

                <S.CandleBody
                  src={candle.candleBody}
                  alt={`촛대 ${index + 1}`}
                  height={candle.height}
                />
              </S.CandleContainer>
            );
          })}

        {/* Modal for Candle Content */}
        {modalOpen !== null && modalIsOpen && cakeData && (
          <DigitalCakeModalContent
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            imgUrl={
              cakeData.candles.find(
                (candle) => candle.candleIndex === modalOpen
              )?.imgUrl || ""
            }
            content={
              cakeData.candles.find(
                (candle) => candle.candleIndex === modalOpen
              )?.content || ""
            }
          />
        )}
      </S.DigitalCakeContainer>

      <S.DigitalCakeBtnContainer>
        <Button scheme="E2DAEB" onClick={handleLikeBtn}>
          <img
            src={
              liked
                ? "/images/shareBtn/likeBtn.png"
                : "/images/shareBtn/unlikeBtn.png"
            }
            alt="like button"
          />
          <span>{cakeData?.likeCount || 0}</span>
        </Button>
        <Button scheme="E2DAEB" onClick={handleShare}>
          <img src="images/shareBtn/Send.png" alt="shareBtnIcon" />
          <span>공유</span>
        </Button>
      </S.DigitalCakeBtnContainer>
    </S.DigitalCakeWrapper>
  );
};

export default SocialCakePage;
