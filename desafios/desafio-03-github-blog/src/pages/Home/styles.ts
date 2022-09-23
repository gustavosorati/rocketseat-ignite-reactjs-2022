import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
`

export const PostListContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 400px);
  gap: 2rem;

  .spinnerContainer {
    grid-column: span 2;
    margin-top: 6rem;
  }
`
