import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;

    color: ${({theme}) => theme.colors["base-text"]};
    background-color: ${({theme}) => theme.colors["base-background"]};
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.blue};

    &:hover {
      text-decoration: underline;
      transition: text-decoration 0.2s;
    }
  }

  input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
  }

  .container {
    width: 100%;
    max-width: 864px;
    padding: 1rem;
    margin: 0 auto;
  }
`
