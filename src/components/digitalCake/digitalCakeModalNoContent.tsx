import { useState } from "react";
import { Modal } from "@components/modal/Modal";
import * as S from "./digitalCakeModal.styled";
import { postCakeCandles } from "@apis/domain/digitalCake/postCakeCandles";
import Button from "@components/button/Button";

interface DigitalCakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  candleIndex: number;
}

const DigitalCakeModalNoContent = ({
  isOpen,
  onClose,
  candleIndex,
}: DigitalCakeModalProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [content, setContent] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setIsImageSelected(true);
    }
  };

  const handleSave = async () => {
    if (!image) {
      alert("이미지를 선택해주세요.");
      return;
    }

    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    const formData = new FormData();

    const requestBody = {
      request: {
        content,
        candleIndex,
      },
      image,
    };
    formData.append("request", JSON.stringify(requestBody.request));
    formData.append("image", image);

    const result = await postCakeCandles(formData);

    if (result) {
      onClose();
    } else {
      alert("저장에 실패했습니다. 다시 시도해주세요 :-)");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.DigitalModalWrapper>
        <S.DigitalModalImgContainer>
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : "/images/digitalCake/modalAddImg.png"
            }
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
        <S.DigitalModalTextarea
          placeholder="이미지 관련 상세설명을 적어주세요!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button scheme="C3B0D7" onClick={handleSave}>
          저장
        </Button>
      </S.DigitalModalWrapper>
    </Modal>
  );
};

export default DigitalCakeModalNoContent;
