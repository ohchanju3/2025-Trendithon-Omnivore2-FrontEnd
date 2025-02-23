import { useEffect, useState } from "react";
import * as S from "./Calendar.styled";
import { Modal } from "@components/modal/Modal";
import { CupCakeDTO } from "@apis/domain/cupcake/getMyCupcakes";

type DatePiece = Date | null;
type SelectedDate = DatePiece | [DatePiece, DatePiece];

type CalendarFormProps = {
	cupcakes: CupCakeDTO[] | null;
};

export const CalendarForm = ({ cupcakes }: CalendarFormProps) => {
	const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [cupcakeDates, setCupcakeDates] = useState<string[]>([]);
	const formatDate = (date: Date) => {
		return date.toISOString().split("T")[0];
	};
	useEffect(() => {
		if (cupcakes) {
			const formattedDates = cupcakes.map(
				(cupcake) => new Date(cupcake.date).toISOString().split("T")[0],
			);
			setCupcakeDates(formattedDates);
			console.log(cupcakes);
		}
	}, [cupcakes]);

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
				locale="ko-KR"
				formatMonthYear={(locale, date) =>
					`${date.getFullYear()} ${date.toLocaleString(locale, {
						month: "long",
					})}`
				}
				formatShortWeekday={(_, date) =>
					["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][date.getDay()]
				}
				navigationLabel={({ date }) => (
					<div className="calendar-navigation">
						<span className="calendar-month">
							{date.toLocaleString("en-US", { month: "long" })}
						</span>
						<br />
						<span className="calendar-year">{date.getFullYear()}</span>
					</div>
				)}
				tileClassName={({ date }) => {
					const formattedDate = date.toISOString().split("T")[0];
					return cupcakeDates.includes(formattedDate) ? "has-cupcake" : "";
				}}
				tileContent={({ date }) => {
					const cupcake = cupcakes?.find(
						(cupcake) =>
							formatDate(new Date(cupcake.date)) === formatDate(date),
					);

					return cupcake ? (
						<S.EmotionLabel
							src={`images/cupCake/${cupcake.emotion.toLowerCase()}_cupcake.svg`}
						/>
					) : null;
				}}
			/>
			<Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
				<S.ContentWrapper>
					<S.DayWrapper>
						{selectedDate?.toLocaleString().split(". ").splice(0, 3).join(".")}
					</S.DayWrapper>
					<S.TextArea>
						오늘 내 생일이다! 기분 짱!! 맛있는것도 많이 먹고 친구들이랑 놀았다.
						귯귯~~ 오늘 내 생일이다! 기분 짱!! 맛있는것도 많이 먹고 친구들이랑
						놀았다.
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
