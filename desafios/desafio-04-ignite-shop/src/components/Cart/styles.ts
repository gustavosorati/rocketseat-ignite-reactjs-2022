import { keyframes, styled } from "../../styles";

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
  position: 'absolute',
  top: '0',
  padding: "48px",

  width: "480px",
  minHeight: "100vh",
  height: "100%",
  backgroundColor: "$gray800",
  opacity: 0,

  "> strong": {
    display: "block",
    marginTop: "28px",
    marginBottom: "32px",
    color: "$gray100",
    fontSize: "$lg",
  },

  transform: 'all 2s',

  variants: {
    isOpen: {
      'true': {
        animation: `${toLeft} 200ms forwards`,
        opacity: 1
      },
      'false': {
        animation: `${toRight} 200ms forwards`,
      },
    }
  }
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: "90%",
});

export const Product = styled('div', {
  display: "flex",
  gap: "20px",

  ".left": {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    minWidth: "100px",
    maxHeight: "93px"
  },

  ".right": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "3px"
  },

  ".right strong": {
    fontSize: "$md",
    fontWeight: "400",
    color: "$gray300"
  },

  ".right span": {
    marginTop: "5px",
    fontSize: "$md",
    fontWeight: "700",
    color: "$gray100"
  },

  ".right button": {
    marginTop: "auto",
    background: "transparent",
    border: "none",
    color: "$green500",
    fontWeight: 700,
    fontSize: "$md",

    cursor: "pointer"
  },
});

export const Footer = styled("footer", {
  marginTop: "100%",

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
