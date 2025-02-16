import styled from 'styled-components';

export const DropDownButtonWrapper = styled.div`
	position: relative;
	display: inline-block;
	z-index: 1;
`;

export const DropDownList = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background-color: #e2daeb;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	border-radius: 12px;
	margin-top: 8px;
	overflow: hidden;
`;

export const DropDownItem = styled.div`
	padding: 10px;
	cursor: pointer;
	font-size: 14px;
	transition: background 0.2s;

	&:hover {
		background-color: #726688;
		color: white;
	}
`;
