import Button from "@components/button/Button";
import React from "react";
import styled from "styled-components";

interface NotificationModalProps {
  message: string | null;
  onClose: () => void;
  onGoToFriendRequest: () => void;
}

const SseModal: React.FC<NotificationModalProps> = ({
  onGoToFriendRequest,
  message,
}) => {
  return (
    <SseModalWrapper>
      <SseModalContainer>
        <ModalText>{message}</ModalText>
        <Button onClick={onGoToFriendRequest}>보러가기</Button>
      </SseModalContainer>
    </SseModalWrapper>
  );
};

const SseModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const SseModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: black;
`;

export default SseModal;
