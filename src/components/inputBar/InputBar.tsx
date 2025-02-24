import { ChangeEvent, ReactNode } from "react";
import * as S from "./InputBar.styled.ts";

type InputBarProps = {
	value: string;
	width: string;
	title: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	children?: ReactNode;
};

export const InputBar = ({
	value,
	width,
	title,
	onChange,
	children,
}: InputBarProps) => {
	return (
		<S.InputBarWrapper width={width}>
			<S.TextWrapper>{title}</S.TextWrapper>
			<span> | </span>

			<input
				type="text"
				name="inputbox"
				id="inputbox"
				value={value}
				onChange={onChange}
			/>

			{children}
		</S.InputBarWrapper>
	);
};
