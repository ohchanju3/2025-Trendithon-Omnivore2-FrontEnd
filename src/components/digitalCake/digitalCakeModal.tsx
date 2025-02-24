import { Modal } from "@components/modal/Modal";
import * as S from "./digitalCakeModal.styled";

interface DigitalCakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
  content: string;
}

const DigitalCakeModal = ({
  isOpen,
  onClose,
  imgUrl,
  content,
}: DigitalCakeModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.DigitalModalWrapper>
        <S.DigitalModalContentImgContainer>
          <img src={imgUrl} />
        </S.DigitalModalContentImgContainer>
        <S.DigitalModalContentTextarea>{content}</S.DigitalModalContentTextarea>
      </S.DigitalModalWrapper>
    </Modal>
  );
};

export default DigitalCakeModal;
