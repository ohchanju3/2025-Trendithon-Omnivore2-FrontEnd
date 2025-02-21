import styled from "styled-components";

export const SelectTapWrapper = styled.div`
	margin: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const TextWrapper = styled.div<{ isSelected: boolean }>`
	font-size: 1.2em;
	padding: 0.6rem;
	border-bottom: ${({ isSelected }) =>
		isSelected ? "1px solid #D7B0FF" : "none"};
	color: ${({ isSelected }) => (isSelected ? "#D7B0FF" : "##ffffff")};
`;
