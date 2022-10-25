import { keyframes, styled } from "../../styles";

// animations
const toLeft = keyframes({
  "0%": { right: '-480px' },
  '100%': { right: '0' },
})

const toRight = keyframes({
  "0%": { right: '0' },
  '100%': { right: '-480px' },
})

export const CartContainer = styled('div', {
  overflow: "hidden",
  position: 'fixed',
  top: '0',

  display: "flex",
  flexDirection: "column",
  padding: '40px',

  width: "480px",
  minHeight: "100vh",
  backgroundColor: "$gray800",

  transform: 'all 2s',

  variants: {
    isOpen: {
      'true': {
        animation: `${toLeft} 200ms forwards`,
        opacity: 1
      },
      'false': {
        animation: `${toRight} 200ms forwards`,
        opacity: 0,

        transition: "opacity 500ms"
      },
    }
  },

  "> strong": {
    display: 'flex',
    marginTop: "28px",
    marginBottom: "32px",
    color: "$gray100",
    fontSize: "$lg",
  },
});

export const Content = styled('div', {
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
});

export const Product = styled('div', {
  display: "flex",
  gap: "20px",
  marginBottom: "16px",

  ".left": {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    height: "93px"
  },

  ".right": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "3px",

    "strong": {
      fontSize: "$md",
      fontWeight: "400",
      color: "$gray300"
    },

    "span": {
      marginTop: "5px",
      fontSize: "$md",
      fontWeight: "700",
      color: "$gray100"
    },

    "button": {
      marginTop: "auto",
      background: "transparent",
      border: "none",
      color: "$green500",
      fontWeight: 700,
      fontSize: "$md",

      cursor: "pointer"
    },
  },
});

export const Footer = styled("footer", {
  alignContent: "flex-end",
  justifyItems: "flex-end",

  ".total": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: '7px'
  },

  button: {
    marginTop: "57px",
    width: "100%",
    fontWeight: 700,
    backgroundColor: "$green500",
    border: "1px solid $green500",
    borderRadius: "6px",
    padding: "20px",
    color: "$gray100",
    fontSize: "$lg",
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: "$green300",
      border: "1px solid $green300",
    }
  }
});


export const BtnClose = styled("button", {
  background: 'transparent',
  border: 'none',

  position: "absolute",
  top: "28px",
  right: "28px",

  cursor: "pointer"
});
