import styled from 'styled-components'

export const CheckoutCoffeesAmountContainer = styled.div`
  width: 100%;
`

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.baseSubTitle};

  margin-bottom: 1rem;
`

export const CoffeListContainer = styled.div`
  background-color: ${({ theme }) => theme.baseCard};
  padding: 2.5rem;

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-bottom: 1px solid ${({ theme }) => theme.baseButton};
  padding-bottom: 2rem;

  & + & {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }

  img {
    width: 64px;
    height: 64px;
  }
`

export const ProductDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 0 8px;

  strong {
    grid-column: span 2;

    color: ${({ theme }) => theme.baseSubTitle};
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 8px;
  }
`

export const ProductPrice = styled.strong`
  color: ${({ theme }) => theme.baseText};
  align-self: flex-start;
  width: 65px;
  display: flex;
  justify-content: end;
`

export const CostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  margin-bottom: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p,
    span {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.baseText};
    }
  }
`

export const AmountPriceItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: ${({ theme }) => theme.baseSubTitle};
    font-size: 1rem;
  }
`

export const BtnConfirmOrder = styled.button`
  background-color: ${({ theme }) => theme.yellow};
  border: 0;
  border-radius: 6px;

  font-weight: 700;
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  padding: 1rem;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
  }
`
