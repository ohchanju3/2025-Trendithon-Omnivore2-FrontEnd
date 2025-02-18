import { useState } from "react";
import { Modal } from "@components/modal/Modal";
import * as S from "./digitalCakeModal.styled";

interface DigitalCakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DigitalCakeModal = ({ isOpen, onClose }: DigitalCakeModalProps) => {
  const [imageSrc, setImageSrc] = useState(
    "/images/digitalCake/modalAddImg.png"
  );
  const [isImageSelected, setIsImageSelected] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
        setIsImageSelected(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} buttonTitle="저장">
      <S.DigitalModalWrapper>
        <S.DigitalModalImgContainer>
          <img
            src={imageSrc}
            alt="선택된 이미지"
            onClick={() => document.getElementById("imageUpload")?.click()}
            style={{
              borderRadius: isImageSelected ? "50%" : "",
              width: isImageSelected ? "150px" : "40%",
              height: isImageSelected ? "150px" : "",
            }}
          />
          {/* 파일 선택 input */}
          <input
            type="file"
            id="imageUpload"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
        </S.DigitalModalImgContainer>
        <S.DigitalModalTextarea placeholder="이미지 관련 상세설명을 적어주세요!" />
      </S.DigitalModalWrapper>
    </Modal>
  );
};

export default DigitalCakeModal;
