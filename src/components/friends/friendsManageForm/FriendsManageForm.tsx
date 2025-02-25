import Button from "@components/button/Button.tsx";
import { FriendsBar } from "../friendsBar/FriendsBar.tsx";
import * as S from "./FriendsManageForm.styled.ts";
import {
	Follower,
	getMyFollowers,
} from "@apis/domain/mypage/getMyFollowers.ts";
import { useEffect, useState } from "react";
import { postFriendRequest } from "@apis/domain/mypage/postFriendRequest.ts";

export const FriendsManageForm = () => {
	const [data, setData] = useState<Follower[]>([]);
	const [searchEmail, setSearchEmail] = useState("");
	const [numOfFriends, setNumOfFriends] = useState(0);

	const fetchFriends = async () => {
		console.log("fetchFriends 실행됨!");
		const response = await getMyFollowers();
		console.log("getMyFollowers API 응답 데이터:", response);

		if (response) {
			setData(response);
			setNumOfFriends(response.length);
		} else {
			console.warn("API 응답이 없습니다.");
		}
	};

	// 친구 요청 보내기
	const fetchRequestFriends = async () => {
		if (!searchEmail.trim()) {
			alert("이메일을 입력해주세요!");
			return;
		}

		const response = await postFriendRequest(searchEmail);
		if (response) {
			console.log("postFriendsRequest API 요청 응답 : ", response);
			alert(response);
			setSearchEmail("");
			fetchFriends();
		} else {
			alert("친구 요청을 수행할 수 없습니다!");
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
					<input
						type="text"
						placeholder="친구 아이디 입력"
						value={searchEmail}
						onChange={(e) => setSearchEmail(e.target.value)}
					/>
				</S.SearchTab>
				<Button scheme="E2DAEB" width="40px" onClick={fetchRequestFriends}>
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
						memberId={ele.memberId.toString()}
						onSuccess={fetchFriends}
					/>
				))}
			</S.FriendsList>
		</S.FriendsManageFormWrapper>
	);
};
