import styled from "styled-components";

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 2rem;
`;

export const IntroText = styled.p`
  text-align: center;
  font-size: 28px;
  color: #f2f2f2;
  line-height: 40px;
  font-weight: 600;

  span.purple {
    color: #d7b0ff;
  }
`;

//Question

export const QuestionWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

export const QuestionText = styled.h1`
  font-size: 1.25rem;
  line-height: 22px;
  color: #f2f2f2;
`;

export const QuestionBtn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  white-space: pre-line;
  :hover {
    border: 3px solid #d7b0ff;
  }
`;

//result

export const ResultWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ResultImg = styled.img`
  width: 70%;
`;

export const ResultText = styled.h1`
  gap: 0.5rem;
  text-align: center;
  font-size: 1.7rem;
  line-height: 2rem;
  font-weight: semi-bold;
  margin-bottom: 2rem;

  span.purple {
    color: #d7b0ff;
  }

  span.bold {
    font-weight: 600;
  }
`;

export const ResultButtonWrapper = styled.section`
  display: flex;

  span {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
  }
`;
