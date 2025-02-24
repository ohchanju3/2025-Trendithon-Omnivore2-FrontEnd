import { useEffect, useState } from "react";
import * as S from "./Calendar.styled";
import { Modal } from "@components/modal/Modal";
import { CupCakeDTO } from "@apis/domain/cupcake/getCupCake";
import { getMyCupcakes } from "@apis/domain/cupcake/getMyCupcakes";

type DatePiece = Date | null;
type SelectedDate = DatePiece | [DatePiece, DatePiece];

export const CalendarForm = () => {
	const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [cupcakeDates, setCupcakeDates] = useState<string[]>([]);
	const [cupcakes, setCupcakes] = useState<CupCakeDTO[] | null>(null);
	const [selectedCupcake, setSelectedCupcake] = useState<CupCakeDTO | null>(
		null,
	);

	const formatDate = (date: Date) => date.toISOString().split("T")[0];

	const fetchMyCupcakes = async () => {
		const today = new Date();
		const response = await getMyCupcakes(today);
		if (response) {
			console.log("getMyCupcakes API 응답 데이터 : ", response);
			setCupcakes(response);

			const formattedDates = response.map((cupcake) =>
				formatDate(new Date(cupcake.date)),
			);
			setCupcakeDates(formattedDates);
		}
	};

	useEffect(() => {
		fetchMyCupcakes();
	}, []);

	const handleDateClick = (value: Date) => {
		const formattedSelectedDate = formatDate(value);
		const matchingCupcake = cupcakes?.find(
			(cupcake) => formatDate(new Date(cupcake.date)) === formattedSelectedDate,
		);

		if (matchingCupcake) {
			setSelectedDate(value);
			setSelectedCupcake(matchingCupcake);
			setModalIsOpen(true);
			console.log(`선택된 날짜의 Cupcake ID: ${matchingCupcake.cupCakeId}`);
		} else {
			setSelectedCupcake(null);
			console.log("해당 날짜의 Cupcake 없음");
		}
	};

	return (
		<S.CalendarWrapper>
			<S.StyledCalendar
				onChange={setSelectedDate}
				value={selectedDate}
				onClickDay={handleDateClick}
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
					const formattedDate = formatDate(date);
					return cupcakeDates.includes(formattedDate) ? "has-cupcake" : "";
				}}
				tileContent={({ date }) => {
					const cupcake = cupcakes?.find(
						(c) => formatDate(new Date(c.date)) === formatDate(date),
					);

					return cupcake ? (
						<S.EmotionLabel
							src={`images/cupCake/${cupcake.emotion.toLowerCase()}_cupcake.svg`}
							alt={cupcake.emotion}
						/>
					) : null;
				}}
			/>
			<Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
				<S.ContentWrapper>
					<S.DayWrapper>
						{selectedDate?.toLocaleString().split(". ").splice(0, 3).join(".")}
					</S.DayWrapper>
					<S.TextArea
						$emotion={selectedCupcake?.emotion.toLowerCase() || "default"}
					>
						{selectedCupcake ? selectedCupcake.content : ""}
					</S.TextArea>
					<S.LikeButton>
						<img src="/images/likeBtn/heart.png" alt="heart" />
						<span>{selectedCupcake?.likeCount}</span>
					</S.LikeButton>
				</S.ContentWrapper>
			</Modal>
		</S.CalendarWrapper>
	);
};
