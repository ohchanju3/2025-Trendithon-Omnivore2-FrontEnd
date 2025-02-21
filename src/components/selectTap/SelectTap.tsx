import * as S from "./SelectTap.styled.ts";

type SelectTapProps = {
	val1: string;
	val2: string;
	selected: string;
	onSelect: (value: string) => void;
};

export const SelectTap = ({
	val1,
	val2,
	selected,
	onSelect,
}: SelectTapProps) => {
	return (
		<S.SelectTapWrapper>
			<S.TextWrapper
				isSelected={val1 === selected}
				onClick={() => onSelect(val1)}
			>
				{val1}
			</S.TextWrapper>
			<S.TextWrapper
				isSelected={val2 === selected}
				onClick={() => onSelect(val2)}
			>
				{val2}
			</S.TextWrapper>
		</S.SelectTapWrapper>
	);
};
