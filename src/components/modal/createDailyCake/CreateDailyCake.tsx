import * as S from './CreateDailyCake.styled.ts';
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const CreateDailyCake = () => {
	const emotions = ['happy', 'soso', 'angry', 'sad', 'unrest'];
	const date = new Date();
	const [emoji, setEmoji] = useState(emotions[0]);

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
			<S.TextArea placeholder="오늘 하루 느낀점을 적어주세요!" />
		</S.CreateDailyCakeWrapper>
	);
};
