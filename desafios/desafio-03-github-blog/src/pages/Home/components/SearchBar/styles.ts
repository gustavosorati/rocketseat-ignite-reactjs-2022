import styled from "styled-components";


export const SearchBarContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  strong {
    color: ${({theme}) => theme.colors["base-subtitle"]};
    font-size: ${({theme}) => theme.fonts["2xl"]};
    margin-bottom: 12px;
  }

  span {
    position: absolute;
    top: 5px;
    right: 0;

    color: ${({theme}) => theme.colors["base-span"]};
    font-size: ${({theme}) => theme.fonts["medium"]};
  }

  input {
    outline: none;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors["base-background"]};
    border: 2px solid ${({theme}) => theme.colors["base-border"]};
    border-radius: 6px;

    color: ${({theme}) => theme.colors["base-text"]};

    &::placeholder  {
      color: ${({theme}) => theme.colors["base-label"]};
    }


    &:hover, &:focus {
      border-color: ${({theme}) => theme.colors.blue};
    }
  }

`
