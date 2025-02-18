import CloseIcon from "@mui/icons-material/Close";
import * as S from "./Modal.styled.ts";
import Button from "@components/button/Button.tsx";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  buttonTitle?: string;
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  buttonTitle,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <S.ModalWrapper onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ExitButton onClick={onClose}>
          <CloseIcon onClick={onClose} />
        </S.ExitButton>
        {children}
        <S.SubmitButton>
          {buttonTitle && (
            <Button scheme="C3B0D7" onClick={onClose}>
              {buttonTitle}
            </Button>
          )}
        </S.SubmitButton>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};
