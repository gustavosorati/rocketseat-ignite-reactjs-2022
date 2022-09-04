import styled from 'styled-components'

export const SuccessContainer = styled.div`
  max-width: 1140px;
  width: 100%;

  margin: 0 auto;
  padding: 2rem;
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  color: ${({ theme }) => theme.yellowDark};
`

export const Text = styled.p`
  color: ${({ theme }) => theme.baseSubTitle};
  font-size: 1.25rem;

  margin-bottom: 3rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`

export const Card = styled.div`
  border: 1px solid transparent;
  background: linear-gradient(102.89deg, #fff 2.61%, #fff 98.76%) padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;
  border-radius: 50em;
  border-radius: 6px 36px;

  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 292px;

  padding: 2rem;
`
