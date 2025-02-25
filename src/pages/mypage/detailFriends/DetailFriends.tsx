import { GoDetailBar } from "@components/goDetailBar/GoDetailBar.tsx";
import * as S from "./DetailFriends.styled.ts";
import { useNavigate } from "react-router-dom";
import { FriendsManageForm } from "@components/friends/friendsManageForm/FriendsManageForm.tsx";

export const DetailFriends = () => {
	const navigate = useNavigate();

	return (
		<S.DetailFriendsWrapper>
			<GoDetailBar
				width="310px"
				onClick={() => {
					navigate("/friendrequet");
				}}
				text={["친구 요청"]}
			/>
			<FriendsManageForm />
		</S.DetailFriendsWrapper>
	);
};
