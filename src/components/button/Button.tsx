import { SchemeType } from "src/lib/types/style";
import { ReactNode } from "react";
import { ButtonWrapper } from "./Button.styled";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: string;
  scheme?: SchemeType;
  children?: ReactNode;
}

const Button = ({
  onClick,
  width,
  scheme = "CFC3DB",
  children,

  ...props
}: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} $width={width} $scheme={scheme} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
