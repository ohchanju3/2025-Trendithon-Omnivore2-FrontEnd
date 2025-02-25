import Button from "@components/button/Button.tsx";
import * as S from "./FriendsBar.styled.ts";
import { deleteFriend } from "@apis/domain/mypage/deleteFriend.ts";

type FriendsBarProps = {
	profileImg: string;
	name: string;
	memberId: string;
	onSuccess: () => void;
};

export const FriendsBar = ({
	profileImg,
	name,
	memberId,
	onSuccess,
}: FriendsBarProps) => {
	const handleDeleteFriend = async () => {
		const response = await deleteFriend(memberId);
		if (response) {
			console.log("deleteFriend API 요청 응답 : ", response);
			alert("삭제가 완료되었습니다.");
			onSuccess();
		} else {
			alert("삭제에 실패했습니다!");
		}
	};

	return (
		<S.FriendsBarWrapper>
			<S.ProfileWrapper>
				<S.ProfileImg src={profileImg} />
				<S.ProfileName>{name}</S.ProfileName>
				<S.ProfileIcon src="public/images/friends/people_icon.svg" />
			</S.ProfileWrapper>
			<Button scheme="C3B0D7" width="60px" onClick={handleDeleteFriend}>
				삭제
			</Button>
		</S.FriendsBarWrapper>
	);
};
