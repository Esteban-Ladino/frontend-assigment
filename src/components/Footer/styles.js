import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  height: 90px;
  background-color: ${({ theme }) => theme.colorBlue};
  & figure {
    justify-self: center;
    & img {
      width: 195px;
    }
  }
  & ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    grid-column: 2 / 7;
    color: ${({ theme }) => theme.colorWhite};
    & li:last-child {
      opacity: 0.5;
    }
  }
`
