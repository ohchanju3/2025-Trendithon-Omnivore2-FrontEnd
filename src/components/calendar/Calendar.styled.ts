import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

export const CalendarWrapper = styled.div``;

export const StyledCalendar = styled(Calendar)`
	width: 100%;
	max-width: 350px;
	background: transparent;
	border: none;

	// 날짜 스타일
	.react-calendar__tile {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1rem;
		padding: 1rem;
		margin-bottom: 0.5rem;
	}

	.react-calendar__tile--now {
		background: transparent !important;
		color: inherit !important;
	}

	.react-calendar__tile--active {
		background: transparent !important;
		color: inherit !important;
	}

	.disable-current-day {
		background: transparent !important;
		color: inherit !important;
	}

	// 년, 월 스타일
	.react-calendar__navigation__label {
		white-space: pre-line;
		font-size: 1.2rem;
		font-weight: bold;
		text-align: center;
		color: white;
	}

	// 연도 (year)만 크게
	.calendar-year {
		font-size: 1.5rem; /* 원하는 크기로 조정 */
		font-weight: bold;
		display: block;
	}

	// 월 (month) 스타일 조정
	.calendar-month {
		font-size: 1rem;
		display: block;
	}

	// 캘린더 네비게이션 바 스타일
	.react-calendar__navigation {
		background-color: transparent;
		margin-bottom: 1.4rem;
	}

	// 네비게이션 버튼 클릭 시 outline 삭제
	.react-calendar__navigation button {
		background: transparent !important;
		outline: none !important;
	}

	.react-calendar__navigation__label {
		background: transparent !important;
		outline: none !important;
	}

	// 네비게이션 버튼 스타일
	.react-calendar__navigation__arrow {
		color: white;
		font-size: 2rem;
	}

	// 날짜 hover 이벤트 삭제
	.react-calendar__navigation__label:hover {
		background: transparent !important;
		cursor: default !important;
	}
	.react-calendar__navigation__arrow:hover {
		background: transparent !important;
		cursor: pointer !important;
	}

	// <<, >> 버튼 숨김
	.react-calendar__navigation__prev2-button,
	.react-calendar__navigation__next2-button {
		display: none;
	}

	// 달력 스타일
	.react-calendar__viewContainer {
		background-color: #d5d2d7;
		border-radius: 15px;
		padding: 0.6rem;
	}

	// 요일 타이틀 스타일
	.react-calendar__month-view__weekdays__weekday {
		color: black;
		font-size: 1.2em;
	}

	// 일요일 타이틀 색상 처리
	.react-calendar__month-view__weekdays__weekday:nth-child(1) abbr {
		color: red;
	}

	// 토요일 타이틀 색상 처리
	.react-calendar__month-view__weekdays__weekday:nth-child(7) abbr {
		color: blue;
	}

	// 날짜 간격 늘리기
	.react-calendar__month-view__days {
		margin: 1.4rem 0;
		display: grid !important;
		grid-template-columns: repeat(7, 1fr);
		gap: 5px;
	}

	// 날짜 버튼 스타일
	.react-calendar__month-view__days > button {
		border: 3px dotted black;
		border-radius: 50%;
	}

	// 날짜 텍스트 숨김
	.react-calendar__month-view__days > button > abbr {
		visibility: hidden;
		// display: none;
	}

	.react-calendar__month-view__days__day {
		// margin: 0.4rem;
	}

	// 날짜 요일 밑줄 삭제
	.react-calendar__month-view__weekdays__weekday > abbr {
		text-decoration: none;
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const DayWrapper = styled.div`
	font-size: 1.6rem;
	font-weight: bold;
	margin: 1.4rem;
`;

export const TextArea = styled.div`
	margin: 1rem;
	padding: 1rem;
	border-radius: 10px;
	background-color: #f0ecf5;
	width: 320px;
	height: 326px;
	overflow: auto;
	position: relative;

	&::before {
		content: '';
		background: url('images/cupCake/happy_cupcake.svg') no-repeat center;
		background-size: contain;
		opacity: 0.2;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

export const LikeButton = styled.button`
	width: 320px;
	display: flex;
	justify-content: start;
	align-items: center;
	margin-left: 1rem;
	margin-bottom: 1rem;
	gap: 0.6rem;

	& > span {
		font-size: 1.2rem;
	}
`;
