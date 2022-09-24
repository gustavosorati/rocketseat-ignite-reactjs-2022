import styled from "styled-components";

export const PostContentContaienr = styled.div`
  width: 100%;

  p {
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
  }

  pre {
    background-color: ${({theme}) => theme.colors["base-post"]};
    padding: 1rem;
    border-radius: 4px;
  }

`
