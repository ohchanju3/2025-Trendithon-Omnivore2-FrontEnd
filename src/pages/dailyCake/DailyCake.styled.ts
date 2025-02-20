import styled from "styled-components";

export const StyledDailyCake = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
`;

export const StyledButtons = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 1rem;
	gap: 1rem;
	color: #515151;

	Button {
		font-weight: 700;
	}
`;

export const AddButton = styled.div`
	background-color: #4e4376;
	padding: 0.5rem;
	border-radius: 50%;
	color: #cfc3db;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const IsPublicButton = styled.div`
	Button {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	`;

export const ShareButton = styled.div`
	Button {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	`;
