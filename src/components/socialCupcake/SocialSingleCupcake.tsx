import * as S from "./SocialSingleCupcake.styled.ts";

type SocialCupcakeProps = {
	emotion: string;
	liked: boolean;
	likedNum: number;
	date: string;
	nickname: string;
};

export const SocialSingleCupcake = ({
	emotion,
	liked,
	likedNum,
	date,
	nickname,
}: SocialCupcakeProps) => {
	const getDate = () => {
		const newDate = new Date(date);
		return newDate.toLocaleDateString();
	};
	return (
		<S.CupCakeWrapper>
			<S.ImgBox
				src={`images/cupCake/${emotion.toLowerCase()}_cupcake.svg`}
			></S.ImgBox>
			<S.TextArea>
				<S.LikeBox>
					<img
						src={
							liked
								? "/images/shareBtn/likeBtn.png"
								: "/images/shareBtn/unlikeBtn.png"
						}
					/>
					<span>{likedNum}</span>
				</S.LikeBox>

				<span>{getDate()}</span>
				<span>{nickname}</span>
			</S.TextArea>
		</S.CupCakeWrapper>
	);
};
