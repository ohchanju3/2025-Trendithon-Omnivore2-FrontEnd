import styled from "styled-components";

export const DigitalModalWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DigitalModalImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    cursor: "pointer";
    object-fit: cover;
  }
`;

export const DigitalModalTextarea = styled.textarea`
  max-width: 300px;
  width: 80%;
  height: 180px;
  background-color: #f0ecf5;
  border-radius: 20px;
  padding: 1rem;
  box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  line-height: 22px;
  min-width: 250px;
  margin: 20px;
`;
