import { useEffect, useState } from 'react';
import * as S from './Calendar.styled';

type DatePiece = Date | null;
type SelectedDate = DatePiece | [DatePiece, DatePiece];

export const CalendarForm = () => {
	const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());

	useEffect(() => {
		console.log(selectedDate);
	}, [selectedDate]);

	return (
		<S.StyledCalendar
			onChange={setSelectedDate}
			value={selectedDate}
			locale="en-US"
			formatMonthYear={(locale, date) =>
				`${date.getFullYear()} ${date.toLocaleString(locale, {
					month: 'long',
				})}`
			}
			formatShortWeekday={(locale, date) =>
				['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][date.getDay()]
			}
			navigationLabel={({ date }) => (
				<div className="calendar-navigation">
					<span className="calendar-month">
						{date.toLocaleString('en-US', { month: 'long' })}
					</span>
					<br />
					<span className="calendar-year">{date.getFullYear()}</span>
				</div>
			)}
		/>
	);
};
