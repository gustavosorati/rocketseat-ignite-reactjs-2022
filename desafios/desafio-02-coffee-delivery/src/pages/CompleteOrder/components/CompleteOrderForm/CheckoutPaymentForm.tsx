import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { CheckoutPaymentFormContainer, ErrorText, PaymentCard } from './styles'

export function CheckoutPaymentForm() {
  const theme = useTheme()
  const { register, formState } = useFormContext()

  const { errors } = formState as any

  return (
    <CheckoutPaymentFormContainer>
      <PaymentCard>
        <input
          id="credit"
          type="radio"
          {...register('paymentMethod')}
          value="credit"
        />
        <label htmlFor="credit">
          <CreditCard weight="regular" size={18} color={theme.purple} />
          Cartão de crédito
        </label>
      </PaymentCard>

      <PaymentCard>
        <input
          id="debit"
          type="radio"
          {...register('paymentMethod')}
          value="debit"
        />
        <label htmlFor="debit">
          <Bank weight="regular" size={18} color={theme.purple} />
          Cartão de Débito
        </label>
      </PaymentCard>

      <PaymentCard>
        <input
          id="money"
          type="radio"
          {...register('paymentMethod')}
          value="money"
        />
        <label htmlFor="money">
          <Money weight="regular" size={18} color={theme.purple} />
          Dinheiro
        </label>
      </PaymentCard>

      {errors.paymentMethod && (
        <ErrorText>{errors.paymentMethod?.message}</ErrorText>
      )}
      {/* <button type="submit">d</button> */}
    </CheckoutPaymentFormContainer>
  )
}
