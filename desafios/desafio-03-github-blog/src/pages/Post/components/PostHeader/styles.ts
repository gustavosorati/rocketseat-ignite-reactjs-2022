import styled from "styled-components"

export const PerfilContainer = styled.div`
  margin-top: -200px;
  min-height: 168px;
  background-color: ${({theme}) => theme.colors["base-profile"]};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    strong {
      font-size: ${({theme}) => theme.fonts["4xl"]};
      color: ${({theme}) => theme.colors["base-title"]};
    }

    a, button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;

      color: ${({theme}) => theme.colors.blue};
      text-transform: uppercase;
      font-size: .675rem;
      font-weight: 700;
    }

    a:hover {
      text-decoration: underline;
    }

    button {
      background-color: transparent;
      border: 0;
    }
  }
`

export const Title = styled.p`
  color: ${({theme}) => theme.colors["base-title"]};
  font-size: ${({theme}) => theme.fonts["4xl"]};

  margin-bottom: .5rem;
`;

export const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  gap: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: .5rem;
    color: ${({theme}) => theme.colors["base-subtitle"]};

    svg {
      color: ${({theme}) => theme.colors["base-label"]};
    }
  }
`;
