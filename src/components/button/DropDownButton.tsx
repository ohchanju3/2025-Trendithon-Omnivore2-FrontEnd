import { ReactNode, useState, useRef, useEffect } from 'react';
import * as S from './DroptDownButton.styled.ts';
import Button from './Button.tsx';
import { SchemeType } from 'src/lib/types/style.ts';

type DropDownButtonProps = {
	scheme: SchemeType;
	options: string[];
	selected: string;
	onSelect: (option: string) => void;
	children: ReactNode;
};

export const DropDownButton = ({
	scheme,
	options,
	onSelect,
	children,
}: DropDownButtonProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<S.DropDownButtonWrapper ref={dropdownRef}>
			<Button scheme={scheme} onClick={() => setIsOpen(!isOpen)}>
				{children}
			</Button>
			{isOpen && (
				<S.DropDownList>
					{options.map((option, index) => (
						<S.DropDownItem
							key={index}
							onClick={() => {
								onSelect(option);
								setIsOpen(false);
							}}
						>
							{option}
						</S.DropDownItem>
					))}
				</S.DropDownList>
			)}
		</S.DropDownButtonWrapper>
	);
};
