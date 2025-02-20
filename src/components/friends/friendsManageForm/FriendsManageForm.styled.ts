import styled from "styled-components";

export const FriendsManageFormWrapper = styled.div`
	margin: 0.6rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	font-weight: bold;
	border-radius: 12px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1),
		inset 0px -2px 4px rgba(0, 0, 0, 0.05);
	width: 310px;
	background-color: #e8e4e5;
	color: black;
`;

export const TitleText = styled.div`
	background-color: #f0ecf5;
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	padding: 1rem 2rem;
	border-radius: 12px 12px 0 0;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	font-weight: bold;
`;

export const SearchAndAddWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	justify-content: space-between;
	align-items: center;
`;

export const SearchTab = styled.div`
	input {
		width: 200px;
		height: 40px;
		background-color: #f0ecf5;
		border-radius: 15px;
		border: none;
		padding: 10px 14px;
		font-size: 14px;

		box-shadow: inset 0px 4px 6px rgba(0, 0, 0, 0.15),
			inset 0px -4px 6px rgba(255, 255, 255, 0.6),
			inset 4px 0px 6px rgba(0, 0, 0, 0.1),
			inset -4px 0px 6px rgba(0, 0, 0, 0.1);

		outline: none;
	}
`;

export const AddIcon = styled.img`
	width: 80% !important;
`;

export const FriendsList = styled.div<{ $isScrollable: boolean }>`
	width: 100%;
	margin-bottom: 1rem;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	gap: 1rem;

	max-height: ${(props) => (props.$isScrollable ? "250px" : "auto")};
	overflow-y: ${(props) => (props.$isScrollable ? "auto" : "visible")};

	&::-webkit-scrollbar {
		width: 6px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 3px;
	}
`;
