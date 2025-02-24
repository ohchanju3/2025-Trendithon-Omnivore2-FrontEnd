// cakeConstants.ts

export const colorToCakeImage: { [key: string]: string } = {
  STRAWBERRY: "/images/intro/strawberry-cake.png",
  LEMON: "/images/intro/lemon-cake.png",
  GREEN_TEA: "/images/intro/matcha-cake.png",
  TIRAMISU: "/images/intro/tiramisu-cake.png",
  CREAM: "/images/intro/cream-cake.png",
  BLUEBERRY: "/images/intro/blueberry-cake.png",
  PISTACHIO: "/images/intro/pistachio-cake.png",
  CHOCOLATE: "/images/intro/choco-cake.png",
};

export const colorMapping: { [key: string]: string } = {
  "부드러운 스트로베리": "STRAWBERRY",
  "상큼한 레몬": "LEMON",
  "깔끔한 녹차": "GREEN_TEA",
  "유쾌한 티라미수": "TIRAMISU",
  "순백의 생크림": "CREAM",
  "조화로운 블루베리": "BLUEBERRY",
  "신중한 피스타치오": "PISTACHIO",
  "논리적인 초코": "CHOCOLATE",
};

// 케이크 이름과 이미지 매핑
export const cakeMapping: { [key: string]: { name: string; image: string } } = {
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
