import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Intro.styled";
import { postCake } from "@apis/domain/cake/postCake";
import { cakeMapping, colorToCakeImage } from "@constants/cakeColorConstants";
import Button from "@components/button/Button";

interface LocationState {
  resultPattern: string;
}

const Result: React.FC = () => {
  const location = useLocation();
  const { resultPattern } = location.state as LocationState;
  const navigate = useNavigate();

  const cake = cakeMapping[resultPattern] || {
    name: "순백의 생크림",
    image: colorToCakeImage["CREAM"],
  };

  const [isRequestSent, setIsRequestSent] = useState(false);

  const handleClick = () => {
    navigate("/digitalCake");
  };

  useEffect(() => {
    if (!isRequestSent) {
      const sendCakeData = async () => {
        const cakeId = await postCake(cake.name);

        if (cakeId !== null) {
          setIsRequestSent(true);
        } else {
          console.log("케이크 id 저장 실패");
        }
      };

      sendCakeData();
    }
  }, [cake.name, isRequestSent]);

  return (
    <S.ResultWrapper>
      {cake.image && <S.ResultImg src={cake.image} alt={cake.name} />}
      <S.ResultText>
        <span className="purple">짜잔!</span> <br />
        <br />
        <span className="bold"> "{cake.name}" </span> <br />
        케이크와 함께 <br /> <br />
        나만의 <span className="purple">개성</span>을 담아봐요:)
      </S.ResultText>
      <S.ResultButtonWrapper>
        <Button
          scheme="CFC3DB"
          style={{ justifyContent: "space-evenly" }}
          onClick={handleClick}
        >
          <img
            src="/images/intro/resultLeft.png"
            style={{ width: "20px", height: "auto" }}
          />
          <span>My Cake</span>
          <img
            src="/images/intro/resultRight.png"
            style={{ width: "15px", height: "auto" }}
          />
        </Button>
      </S.ResultButtonWrapper>
    </S.ResultWrapper>
  );
};

export default Result;
