import styled from "styled-components";

export const DailyCakeWrapper = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DailyCakeContainer = styled.section`
  position: relative;
  width: 300px;
  height: auto;
`;

export const DailyCakeImg = styled.img`
  width: 100%;
  height: auto;
`;

export const CandleContainer = styled.div<{ left: number; bottom: number }>`
  position: absolute;
  left: ${({ left }) => left}%;
  bottom: ${({ bottom }) => bottom}%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CandleCircle = styled.img<{ top: number; left: number }>`
  width: 70px;
  height: 70px;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
`;

export const CandleBody = styled.img`
  scale: 0.3;
`;

export const UploadedImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  z-index: 5;
`;
