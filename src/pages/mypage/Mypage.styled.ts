import styled from 'styled-components';

export const MyPageWrapper = styled.div`
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const ProfileImage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin-bottom: 2rem;
`;

export const ImageBox = styled.div<{ imageUrl?: string }>`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: #f0ecf5;
	background-image: ${({ imageUrl }) =>
		imageUrl ? `url(${imageUrl})` : 'none'};
	background-size: cover;
	background-position: center;
`;

export const ChangeImageBtn = styled.div`
	text-decoration: underline;
`;

export const InfoForm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
`;

export const FormAndBtn = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
