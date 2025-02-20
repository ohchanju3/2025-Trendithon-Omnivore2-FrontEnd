import * as S from "./GoDetailBar.styled.ts";

type GoDetailBarProps = {
	text: string[];
	separator?: string;
	width: string;
	onClick: () => void;
};

export const GoDetailBar = ({ text, width, onClick }: GoDetailBarProps) => {
	return (
		<S.GoDetailBarWrapper width={width} onClick={() => onClick()}>
			<S.TextWrapper>
				{text.map((t, index) => (
					<span key={index}>{t}</span>
				))}
			</S.TextWrapper>
			<S.ButtonIconBox>
				<img src="images/goDetailBar/pink_dot.svg" />
				<img src="images/goDetailBar/right_arrow.svg" />
			</S.ButtonIconBox>
		</S.GoDetailBarWrapper>
	);
};
