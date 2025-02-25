import { postLikeCake } from "@apis/domain/cake/postLikeCake.ts";
import * as S from "./SocialCake.styled.ts";
import { candleData } from "@constants/candleData";
import { useNavigate } from "react-router-dom";
import { colorToCakeImage } from "@constants/cakeColorConstants.ts";

type Candle = {
  candleId: number;
  imgUrl: string;
  content: string;
  candleIndex: number;
};

type SocialCakeProps = {
  cakeId: string;
  liked: boolean;
  likedNum: number;
  owner: string;
  candles?: Candle[];
  color: string;
  refreshData: () => void;
};

export const SocialCake = ({
  cakeId,
  liked,
  likedNum,
  owner,
  candles = [],
  refreshData,
  color,
}: SocialCakeProps) => {
  const navigate = useNavigate();

  const handleLikeBtn = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    await postLikeCake(cakeId);
    refreshData();
  };

  const handleCakeClick = () => {
    localStorage.setItem("friendCakeId", cakeId);
    navigate("/socialCake");
  };

  const cakeImage = color
    ? colorToCakeImage[color] || "/images/intro/cream-cake.png"
    : "/images/intro/cream-cake.png";

  return (
    <S.SocialCakeWrapper onClick={handleCakeClick}>
      <S.CakeContainer>
        <S.CakeWrapper src={cakeImage} />
        {candleData.map((candle, index) => {
          const matchedCandle = candles.find(
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
                src={matchedCandle?.imgUrl || candle.circleBody}
                alt={`Candle ${index}`}
                style={{ objectFit: "cover" }}
              />
              <S.CandleBody
                src={candle.candleBody}
                alt={`촛대 ${index + 1}`}
                height={candle.height}
              />
            </S.CandleContainer>
          );
        })}
      </S.CakeContainer>
      <S.CakeInfo>
        <S.LikedText onClick={handleLikeBtn}>
          <img
            src={
              liked
                ? "/images/shareBtn/likeBtn.png"
                : "/images/shareBtn/unlikeBtn.png"
            }
          />
          <span>{likedNum}</span>
        </S.LikedText>
        <S.OwnerText>{owner}</S.OwnerText>
      </S.CakeInfo>
    </S.SocialCakeWrapper>
  );
};
