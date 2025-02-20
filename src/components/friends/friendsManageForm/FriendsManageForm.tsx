import Button from "@components/button/Button.tsx";
import { FriendsBar } from "../friendsBar/FriendsBar.tsx";
import * as S from "./FriendsManageForm.styled.ts";

type FriendsManageFormProps = {
	numOfFriends: number;
};

export const FriendsManageForm = ({ numOfFriends }: FriendsManageFormProps) => {
	{
		/* 임시 데이터 */
	}
	const data = [
		{
			profileImg: "",
			name: "이민우",
		},
		{
			profileImg: "",
			name: "이민우",
		},
		{
			profileImg: "",
			name: "이민우",
		},
		{
			profileImg: "",
			name: "이민우",
		},
		{
			profileImg: "",
			name: "이민우",
		},
		{
			profileImg: "",
			name: "이민우",
		},
	];

	return (
		<S.FriendsManageFormWrapper>
			<S.TitleText>
				<span>친구 관리 ({numOfFriends})</span>
			</S.TitleText>
			<S.SearchAndAddWrapper>
				<S.SearchTab>
					<input type="text" placeholder="친구 아이디 입력" />
				</S.SearchTab>
				<Button
					scheme="E2DAEB"
					width="40px"
					onClick={() => alert("친구 추가 창")}
				>
					<S.AddIcon
						src="images/friends/add_friends.svg"
						alt="addFriends"
					></S.AddIcon>
				</Button>
			</S.SearchAndAddWrapper>
			<S.FriendsList $isScrollable={data.length > 3}>
				{data.map((ele, index) => (
					<FriendsBar key={index} profileImg={ele.profileImg} name={ele.name} />
				))}
			</S.FriendsList>
		</S.FriendsManageFormWrapper>
	);
};
