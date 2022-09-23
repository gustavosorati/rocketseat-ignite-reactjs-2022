import styled from "styled-components"

export const PerfilContainer = styled.div`
  margin-top: -200px;
  min-height: 212px;
  background-color: ${({theme}) => theme.colors["base-profile"]};
  padding: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  margin-bottom: 5rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  height: 148px;
`

export const Top = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  strong {
    font-size: ${({theme}) => theme.fonts["4xl"]};
    color: ${({theme}) => theme.colors["base-title"]};
  }

  a {
    color: ${({theme}) => theme.colors.blue};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    text-transform: uppercase;
    font-size: .675rem;
    font-weight: 700;
  }
`;

export const Middle = styled.p`
  color: ${({theme}) => theme.colors["base-text"]};
  font-size: ${({theme}) => theme.fonts.xl};;
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
