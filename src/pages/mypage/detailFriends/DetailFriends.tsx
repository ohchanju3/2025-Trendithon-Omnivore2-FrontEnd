import { GoDetailBar } from "@components/goDetailBar/GoDetailBar.tsx";
import * as S from "./DetailFriends.styled.ts";
import { useNavigate } from "react-router-dom";
import { FriendsManageForm } from "@components/friends/friendsManageForm/FriendsManageForm.tsx";
import { useLocation } from "react-router-dom";

export const DetailFriends = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const followerCount = location.state?.followerCount ?? 0; // 기본값 0 설정

	return (
		<S.DetailFriendsWrapper>
			<GoDetailBar
				width="310px"
				onClick={() => {
					navigate("/friendrequet");
				}}
				text={["친구 요청"]}
			/>
			<FriendsManageForm numOfFriends={followerCount} />
		</S.DetailFriendsWrapper>
	);
};
