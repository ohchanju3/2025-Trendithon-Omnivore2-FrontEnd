import { useEffect, useState } from 'react';
import * as S from './Calendar.styled';
import { Modal } from '@components/modal/Modal';

type DatePiece = Date | null;
type SelectedDate = DatePiece | [DatePiece, DatePiece];

export const CalendarForm = () => {
	const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());
	const [modalIsOpen, setModalIsOpen] = useState(false);

	useEffect(() => {
		console.log(selectedDate);
	}, [selectedDate]);

	return (
		<S.CalendarWrapper>
			<S.StyledCalendar
				onChange={setSelectedDate}
				value={selectedDate}
				onClickDay={(value) => {
					setSelectedDate(value);
					setModalIsOpen(true);
				}}
				locale="en-US"
				formatMonthYear={(locale, date) =>
					`${date.getFullYear()} ${date.toLocaleString(locale, {
						month: 'long',
					})}`
				}
				formatShortWeekday={(_, date) =>
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
			<Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
				<div>내용을 넣으시면 됩니다.</div>
			</Modal>
		</S.CalendarWrapper>
	);
};
