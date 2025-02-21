import * as S from "./SocialCupcake.styled.ts";

type socialCupcakeData = {
	feeling: string;
	likenNum: number;
	writtenDate: string;
	liked: boolean;
	owner: string;
};

export const SocialCupcake = ({
	feeling,
	likenNum,
	writtenDate,
	liked,
	owner,
}: socialCupcakeData) => {
	return (
		<S.SocialCupcakeWrapper>
			<S.CupCakeImg src={`images/cupCake/${feeling}_cupcake.svg`} />
			<S.InfoBox>
				<S.LikedText>
					<img
						src={
							liked
								? "/images/shareBtn/likeBtn.png"
								: "/images/shareBtn/unlikeBtn.png"
						}
					/>
					<span>{likenNum}</span>
				</S.LikedText>
				<S.WrittenDateText>{writtenDate}</S.WrittenDateText>
				<S.OwnerText>{owner}</S.OwnerText>
			</S.InfoBox>
		</S.SocialCupcakeWrapper>
	);
};
