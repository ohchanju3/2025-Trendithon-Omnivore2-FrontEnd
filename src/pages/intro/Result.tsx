import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./Intro.styled";
import { postCake } from "@apis/domain/cake/postCake";
import { cakeMapping, colorToCakeImage } from "@constants/cakeColorConstants";

interface LocationState {
  resultPattern: string;
}

const Result: React.FC = () => {
  const location = useLocation();
  const { resultPattern } = location.state as LocationState;

  const cake = cakeMapping[resultPattern] || {
    name: "순백의 생크림",
    image: colorToCakeImage["CREAM"],
  };

  const [isRequestSent, setIsRequestSent] = useState(false);

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
    </S.ResultWrapper>
  );
};

export default Result;
