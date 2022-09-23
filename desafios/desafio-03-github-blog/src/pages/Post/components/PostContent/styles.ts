import styled from "styled-components";

export const PostContentContaienr = styled.div`
  width: 100%;

  p {
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
  }

  code {
    background-color: ${({theme}) => theme.colors["base-post"]};
  }

`
