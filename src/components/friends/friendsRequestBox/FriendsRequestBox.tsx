import Button from "@components/button/Button.tsx";
import * as S from "./FriendsRequestBox.styled.ts";

type FriendRequestBoxProps = {
	name: string;
};

export const FriendReqeustBox = ({ name }: FriendRequestBoxProps) => {
	return (
		<S.FriendRequestBoxWrapper>
			<S.NameBox>
				{name}
				<S.NameBoxIcon src="images/goDetailBar/pink_dot.svg"></S.NameBoxIcon>
			</S.NameBox>
			<S.SelectArea>
				<Button width="100px" scheme="958AA0">
					거절
				</Button>
				<Button width="100px" scheme="C3B0D7">
					수락
				</Button>
			</S.SelectArea>
		</S.FriendRequestBoxWrapper>
	);
};
