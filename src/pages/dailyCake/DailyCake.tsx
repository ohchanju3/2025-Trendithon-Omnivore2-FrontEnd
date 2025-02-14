import { CalendarForm } from '@components/calendar/Calendar';
import * as S from './DailyCake.styled';
import Button from '@components/button/Button';
import AddIcon from '@mui/icons-material/Add';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const DailyCake = () => {
	return (
		<S.StyledDailyCake>
			<CalendarForm />
			<S.StyledButtons>
				<Button scheme="E2DAEB">공개범위</Button>
				<S.AddButton>
					<AddIcon />
				</S.AddButton>
				<Button scheme="E2DAEB">
					<SendRoundedIcon />
					공유
				</Button>
			</S.StyledButtons>
		</S.StyledDailyCake>
	);
};

export default DailyCake;
