import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  min-height: 100vh;
  overflow-y: auto;
  position: relative;
`;
