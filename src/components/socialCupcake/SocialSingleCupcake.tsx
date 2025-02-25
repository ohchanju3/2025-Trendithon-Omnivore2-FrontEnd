import * as S from "./SocialSingleCupcake.styled.ts";

type SocialCupcakeProps = {
	emotion: string;
	liked: boolean;
	likedNum: number;
	date: string;
	nickname: string;
	onClick?: () => void;
};

export const SocialSingleCupcake = ({
	emotion,
	liked,
	likedNum,
	date,
	nickname,
	onClick,
}: SocialCupcakeProps) => {
	return (
		<S.CupCakeWrapper onClick={onClick}>
			<S.ImgBox
				src={`images/cupCake/${emotion.toLowerCase()}_cupcake.svg`}
			></S.ImgBox>
			<S.TextArea>
				<S.LikeBox>
					<img
						src={
							liked
								? "/images/likeBtn/heart-filled.png"
								: "/images/likeBtn/heart.png"
						}
						alt="like-icon"
					/>
					<span>{likedNum}</span>
				</S.LikeBox>
				<S.DateAndOwner>
					<span>{new Date(date).toLocaleDateString()}</span>
				</S.DateAndOwner>
				<S.Nickname>{nickname}</S.Nickname>
			</S.TextArea>
		</S.CupCakeWrapper>
	);
};
