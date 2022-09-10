import styled from 'styled-components'

export const CompleteOrderFormContainer = styled.section`
  width: 40rem;
`

export const CheckoutAddresFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  gap: 1rem;
  margin: 1rem 0;

  .rua {
    grid-column: span 3;
  }

  .complemento {
    grid-column: span 2;
  }
`

export const FormSectionContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.baseCard};
  padding: 2.5rem;

  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 1rem 0;
`

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.baseSubTitle};

  margin-bottom: 1rem;
`

export const CheckoutPaymentFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`

export const PaymentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  gap: 8px;
  background-color: ${({ theme }) => theme.baseButton};

  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid transparent;

  input {
    visibility: hidden;
  }

  &:hover {
    background-color: ${({ theme }) => theme.purpleLight};
    border-color: ${({ theme }) => theme.purple};
  }

  p {
    color: ${({ theme }) => theme.baseText};
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
  }
`
