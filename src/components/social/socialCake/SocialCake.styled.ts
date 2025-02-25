import styled from "styled-components";

export const SocialCakeWrapper = styled.div`
	width: 300px;
	margin: 7rem 1rem;
	padding-bottom: 2rem;
	border-bottom: 4px dotted white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const CandleContainer = styled.div<{ left: number; bottom: number }>`
	position: absolute;
	left: ${({ left }) => left}%;
	bottom: ${({ bottom }) => bottom}%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CakeContainer = styled.div`
	position: relative;
`;

export const CandleCircle = styled.img<{ top: number; left: number }>`
	width: 70px;
	height: 70px;
	position: absolute;
	top: ${({ top }) => top}px;
	left: ${({ left }) => left}px;
	cursor: pointer;
	border-radius: 50%;
	z-index: 10;
`;

export const CandleBody = styled.img`
	scale: 0.3;
`;

export const CakeInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	color: white;
`;

export const CakeWrapper = styled.img`
	width: 100%;
`;

export const LikedText = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.6rem;
	img {
		width: 20px;
	}
`;

export const OwnerText = styled.div``;
