import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1, h2, h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
  }
`
