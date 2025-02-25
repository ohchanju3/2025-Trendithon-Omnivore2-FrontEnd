import { InputBar } from "@components/inputBar/InputBar.tsx";
import * as S from "./Mypage.styled.ts";
import { useEffect, useState } from "react";
import Button from "@components/button/Button.tsx";
import { GoDetailBar } from "@components/goDetailBar/GoDetailBar.tsx";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "@apis/domain/mypage/getMyInfo.ts";
import { updateMyInfo } from "@apis/domain/mypage/updateMyInfo.ts";

const Mypage = () => {
	const navigate = useNavigate();
	const [myData, setMyData] = useState<{
		picture: string;
		email: string;
		nickName: string;
		followerCount: number;
	} | null>(null);

	const fetchMyInfo = async () => {
		const response = await getMyInfo();
		if (response) {
			console.log("getMyInfo API 응답 데이터 : ", response);
			setMyData(response);
		}
	};

	const fetchUpdateMyInfo = async () => {
		if (!myData) return;
		const response = await updateMyInfo(myData.nickName);
		if (response) {
			console.log("updateMyInfo API 응답 데이터 : ", response);
		}
	};

	useEffect(() => {
		fetchMyInfo();
	}, []);

	return (
		<S.MyPageWrapper>
			<S.ProfileImage>
				<S.ImageBox $imageUrl={myData?.picture}></S.ImageBox>
			</S.ProfileImage>
			<S.InfoForm>
				<S.FormAndBtn>
					<InputBar
						title="닉네임"
						width="210px"
						value={myData?.nickName ?? ""}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setMyData((prev) =>
								prev ? { ...prev, nickName: e.target.value } : prev,
							)
						}
					/>
					<Button width="80px" scheme="C3B0D7" onClick={fetchUpdateMyInfo}>
						저장
					</Button>
				</S.FormAndBtn>

				<InputBar
					title="이메일"
					width="300px"
					value={myData?.email ?? ""}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setMyData((prev) =>
							prev ? { ...prev, nickName: e.target.value } : prev,
						)
					}
				/>

				<GoDetailBar
					width="300px"
					text={["친구 관리", "|", myData?.followerCount + "명"]}
					onClick={() => navigate("/detailfriends")}
				/>
			</S.InfoForm>
		</S.MyPageWrapper>
	);
};

export default Mypage;
