import styled from "styled-components";

export const SocialWrapper = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const SelectTap = styled.div`
	margin-bottom: 1rem;
`;

export const Content = styled.div`
	margin-top: 1rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CakeWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CupCakeWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ContentWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 1rem;
`;

export const DayWrapper = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
`;

export const TextArea = styled.div<{ $emotion: string }>`
	margin: 1rem;
	padding: 1rem;
	border-radius: 10px;
	background-color: #f0ecf5;
	width: 320px;
	height: 326px;
	overflow: auto;
	position: relative;

	&::before {
		content: "";
		background: ${({ $emotion }) =>
			`url("/images/cupCake/${$emotion}_cupcake.svg") no-repeat center`};
		background-size: contain;
		opacity: 0.2;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

export const LikeButton = styled.div`
	width: 100%;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-top: 1rem;

	img {
		width: 24px;
		height: 24px;
	}
`;

export const NoDataMessage = styled.div`
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #888;
	font-size: 1.2rem;
`;
