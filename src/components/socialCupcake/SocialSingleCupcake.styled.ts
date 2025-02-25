import styled from "styled-components";

export const CupCakeWrapper = styled.div`
	margin: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding-bottom: 2rem;
	border-bottom: 4px dotted white;
`;

export const LikeBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.4rem;
`;

export const ImgBox = styled.img`
	width: 230px;
`;

export const TextArea = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	img {
		width: 20px;
	}
`;
