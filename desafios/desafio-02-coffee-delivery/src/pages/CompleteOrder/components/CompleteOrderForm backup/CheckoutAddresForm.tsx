import { useForm } from 'react-hook-form'

import { InputStyled } from '../../../../components/Forms/Input'
import { CheckoutAddresFormContainer } from './styles'

export function CheckoutAddresForm() {
  const { register, formState } = useForm()
  const { errors } = formState

  return (
    <CheckoutAddresFormContainer>
      <InputStyled
        placeholder="cep"
        {...register('cep')}
        error={errors.cep.message}
      />

      <InputStyled
        placeholder="Rua"
        opcional="Opcional"
        className="rua"
        {...register('street')}
      />
      <InputStyled
        placeholder="Número"
        {...register('number', { valueAsNumber: true })}
      />
      <InputStyled
        placeholder="Complemento"
        className="complemento"
        {...register('complement')}
      />
      <InputStyled placeholder="Bairro" {...register('district')} />
      <InputStyled placeholder="Cidade" {...register('city')} />
      <InputStyled placeholder="UF" {...register('state')} />
    </CheckoutAddresFormContainer>
  )
}
