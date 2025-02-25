import * as S from "./SocialCake.styled.ts";
import { candleData } from "@constants/candleData";

type Candle = {
	candleId: number;
	imgUrl: string;
	content: string;
	candleIndex: number;
};

type SocialCakeProps = {
	liked: boolean;
	likedNum: number;
	owner: string;
	candles?: Candle[];
};

export const SocialCake = ({
	liked,
	likedNum,
	owner,
	candles = [],
}: SocialCakeProps) => {
	return (
		<S.SocialCakeWrapper>
			<S.CakeContainer>
				<S.CakeWrapper src="/images/intro/cream-cake.png" />
				{candleData.map((candle, index) => {
					const matchedCandle = candles.find(
						(candleItem) => candleItem.candleIndex === index,
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
				<S.LikedText>
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
