import { Bank, CreditCard } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { CheckoutPaymentFormContainer, PaymentCard } from './styles'

export function CheckoutPaymentForm() {
  const theme = useTheme()
  const { register } = useForm()

  return (
    <CheckoutPaymentFormContainer>
      <PaymentCard {...register('paymentMethod')}>
        <CreditCard weight="regular" size={22} color={theme.purple} />
        Cartão de crédito
      </PaymentCard>

      <PaymentCard {...register('paymentMethod')}>
        <Bank weight="regular" size={22} color={theme.purple} />
        Cartão de Débito
      </PaymentCard>

      <PaymentCard {...register('paymentMethod')}>
        <CreditCard weight="regular" size={22} color={theme.purple} />
        Cartão de crédito
      </PaymentCard>
    </CheckoutPaymentFormContainer>
  )
}
