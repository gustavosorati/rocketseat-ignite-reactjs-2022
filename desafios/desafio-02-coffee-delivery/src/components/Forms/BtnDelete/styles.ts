import styled from 'styled-components'

export const BtnDeleteContainer = styled.button.attrs(({ type }) => ({
  type: type || 'button',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  padding: 8px;
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.baseButton};
  color: ${({ theme }) => theme.baseText};
  font-size: 0.65rem;
  text-transform: uppercase;

  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.baseHover};
  }
`
