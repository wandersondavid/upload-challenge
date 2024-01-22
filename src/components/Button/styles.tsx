import styled from "styled-components";

type ButtonStyledProps = {
  color?: "primary" | "secondary" | "default";
  variant?: "contained" | "outlined";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "0.5rem 1rem";
      case "medium":
        return "0.75rem 1.5rem";
      case "large":
        return "1.5rem 2rem";
      default:
        return "0.75rem 1.5rem";
    }
  }};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 4rem;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  color: ${(props) => {
    switch (props.color) {
      case "primary":
        return "#fff";
      case "secondary":
        return "#1976B9";
      default:
        return "#fff";
    }
  }};
  background: ${(props) => {
    switch (props.variant) {
      case "contained":
        switch (props.color) {
          case "primary":
            return "#1976B9";
          case "secondary":
            return "#fff";
          default:
            return "#1976B9";
        }
      case "outlined":
        return "transparent";
      default:
        return "#1976B9";
    }
  }};
  border: ${(props) => {
    switch (props.variant) {
      case "contained":
        return "none";
      case "outlined":
        switch (props.color) {
          case "primary":
            return "1px solid #fff";
          case "secondary":
            return "1px solid #1976B9";
          default:
            return "1px solid #fff";
        }
      default:
        return "none";
    }
  }};
  gap: 0.4rem;
`;
