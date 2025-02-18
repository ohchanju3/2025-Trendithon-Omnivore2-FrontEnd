import Button from "@components/button/Button";
import * as S from "./Intro.styled";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  const navigateToQuestions = () => {
    navigate("/question");
  };

  return (
    <S.IntroWrapper>
      <S.IntroText>
        나만의 <span className="purple">케이크</span>를
        <br />
        만나볼 시간이에요
      </S.IntroText>
      <Button onClick={navigateToQuestions}>케이크 만들러 가기</Button>
    </S.IntroWrapper>
  );
};

export default Intro;
