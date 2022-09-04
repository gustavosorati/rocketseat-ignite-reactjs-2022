import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-bottom: 5rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;

    img {
      display: none;
    }
  }
`

export const HeroContent = styled.div`
  margin-bottom: 46px;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme.baseTitle};

    margin: 1rem 0;
  }

  p {
    color: ${(props) => props.theme.baseSubTitle};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
  }
`

export const ListOfBenefits = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }

  li {
    list-style: none;
  }
`
