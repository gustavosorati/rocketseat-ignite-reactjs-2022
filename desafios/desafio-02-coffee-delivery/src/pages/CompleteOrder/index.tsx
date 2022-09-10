import { FormProvider, useForm } from 'react-hook-form'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CheckoutCoffeesAmount } from './components/CheckoutCoffeesAmount'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { CompleteOrderContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const checkoutValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o endereço'),
  number: zod.number().min(1, 'Informe o número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe o estado'),
  paymentMethod: zod.enum(['credit', 'debit', 'money'], {
    errorMap: (issue, ctx) => {
      return { message: 'Você deve selecionar um método de pagamento' }
    },
  }),
})

type ConfirmOrderData = zod.infer<typeof checkoutValidationSchema>

export function CompleteOrder() {
  const { cleanCart } = useContext(CartContext)
  const confirmOrderForm = useForm<ConfirmOrderData>({
    resolver: zodResolver(checkoutValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })
  const navigate = useNavigate()

  const { handleSubmit, reset } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderData) {
    navigate('success', { replace: true })
    cleanCart()
    reset()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <CheckoutCoffeesAmount />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
