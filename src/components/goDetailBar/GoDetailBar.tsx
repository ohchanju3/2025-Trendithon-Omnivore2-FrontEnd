import * as S from "./GoDetailBar.styled.ts";

type GoDetailBarProps = {
	text: string;
	width: string;
	onClick: () => void;
};

export const GoDetailBar = ({ text, width, onClick }: GoDetailBarProps) => {
	return (
		<S.GoDetailBarWrapper width={width} onClick={() => onClick()}>
			<S.TextWrapper>{text}</S.TextWrapper>
			<S.ButtonIconBox>
				<img src="images/goDetailBar/pink_dot.png" />
				<img src="images/goDetailBar/right_arrow.png" />
			</S.ButtonIconBox>
		</S.GoDetailBarWrapper>
	);
};
