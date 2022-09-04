import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
`

export const Input = styled.input`
  display: flex;
  align-items: center;
  width: 100%;

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
  }
`

export const OptionalText = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);

  color: 1px solid ${({ theme }) => theme.baseLabel};
  font-size: 0.75rem;
  text-transform: uppercase;
`
