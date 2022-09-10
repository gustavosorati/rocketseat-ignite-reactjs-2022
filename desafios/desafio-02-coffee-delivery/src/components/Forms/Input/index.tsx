import React, { InputHTMLAttributes } from 'react'
import { Input, InputStyledContainer, OptionalText } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  opcional?: string
  error?: string
}

// eslint-disable-next-line react/display-name
export const InputStyled = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, opcional, placeholder, ...props }, ref) => {
    return (
      <InputStyledContainer>
        <Input type="text" placeholder={placeholder} ref={ref} {...props} />
        {opcional && <OptionalText>{opcional}</OptionalText>}
        {error && <p>{error}</p>}
      </InputStyledContainer>
    )
  },
)
