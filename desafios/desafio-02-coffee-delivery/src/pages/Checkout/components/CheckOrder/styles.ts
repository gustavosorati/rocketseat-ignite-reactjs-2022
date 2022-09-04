import styled from 'styled-components'

export const CheckOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const CheckoutAddresFormContainer = styled(CheckOrderContainer)`
  display: grid;
  grid-template-columns: 0.7fr 1fr 0.3fr;
  gap: 1rem;
  margin: 1rem 0;

  .rua {
    grid-column: span 3;
  }

  .complemento {
    grid-column: span 2;
  }
`

export const CheckoutPaymentFormContainer = styled(CheckOrderContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.baseSubTitle};

  margin-bottom: 1rem;
`

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.baseCard};
  padding: 2.5rem;

  border-radius: 6px;

  display: flex;
  flex-direction: column;

  gap: 1rem;
`

export const PaymentOPT = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  gap: 8px;
  background-color: ${({ theme }) => theme.baseButton};

  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.baseHover};
  }

  p {
    color: ${({ theme }) => theme.baseText};
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
  }
`
