import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Intro.styled";
import Button from "@components/button/Button";
import ProgressBar from "@components/intro/ProgressBar";

interface Question {
  question: string;
  answers: string[];
}

const Question: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  // 각 질문과 선택지들
  const questions: Question[] = [
    {
      question: "내가 좋아하는 콘텐츠를 소비하는 방식은?",
      answers: [
        "유튜브 댓글이나 SNS에서\n적극적으로 소통하며 즐긴다",
        "조용히 감상하면서\n내 생각을 정리하는 편이다",
      ],
    },
    {
      question: "친구가 추천한 콘텐츠를 볼 때, 나는?",
      answers: [
        "친구가 왜 좋아하는지 공감하며\n감정적으로 받아들인다.",
        "내가 좋아할 만한 요소가 있는지\n객관적으로 따져본다.",
      ],
    },
    {
      question: "SNS에서 트렌드를 접할 때, 나는?",
      answers: [
        "내가 관심 있는 분야 위주로\n정리해서 본다.",
        "다양한 콘텐츠를 랜덤하게\n탐색하며 열린 마음으로 본다.",
      ],
    },
  ];

  const handleAnswer = (answer: string) => {
    setSelectedAnswers((prev) => {
      const updatedAnswers = [...prev, answer];
      return updatedAnswers;
    });
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  };

  useEffect(() => {
    if (selectedAnswers.length === questions.length) {
      const resultPattern = selectedAnswers.join("-");
      navigate("/result", { state: { resultPattern } });
    }
  }, [selectedAnswers, navigate]);

  const currentQuestionData = questions[currentQuestion];

  return (
    <S.QuestionWrapper>
      <ProgressBar currentStep={currentQuestion + 1} totalSteps={3} />
      <S.QuestionText>{currentQuestionData?.question}</S.QuestionText>
      <S.QuestionBtn>
        {currentQuestionData?.answers.map((answer, index) => (
          <Button
            scheme="F0ECF5"
            key={index}
            onClick={() => handleAnswer(index === 0 ? "a" : "b")}
          >
            {answer}
          </Button>
        ))}
      </S.QuestionBtn>
    </S.QuestionWrapper>
  );
};

export default Question;
