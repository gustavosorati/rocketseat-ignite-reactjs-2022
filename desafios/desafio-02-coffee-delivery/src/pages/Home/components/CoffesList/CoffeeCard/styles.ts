import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 1rem;

  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.baseCard};
  border-radius: 6px 36px;
`

export const Image = styled.img`
  width: 7.5rem;
  height: 7.5rem;

  margin-top: -25px;
`

export const Attributes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;

  span {
    background-color: ${(props) => props.theme.yellowLight};
    padding: 0.25rem 0.5rem;
    border-radius: 999px;

    text-transform: uppercase;
    color: ${(props) => props.theme.yellowDark};
    font-weight: 700;
    font-size: 0.625rem;
  }
`

export const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 0 1rem;

  strong {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseSubTitle};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseLabel};
    text-align: center;
  }
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem 1rem 1rem;
`

export const Price = styled.div`
  color: ${(props) => props.theme.baseText};

  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.5rem;
  padding: 0 0.5rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    margin-right: 5px;
    font-weight: 400;
  }
`

export const BtnAddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  background-color: ${(props) => props.theme.purpleDark};
  border-radius: 6px;
  border: none;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }

  svg {
    fill: white;

    path {
      fill: white;
      stroke: white;
    }
  }
`
