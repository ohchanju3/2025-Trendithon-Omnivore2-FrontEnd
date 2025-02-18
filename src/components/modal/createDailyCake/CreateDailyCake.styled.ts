import styled from 'styled-components';

export const CreateDailyCakeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	justify-content: center;
	align-items: center;
	margin-bottom: 2rem;
`;

export const DateWrappter = styled.div`
	font-size: 1.6rem;
	font-weight: bold;
	margin: 1.4rem;
`;

export const SelectFeeling = styled.div`
	width: 320px;
	padding: 0.6rem;
	margin: 0.6rem;
	border-radius: 12px;
	background-color: #f0ecf5;
	display: flex;
	flex-direction: row;
	gap: 0.4rem;
	justify-content: center;
	align-items: center;
	box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const emojiBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: col;
	justify-content: center;
	align-items: center;
`;

export const TextArea = styled.textarea`
	background-color: #f0ecf5;
	border-radius: 12px;
	width: 320px;
	height: 220px;
	padding: 0.6rem;
	margin: 0.6rem;
	box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const CheckIcon = styled.div`
	position: absolute;
	top: 70%;
	left: 60%;
`;
