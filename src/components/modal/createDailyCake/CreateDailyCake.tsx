import * as S from "./CreateDailyCake.styled.ts";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "@components/button/Button.tsx";
import { postCupCake } from "@apis/domain/cupcake/postCupCake.ts";

type CreateDailyCakeProps = {
	privacyMode: string;
};

export const CreateDailyCake = ({ privacyMode }: CreateDailyCakeProps) => {
	const emotions = ["happy", "so_so", "angry", "sad", "nervous"];
	const date = new Date();
	const [emoji, setEmoji] = useState(emotions[0]);
	const [content, setContent] = useState("");

	const fetchMakeCupcake = async () => {
		const response = await postCupCake(
			emoji.toUpperCase(),
			content,
			privacyMode,
		);
		if (response) {
			console.log("postCupCake API 요청 결과 : ", response);
		}
		console.log(response);
	};

	return (
		<S.CreateDailyCakeWrapper>
			<S.DateWrappter>{date.toLocaleDateString()}</S.DateWrappter>
			<S.SelectFeeling>
				{emotions.map((emotion) => (
					<S.emojiBox key={emotion} onClick={() => setEmoji(emotion)}>
						<img src={`images/cupCake/${emotion}_cupcake.svg`} alt={emotion} />
						{emoji === emotion && (
							<S.CheckIcon>
								<CheckCircleIcon />
							</S.CheckIcon>
						)}
					</S.emojiBox>
				))}
			</S.SelectFeeling>
			<S.TextArea
				placeholder="오늘 하루 느낀점을 적어주세요!"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
			<S.SubmitBtn>
				<Button scheme="C3B0D7" onClick={fetchMakeCupcake}>
					저장
				</Button>
			</S.SubmitBtn>
		</S.CreateDailyCakeWrapper>
	);
};
