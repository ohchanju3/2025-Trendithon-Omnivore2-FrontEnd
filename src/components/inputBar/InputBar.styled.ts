import styled from "styled-components";

export const InputBarWrapper = styled.div<{ width: string }>`
	padding: 0.4rem 0.6rem;
	margin: 0.6rem;
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	gap: 0.5rem;
	font-weight: bold;
	border-radius: 8px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
		inset 0px -2px 4px rgba(0, 0, 0, 0.05);

	width: ${(props) => props.width};
	height: 40px;
	background-color: #f0ecf5;
	color: black;

	input {
		background: transparent;
		width: ${({ width }) => `${parseInt(width, 10) / 2}px`};
		text-overflow: clip;
	}
`;

export const TextWrapper = styled.span`
	margin: 0.6rem;
`;
