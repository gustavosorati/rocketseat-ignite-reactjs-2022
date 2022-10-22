import { keyframes, styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  maxWidth: '1360px',
  margin: '0 auto',
  minHeight: 656,
});

// Animações
const up = keyframes({
  '0%': {
    transform: 'translateY(110%)',
    opacity: 0
  },
  '100%': {
    transform: 'translateY(0%)',
    opacity: 1
  }
})

const down = keyframes({
  '0%': {
    transform: 'translateY(0%)',
    opacity: 0
  },
  '100%': {
    transform: 'translateY(110%)',
    opacity: 1
  }
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 696,

  img: {
    objectFit: 'cover'
  },

  variants: {
    isVisible: {
      true: {
        footer: {
          animation: `${up} 300ms ease forwards`
        }
      },
      false: {
        footer: {
          animation: `${down} 200ms ease forwards`
        }
      }
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

  backgroundColor: '#202024',

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
  width: '136px',
  height: '100%',
  top: 0,

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
        background: `linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)`,
        transform: 'matrix(-1, 0, 0, 1, 0, 0)',
        left: '0'
      },
      false: {
        background: `linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)`,
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

