import { styled } from "..";


export const HomeContainer = styled('main', {
  display: 'flex',
  // gap: '3rem', keen-slider se perde no gap

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
});

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  // padding: '0.25rem' keen-slider,
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 584,

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
});

export const Footer = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '2rem',

  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
});

export const FooterLeft = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: "4px",


  strong: {
    fontSize: '$lg',
    color: "$gray100"
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300'
  },
});

export const SliderControl = styled('div', {
  position: 'absolute',
  width: '100px',
  height: '100vh',
  top: 0,

  background: `linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)`,


  display: "flex",
  alignItems: "center",
  justifyContent: "center",


  variants: {
    disabled: {
      true: {
        opacity: '0'
      },
      false: {
        opacity: '1'
      }
    },
    left: {
      true: {
        left: 0
      },
      false: {
        right: 0
      }
    }
  },

  button : {
    background: 'transparent',
    border: 'none',

    cursor: "pointer",
  }
});

