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
		} else {
			setRequestedData([]);
		}
	};

	useEffect(() => {
		fetchRequestFriends();
	}, []);

	return (
		<S.FriendRequestWrapper>
			{requestedData.length > 0 ? (
				requestedData.map((data) => (
					<FriendReqeustBox
						key={data.memberId}
						name={data.nickname}
						followerId={data.memberId.toString()}
						onSuccess={fetchRequestFriends}
					/>
				))
			) : (
				<S.NoRequestMessage>요청 내역이 없습니다.</S.NoRequestMessage>
			)}
		</S.FriendRequestWrapper>
	);
};
