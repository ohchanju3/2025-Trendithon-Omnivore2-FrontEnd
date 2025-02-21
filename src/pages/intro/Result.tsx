import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./Intro.styled";
import { postCake } from "@apis/cake/postCake";

interface LocationState {
  resultPattern: string;
}

const Result: React.FC = () => {
  const location = useLocation();
  const { resultPattern } = location.state as LocationState;

  // 케이크 이름과 이미지 매핑
  const cakeMapping: { [key: string]: { name: string; image: string } } = {
    "a-a-a": {
      name: "부드러운 스트로베리",
      image: "/images/intro/strawberry-cake.png",
    },
    "a-a-b": { name: "상큼한 레몬", image: "/images/intro/lemon-cake.png" },
    "a-b-a": { name: "깔끔한 녹차", image: "/images/intro/matcha-cake.png" },
    "b-a-a": {
      name: "유쾌한 티라미수",
      image: "/images/intro/tiramisu-cake.png",
    },
    "a-b-b": {
      name: "순백의 생크림",
      image: "/images/intro/cream-cake.png",
    },
    "b-a-b": {
      name: "조화로운 블루베리",
      image: "/images/intro/blueberry-cake.png",
    },
    "b-b-a": {
      name: "신중한 피스타치오",
      image: "/images/intro/pistachio-cake.png",
    },
    "b-b-b": {
      name: "논리적인 초코",
      image: "/images/intro/choco-cake.png",
    },
  };

  const cake = cakeMapping[resultPattern] || {
    name: "순백의 생크림",
    image: "/images/intro/cream-cake.png",
  };

  useEffect(() => {
    const sendCakeData = async () => {
      const cakeId = await postCake(cake.name);

      if (cakeId !== null) {
        console.log("케이크 아이디 저장!:", cakeId);
      } else {
        console.error("케이크 아이디 저장 실패");
      }
    };

    sendCakeData();
  }, [cake.name]);

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
