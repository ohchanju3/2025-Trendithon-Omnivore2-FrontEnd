import { InputBar } from "@components/inputBar/InputBar.tsx";
import * as S from "./Mypage.styled.ts";
import { useEffect, useState } from "react";
import Button from "@components/button/Button.tsx";
import { GoDetailBar } from "@components/goDetailBar/GoDetailBar.tsx";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
	const navigate = useNavigate();
	const [imageUrl, setImageUrl] = useState("");
	const [nickname, setNickName] = useState("");
	const [email, setEmail] = useState("");
	const [numOfFriends, setNumOfFriends] = useState(0);

	useEffect(() => {
		setNickName("minwoo");
		setEmail("minwoo1119@naver.com");
		setImageUrl("");
		setNumOfFriends(12);
	}, []);

	return (
		<S.MyPageWrapper>
			<S.ProfileImage>
				<S.ImageBox imageUrl={imageUrl}></S.ImageBox>
				<S.ChangeImageBtn onClick={() => alert("이미지 변경 기능 넣어야함!")}>
					프로필 이미지 변경
				</S.ChangeImageBtn>
			</S.ProfileImage>
			<S.InfoForm>
				<S.FormAndBtn>
					<InputBar
						title="닉네임"
						width="210px"
						value={nickname}
						onChange={setNickName}
					></InputBar>
					<Button
						width="80px"
						scheme="C3B0D7"
						onClick={() => alert(`nickname:${nickname}, email:${email}`)}
					>
						저장
					</Button>
				</S.FormAndBtn>

				<InputBar
					title="이메일"
					width="300px"
					value={email}
					onChange={setEmail}
				></InputBar>
				<GoDetailBar
					width="300px"
					text={["친구 관리", "|", numOfFriends.toString() + "명"]}
					onClick={() => {
						navigate("/detailfriends");
					}}
				></GoDetailBar>
			</S.InfoForm>
		</S.MyPageWrapper>
	);
};

export default Mypage;
