import styled from 'styled-components'

export const CompleteOrderFormContainer = styled.div`
  width: 40rem;
`

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.baseSubTitle};

  margin-bottom: 1rem;
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

export const CheckoutAddresFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.65rem;
  gap: 0.5rem;
  margin: 1rem 0;

  .rua {
    grid-column: span 3;
  }

  .complemento {
    grid-column: span 2;
  }
`

export const CheckoutPaymentFormContainer = styled.div`
  margin: 1rem 0;
`

export const PaymentCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  /* background-color: ${({ theme }) => theme.baseButton}; */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 6px;
  height: 51px;

  input {
    appearance: none;
    visibility: hidden;
  }

  label {
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.baseText};
    font-size: 0.75rem;
    text-transform: uppercase;

    cursor: pointer;
  }

  &:hover {
    background-color: ${({ theme }) => theme.baseHover};
    transition: 0.4s;
  }
`

export const ErrorText = styled.p`
  grid-column: span 3;
  font-size: 0.875rem;
  color: #ff0000;
`
