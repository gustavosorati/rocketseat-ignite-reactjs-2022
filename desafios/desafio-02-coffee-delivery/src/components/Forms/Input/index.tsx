import { forwardRef, InputHTMLAttributes } from 'react'
import { InputComponent, InputContainer, OptionalText } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  textOpcional?: string
  error?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { error, placeholder, className, textOpcional, ...props }: InputProps,
    ref,
  ) => {
    return (
      <InputContainer className={className}>
        <InputComponent
          className={error ? 'error' : ''}
          type="text"
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        {textOpcional && <OptionalText>{textOpcional}</OptionalText>}
        {/* {error && <span>{error}</span>} */}
      </InputContainer>
    )
  },
)
