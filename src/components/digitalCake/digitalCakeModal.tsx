import { Modal } from "@components/modal/Modal";
import * as S from "./digitalCakeModal.styled";

interface DigitalCakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DigitalCakeModal = ({ isOpen, onClose }: DigitalCakeModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.DigitalModalWrapper>
        <S.DigitalModalContentImgContainer>
          <img src="images/intro/cream-cake.png" />
        </S.DigitalModalContentImgContainer>
        <S.DigitalModalContentTextarea>
          와우와우와우
        </S.DigitalModalContentTextarea>
      </S.DigitalModalWrapper>
    </Modal>
  );
};

export default DigitalCakeModal;
