import { ChangeEvent, ReactNode, useState } from 'react';
import * as S from './InputBar.styled.ts';

type InputBarProps = {
	value: string;
	width: string;
	title: string;
	isEditable: boolean;
	onChange?: (newValue: string) => void | null;
	children?: ReactNode;
};

export const InputBar = ({
	value,
	width,
	title,
	isEditable,
	onChange,
	children,
}: InputBarProps) => {
	const [inputValue, setInputValue] = useState(value);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setInputValue(newValue);
		if (onChange) onChange(newValue);
	};

	return (
		<S.InputBarWrapper width={width}>
			<span>{title}</span>
			<span> | </span>
			{isEditable ? (
				<input
					type="text"
					name="inputbox"
					id="inputbox"
					value={inputValue}
					onChange={handleChange}
				/>
			) : (
				<span>{value}</span>
			)}
			{/* <textarea name="inputbox" id="inputbox" value={value}></textarea> */}
			{children}
		</S.InputBarWrapper>
	);
};
