import { ChangeEvent, ReactNode } from "react";
import * as S from "./InputBar.styled.ts";

type InputBarProps = {
	value: string;
	width: string;
	title: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	children?: ReactNode;
	readOnly?: boolean;
};

export const InputBar = ({
	value,
	width,
	title,
	onChange,
	children,
	readOnly,
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
				readOnly={readOnly}
			/>

			{children}
		</S.InputBarWrapper>
	);
};
