import { CalendarForm } from '@components/calendar/Calendar';
import * as S from './DailyCake.styled';
import Button from '@components/button/Button';
import AddIcon from '@mui/icons-material/Add';
import { DropDownButton } from '@components/button/DropDownButton';
import { useState } from 'react';

const DailyCake = () => {
	const options = ['전체공개', '친구공개', '비공개'];
	const [privacyMode, setPrivacyMode] = useState(options[0]);

	return (
		<S.StyledDailyCake>
			<CalendarForm />
			<S.StyledButtons>
				<S.IsPublicButton>
					<DropDownButton
						onSelect={(select) => {
							setPrivacyMode(select);
						}}
						selected={options[0]}
						options={options}
						scheme="E2DAEB"
					>
						<img
							src="images/publicPrivateBtn/isPublic.png"
							alt="isPublicBtnIcon"
						/>
						<span>{privacyMode}</span>
					</DropDownButton>
				</S.IsPublicButton>
				<S.AddButton>
					<AddIcon />
				</S.AddButton>
				<S.ShareButton>
					<Button scheme="E2DAEB">
						<img src="public/images/shareBtn/Send.png" alt="shareBtnIcon" />
						<span>공유</span>
					</Button>
				</S.ShareButton>
			</S.StyledButtons>
		</S.StyledDailyCake>
	);
};

export default DailyCake;
