import styled from 'styled-components'

export const InputQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  padding: 7px;

  input {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    background-color: transparent;
    border: transparent;
    outline: none;
    text-align: center;
  }
`

export const Button = styled.button.attrs(({ type }) => ({
  type: 'button',
}))`
  background-color: ${(props) => props.theme.baseButton};
  border: transparent;
  color: ${(props) => props.theme.purple};
  border-radius: 6px;
  cursor: pointer;
`
