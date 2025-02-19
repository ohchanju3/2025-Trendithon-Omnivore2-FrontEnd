import { ChangeEvent, ReactNode } from 'react';
import * as S from './InputBar.styled.ts';

type InputBarProps = {
	value: string;
	width: string;
	title: string;
	onChange: (newValue: string) => void;
	children?: ReactNode;
};

export const InputBar = ({
	value,
	width,
	title,
	onChange,
	children,
}: InputBarProps) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<S.InputBarWrapper width={width}>
			<span>{title}</span>
			<span> | </span>

			<input
				type="text"
				name="inputbox"
				id="inputbox"
				value={value} // ✅ 직접 바인딩하여 부모 값과 동기화
				onChange={handleChange}
			/>

			{children}
		</S.InputBarWrapper>
	);
};
