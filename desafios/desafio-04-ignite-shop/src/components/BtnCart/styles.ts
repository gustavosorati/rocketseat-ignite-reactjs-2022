import { ButtonHTMLAttributes, ComponentType } from "react";
import { styled } from "../../styles";

// type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// type StyledContainerType = ComponentType<ButtonProps>

export const BtnCartContainer = styled('button', {
  position: "relative",
  border: "none",
  borderRadius: "6px",
  padding: '12px',
  cursor: "pointer",

  "span": {
    position: "absolute",
    top: -12,
    right: -12,
    border: "3px solid $gray900",
    borderRadius: "50%",
    backgroundColor: "$green500",
    width: "24px",
    height: "24px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontWeight: 700,
    fontSize: ".875rem",
    color: "$white"
  },

  variants: {
    typeButton: {
      cart: {
        backgroundColor: "#202024",

        "&:hover svg path": {
          stroke: "#c4c4cc"
        },
      },
      button: {
        backgroundColor: "$green500",

        "svg path": {
          stroke: "$white"
        },

        "&:hover svg path": {
          stroke: "$white"
        },
      }
    }
  }
});
// <{}, StyledContainerType>;

export const Wrapper = styled('div', {
});
