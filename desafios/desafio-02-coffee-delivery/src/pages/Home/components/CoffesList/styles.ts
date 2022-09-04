import styled from 'styled-components'

export const CoffesContainer = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 3rem;
  }
`

export const CoffesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: flex-start;

  gap: 3rem 2rem;

  @media (max-width: 912px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1rem;
  }

  @media (max-width: 521px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 2rem;
  }
`
