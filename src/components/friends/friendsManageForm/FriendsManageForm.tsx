import Button from "@components/button/Button.tsx";
import { FriendsBar } from "../friendsBar/FriendsBar.tsx";
import * as S from "./FriendsManageForm.styled.ts";
import {
	Follower,
	getMyFollowers,
} from "@apis/domain/mypage/getMyFollowers.ts";
import { useEffect, useState } from "react";

type FriendsManageFormProps = {
	numOfFriends: number;
};

export const FriendsManageForm = ({ numOfFriends }: FriendsManageFormProps) => {
	const [data, setData] = useState<Follower[]>([]);

	const fetchFriends = async () => {
		console.log("fetchFriends 실행됨!"); // ✅ 이 로그가 찍히는지 확인
		const response = await getMyFollowers();
		console.log("getMyFollowers API 응답 데이터:", response);

		if (response) {
			setData(response);
		} else {
			console.warn("API 응답이 없습니다.");
		}
	};

	useEffect(() => {
		fetchFriends();
	}, []);

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
					<FriendsBar
						key={index}
						profileImg={ele.profileImage}
						name={ele.name}
					/>
				))}
			</S.FriendsList>
		</S.FriendsManageFormWrapper>
	);
};
