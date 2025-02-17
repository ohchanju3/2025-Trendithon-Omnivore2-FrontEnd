import styled, { css } from "styled-components";

import { SchemeType } from "src/lib/types/style";

interface ButtonWrapperProps {
  $isDisabled?: boolean;
  $width?: string;
  $scheme: SchemeType;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  gap: 0.5rem;

  img {
    object-fit: contain;
    width: 25%;
  }

  ${({ $width }) => {
    return css`
      width: ${$width};
    `;
  }}

  ${({ $scheme, theme }) => {
    if (!theme.scheme[$scheme]) return "";

    const cssKeyMap: Record<string, string> = {
      fontColor: "color",
      shadow: "box-shadow",
      radius: "border-radius",
      fontSize: "font-size",
      lineHeight: "line-height",
    };

    return css`
      ${Object.entries(theme.scheme[$scheme])
        .map(([key, value]) => `${cssKeyMap[key] || key}: ${value};`)
        .join("\n")}
    `;
  }}
`;
