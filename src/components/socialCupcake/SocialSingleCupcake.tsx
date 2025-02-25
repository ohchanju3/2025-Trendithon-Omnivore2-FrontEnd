import { postLikeCupcake } from "@apis/domain/cupcake/postLikeCupcake.ts";
import * as S from "./SocialSingleCupcake.styled.ts";

type SocialCupcakeProps = {
	cupcakeid: string;
	emotion: string;
	liked: boolean;
	likedNum: number;
	date: string;
	nickname: string;
	onClick?: () => void;
	refreshData: () => void;
};

export const SocialSingleCupcake = ({
	cupcakeid,
	emotion,
	liked,
	likedNum,
	date,
	nickname,
	onClick,
	refreshData,
}: SocialCupcakeProps) => {
	const handleLikeBtn = async (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		e.stopPropagation();
		await postLikeCupcake(cupcakeid);
		refreshData();
	};

	return (
		<S.CupCakeWrapper onClick={onClick}>
			<S.ImgBox src={`images/cupCake/${emotion.toLowerCase()}_cupcake.svg`} />
			<S.TextArea>
				<S.LikeBox onClick={handleLikeBtn}>
					<img
						src={
							liked
								? "/images/shareBtn/likeBtn.png"
								: "/images/shareBtn/unlikeBtn.png"
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
