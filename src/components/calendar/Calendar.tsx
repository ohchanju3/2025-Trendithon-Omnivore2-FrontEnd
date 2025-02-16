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
				<S.ContentWrapper>
					<S.DayWrapper>
						{selectedDate?.toLocaleString().split('. ').splice(0, 3).join('.')}
					</S.DayWrapper>
					<S.TextArea>
						오늘 내 생일이다! 기분 짱!! 맛있는것도 많이 먹고 친구들이랑 놀았다.
						귯귯~~ 오늘 내 생일이다! 기분 짱!! 맛있는것도 많이 먹고 친구들이랑
						놀았다. 귯귯~~ 오늘 내 생일이다! 기분 짱!! 맛있는것도 많이 먹고
						친구들이랑 놀았다. 귯귯~~ 오늘 내 생일이다! 기분 짱!! 맛있는것도
						많이 먹고 친구들이랑 놀았다. 귯귯~~ 오늘 내 생일이다! 기분 짱!!
					</S.TextArea>
					<S.LikeButton>
						<img src="/images/likeBtn/heart.png" alt="heart" />
						<span>10</span>
					</S.LikeButton>
				</S.ContentWrapper>
			</Modal>
		</S.CalendarWrapper>
	);
};
