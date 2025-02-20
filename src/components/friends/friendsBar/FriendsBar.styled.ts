import styled from "styled-components";

export const FriendsBarWrapper = styled.div`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	padding-bottom: 1rem;
	border-bottom: 2px solid #f2f2f2;

	Button {
		font-weight: bold;
	}
`;

export const ProfileWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`;

export const ProfileImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	margin-right: 0.6rem;
`;

export const ProfileName = styled.span``;

export const ProfileIcon = styled.img``;
