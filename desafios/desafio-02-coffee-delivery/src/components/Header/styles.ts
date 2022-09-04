import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  display: flex;

  padding: 2rem 6rem;

  > img {
    width: 85px;
    height: 40px;
  }
`

export const Wrapper = styled.div`
  max-width: 1140px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 auto;
  padding: 0 2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`

export const LocalityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 0.5rem;
  border-radius: 6px;
  cursor: inherit;
  background-color: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purpleDark};

  font-size: 0.875rem;
`

export const BtnBag = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellowLight};

  padding: 0.5rem;
  cursor: pointer;
`

export const AmountProducts = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.yellowDark};
  border-radius: 50%;
  width: 20px;
  height: 20px;

  color: ${(props) => props.theme.white};
  font-size: 0.725rem;
  font-weight: 700;
`
