import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  position: relative;

  > section {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`

export const PerfilContainer = styled.div`
  margin-top: -200px;
  min-height: 212px;
  background-color: ${({theme}) => theme.colors["base-profile"]};
  padding: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-bottom: 5rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const About = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 148px;


  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: ${({theme}) => theme.fonts["4xl"]};
      color: ${({theme}) => theme.colors["base-title"]};
    }

    p {
      color: ${({theme}) => theme.colors["base-text"]};
    }
  }

    footer {
    display: flex;
    gap: 1rem;

      span {
        display: flex;
        align-items: center;
        gap: .5rem;
      }
    }

`
