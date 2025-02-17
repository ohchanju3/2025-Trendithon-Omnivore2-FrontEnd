import * as S from './CreateDailyCake.styled.ts';
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const CreateDailyCake = () => {
	const emotions = ['happy', 'soso', 'angry', 'sad', 'unrest'];
	const [emoji, setEmoji] = useState(emotions[0]);
	const date = new Date();
	return (
		<S.CreateDailyCakeWrapper>
			<S.DateWrappter>{date.toLocaleDateString()}</S.DateWrappter>
			<S.SelectFeeling>
				<S.emojiBox
					onClick={() => {
						setEmoji(emotions[0]);
					}}
				>
					<img src="images/cupCake/happy_cupcake.svg" alt="" />
					{emoji === 'happy' && (
						<S.CheckIcon>
							<CheckCircleIcon />
						</S.CheckIcon>
					)}
				</S.emojiBox>
				<S.emojiBox
					onClick={() => {
						setEmoji(emotions[1]);
					}}
				>
					<img src="images/cupCake/soso_cupcake.svg" alt="" />
					{emoji === 'soso' && (
						<S.CheckIcon>
							<CheckCircleIcon />
						</S.CheckIcon>
					)}
				</S.emojiBox>
				<S.emojiBox
					onClick={() => {
						setEmoji(emotions[2]);
					}}
				>
					<img src="images/cupCake/angry_cupcake.svg" alt="" />
					{emoji === 'angry' && (
						<S.CheckIcon>
							<CheckCircleIcon />
						</S.CheckIcon>
					)}
				</S.emojiBox>
				<S.emojiBox
					onClick={() => {
						setEmoji(emotions[3]);
					}}
				>
					<img src="images/cupCake/sad_cupcake.svg" alt="" />
					{emoji === 'sad' && (
						<S.CheckIcon>
							<CheckCircleIcon />
						</S.CheckIcon>
					)}
				</S.emojiBox>
				<S.emojiBox
					onClick={() => {
						setEmoji(emotions[4]);
					}}
				>
					<img src="images/cupCake/unrest_cupcake.svg" alt="" />
					{emoji === 'unrest' && (
						<S.CheckIcon>
							<CheckCircleIcon />
						</S.CheckIcon>
					)}
				</S.emojiBox>
			</S.SelectFeeling>
			<S.TextArea placeholder="오늘 하루 느낀점을 적어주세요!"></S.TextArea>
		</S.CreateDailyCakeWrapper>
	);
};
