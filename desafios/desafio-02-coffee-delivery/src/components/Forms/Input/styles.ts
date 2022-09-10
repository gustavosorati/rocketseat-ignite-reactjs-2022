import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
  display: flex;
`

export const InputComponent = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.875rem;
  color: ${({ theme }) => theme.baseLabel};

  background-color: ${({ theme }) => theme.baseInput};
  border: 1px solid ${({ theme }) => theme.baseButton};
  border-radius: 6px;

  outline: none;

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.yellowDark};
    color: ${({ theme }) => theme.baseText};

    transition: 0.4s;
  }

  &.error {
    border-color: #ff3333;
  }
`

export const OptionalText = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);

  color: ${({ theme }) => theme.baseLabel};
  font-size: 0.75rem;
`
