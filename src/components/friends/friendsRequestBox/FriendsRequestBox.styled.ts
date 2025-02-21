import styled from "styled-components";

export const FriendRequestBoxWrapper = styled.div`
	// padding: 1rem;
	width: 300px;
	margin: 1rem;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.15),
		inset 0px -4px 6px rgba(255, 255, 255, 0.6),
		inset 4px 0px 6px rgba(0, 0, 0, 0.1), inset -4px 0px 6px rgba(0, 0, 0, 0.1);

	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	background-color: #e8e4e5;
`;

export const NameBox = styled.div`
	color: #000000;
	display: flex;
	flex-direction: row;
	justify-content: center;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	align-items: center;
	font-weight: bold;
	font-size: 1.2em;
	background-color: #e2daeb;
	border-radius: 10px 10px 0px 0px;
	width: 100%;
	text-align: center;
	height: 40px;
	position: relative;
`;

export const NameBoxIcon = styled.img`
	position: absolute;
	right: 15px;
	top: 50%;
	transform: translateY(-50%);
`;

export const SelectArea = styled.div`
	display: flex;
	margin-bottom: 1.5rem;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	Button {
		font-weight: bold;
	}
`;
