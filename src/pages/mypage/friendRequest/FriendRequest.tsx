import { FriendReqeustBox } from "@components/friends/friendsRequestBox/FriendsRequestBox.tsx";
import * as S from "./FriendReqeust.styled.ts";
import { useEffect, useState } from "react";
import { Follower } from "@apis/domain/mypage/getMyFollowers.ts";
import { getRequestFriends } from "@apis/domain/mypage/getRequestFriends.ts";

export const FriendReqeust = () => {
	const [requestedData, setRequestedData] = useState<Follower[]>([]);

	const fetchRequestFriends = async () => {
		const response = await getRequestFriends();
		if (response) {
			console.log("getRequestFriends API 요청 응답 : ", response);
			setRequestedData(response);
		}
	};

	useEffect(() => {
		fetchRequestFriends();
	}, []);

	return (
		<S.FriendRequestWrapper>
			{requestedData.map((data) => (
				<FriendReqeustBox
					key={data.memberId}
					name={data.nickname}
					followerId={data.memberId.toString()}
					onSuccess={fetchRequestFriends}
				/>
			))}
		</S.FriendRequestWrapper>
	);
};
