import { useFormContext } from 'react-hook-form'

import { InputText } from '../../../../components/Forms/Input'
import { CheckoutAddresFormContainer } from './styles'

export function CheckoutAddresForm() {
  const { register } = useFormContext()

  // const onSubmit = (data: IFormInputs) => console.log(data)

  return (
    <CheckoutAddresFormContainer>
      <InputText placeholder="cep" {...register('cep')} />
      <InputText
        placeholder="Rua"
        opcional="opcional"
        className="rua"
        {...register('street')}
      />
      <InputText placeholder="Número" {...register('number')} />
      <InputText
        placeholder="Complemento"
        className="complemento"
        {...register('complement')}
      />
      <InputText placeholder="Bairro" {...register('district')} />
      <InputText placeholder="Cidade" {...register('city')} />
      <InputText placeholder="UF" {...register('state')} />
    </CheckoutAddresFormContainer>
  )
}
