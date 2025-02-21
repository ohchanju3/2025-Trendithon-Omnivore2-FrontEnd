import * as S from "./SocialCake.styled.ts";

type SocialCakeProps = {
	liked: boolean;
	likedNum: number;
	owner: string;
};

export const SocialCake = ({ liked, likedNum, owner }: SocialCakeProps) => {
	return (
		<S.SocialCakeWrapper>
			{/* 케이크 컴포넌트 만들면 수정해야할듯! */}
			<S.CakeWrapper src="/images/intro/cream-cake.png"></S.CakeWrapper>
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
