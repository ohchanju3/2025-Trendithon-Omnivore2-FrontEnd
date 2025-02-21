import { FriendReqeustBox } from "@components/friends/friendsRequestBox/FriendsRequestBox.tsx";
import * as S from "./FriendReqeust.styled.ts";

export const FriendReqeust = () => {
	const dummyData = [
		{
			name: "gildonggii",
		},
		{
			name: "홍길동",
		},
		{
			name: "고길동",
		},
	];

	return (
		<S.FriendRequestWrapper>
			{dummyData.map((data) => (
				<FriendReqeustBox name={data.name} />
			))}
		</S.FriendRequestWrapper>
	);
};
