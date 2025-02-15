import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 80%;
`;

export const ProgressBarCircleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const ProgressBarCircle = styled.div<{ $isActive: boolean }>`
  width: ${(props) => (props.$isActive ? "30px" : "15px")};
  height: ${(props) => (props.$isActive ? "30px" : "15px")};
  border-radius: 50%;
  background-color: ${(props) => (props.$isActive ? "#D7B0FF" : "#F5F5F5")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$isActive ? "#555555" : "#F5F5F5")};
  font-size: 14px;
  font-weight: bold;
  position: relative;
`;

export const ProgressBarLine = styled.div`
  height: 2px;
  width: 30%;
  background-color: #f5f5f5;
`;
