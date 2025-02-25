import Button from "@components/button/Button.tsx";
import * as S from "./FriendsRequestBox.styled.ts";
import { deleteFriendReq } from "@apis/domain/mypage/deleteFriendReq.ts";
import { postAcceptFriend } from "@apis/domain/mypage/postAcceptFriend.ts";

type FriendRequestBoxProps = {
	name: string;
	followerId: string;
	onSuccess: () => void;
};

export const FriendReqeustBox = ({
	name,
	followerId,
	onSuccess,
}: FriendRequestBoxProps) => {
	const handleRefuse = async () => {
		const response = await deleteFriendReq(followerId);
		if (response) {
			console.log("deleteFriendReq API 요청 응답 : " + response);
			alert("친구 거절이 완료되었습니다.");
			onSuccess();
		} else {
			alert("친구 거절에 실패했습니다!");
		}
	};

	const handleAccept = async () => {
		const response = await postAcceptFriend(followerId);
		if (response) {
			console.log("postAcceptFriend API 요청 응답 : " + response);
			alert("친구 수락이 완료되었습니다.");
			onSuccess();
		} else {
			alert("친구 수락에 실패했습니다!");
		}
	};
	return (
		<S.FriendRequestBoxWrapper>
			<S.NameBox>
				{name}
				<S.NameBoxIcon src="images/goDetailBar/pink_dot.svg"></S.NameBoxIcon>
			</S.NameBox>
			<S.SelectArea>
				<Button width="100px" scheme="958AA0" onClick={handleRefuse}>
					거절
				</Button>
				<Button width="100px" scheme="C3B0D7" onClick={handleAccept}>
					수락
				</Button>
			</S.SelectArea>
		</S.FriendRequestBoxWrapper>
	);
};
