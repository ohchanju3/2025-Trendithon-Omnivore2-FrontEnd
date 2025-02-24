import CloseIcon from "@mui/icons-material/Close";
import * as S from "./Modal.styled.ts";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<S.ModalWrapper onClick={onClose}>
			<S.ModalContent onClick={(e) => e.stopPropagation()}>
				<S.ExitButton onClick={onClose}>
					<CloseIcon onClick={onClose} />
				</S.ExitButton>
				{children}
			</S.ModalContent>
		</S.ModalWrapper>
	);
};
