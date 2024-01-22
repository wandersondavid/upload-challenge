import React from "react";
import { ButtonStyled } from "./styles";

type ButtonProps = {
  text: string;
  onClick: () => void;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  disabled?: boolean;
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary" | "default";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  text,
  onClick,
  endIcon,
  startIcon,
  disabled = false,
  variant = "contained",
  color = "primary",
  size = "medium",
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      {...props}
      type="button"
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
    >
      {startIcon && startIcon}
      {text}
      {endIcon && endIcon}
    </ButtonStyled>
  );
};
