import styled from 'styled-components'

export const StyledMain = styled.main`
  display: flex;
  justify-content: space-evenly;
  margin: 80px auto;
  padding: 0 70px;
  @media (max-width: 1440px) {
    padding: 0 20px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    width: auto;
  }
  @media (max-width: 425px) {
    padding: 0;
  }
`
