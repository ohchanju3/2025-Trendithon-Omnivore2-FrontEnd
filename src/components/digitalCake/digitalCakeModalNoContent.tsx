import { useState, useEffect } from "react";
import { Modal } from "@components/modal/Modal";
import * as S from "./digitalCakeModal.styled";
import { postCakeCandles } from "@apis/domain/digitalCake/postCakeCandles";
import { patchCakeCandles } from "@apis/domain/digitalCake/patchCakeCandles";
import Button from "@components/button/Button";

interface DigitalCakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  candleIndex: number;
  existingImage: string;
  existingContent: string;
}

const DigitalCakeModalNoContent = ({
  isOpen,
  onClose,
  candleIndex,
  existingImage,
  existingContent,
}: DigitalCakeModalProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState(existingContent);
  const [imageChanged, setImageChanged] = useState(false);

  useEffect(() => {
    setContent(existingContent);
    if (!existingImage) {
      setImage(null);
    }
    setImageChanged(false);
  }, [existingContent, existingImage]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setImageChanged(true);
    }
  };

  const handleSave = async () => {
    if (!content.trim() && !imageChanged) {
      alert("변경된 내용이 없습니다.");
      return;
    }

    const formData = new FormData();

    const requestBody: Record<string, any> = { candleIndex };

    if (content !== existingContent) {
      requestBody.content = content;
    }

    if (imageChanged && image) {
      formData.append("image", image);
    }

    formData.append("request", JSON.stringify(requestBody));

    // 기존 데이터가 있었으면 PATCH, 새 데이터면 POST
    const result = await (existingImage || existingContent
      ? patchCakeCandles(formData)
      : postCakeCandles(formData));

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
                : existingImage || "/images/digitalCake/modalAddImg.png"
            }
            alt="선택된 이미지"
            onClick={() => document.getElementById("imageUpload")?.click()}
            style={{
              borderRadius: image ? "50%" : "",
              width: image ? "150px" : "",
              height: image ? "150px" : "",
            }}
          />
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
