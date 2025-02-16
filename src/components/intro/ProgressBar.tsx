import React from "react";
import * as S from "./ProgressBar.styled";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <S.ProgressBarWrapper>
      <S.ProgressBarCircleWrapper>
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <S.ProgressBarCircle $isActive={currentStep === step}>
              {" "}
              {/* 현재 단계만 활성화 */}
              {step}
            </S.ProgressBarCircle>
            {index < steps.length - 1 && <S.ProgressBarLine />}
          </React.Fragment>
        ))}
      </S.ProgressBarCircleWrapper>
    </S.ProgressBarWrapper>
  );
};

export default ProgressBar;
