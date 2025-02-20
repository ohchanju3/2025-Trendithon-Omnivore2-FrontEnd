import Button from "@components/button/Button.tsx";
import * as S from "./FriendsBar.styled.ts";

type FriendsBarProps = {
	profileImg: string;
	name: string;
};

export const FriendsBar = ({ profileImg, name }: FriendsBarProps) => {
	return (
		<S.FriendsBarWrapper>
			<S.ProfileWrapper>
				<S.ProfileImg src={profileImg} />
				<S.ProfileName>{name}</S.ProfileName>
				<S.ProfileIcon src="public/images/friends/people_icon.svg" />
			</S.ProfileWrapper>
			<Button scheme="C3B0D7" width="60px">
				삭제
			</Button>
		</S.FriendsBarWrapper>
	);
};
