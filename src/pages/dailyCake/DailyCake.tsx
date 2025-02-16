import { CalendarForm } from '@components/calendar/Calendar';
import * as S from './DailyCake.styled';
import Button from '@components/button/Button';
import AddIcon from '@mui/icons-material/Add';

const DailyCake = () => {
	return (
		<S.StyledDailyCake>
			<CalendarForm />
			<S.StyledButtons>
				<S.IsPublicButton>
					<Button scheme="E2DAEB">
						<img
							src="images/publicPrivateBtn/isPublic.png"
							alt="isPublicBtnIcon"
						/>
						<span>공개범위</span>
					</Button>
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
