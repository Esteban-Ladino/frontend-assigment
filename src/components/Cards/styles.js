import styled from 'styled-components'

export const Container = styled.aside`
  & h5 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-size: 14px;
    color: ${({ theme }) => theme.colorBlue};
    & div {
      width: 150px;
      height: 2px;
      background: ${({ theme }) => theme.highlightBlue};
      color: transparent;
    }
  }
  @media (max-width: 1024px) {
    margin-top: 30px;
    & h5 {
      padding-left: 20px;
      font-size: 18px;
      & div {
        width: 50%;
        height: 3px;
        background: #66A6D6;
        color: transparent;
      }
    }
  }
`

export const Section = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 2px;
  overflow: hidden;
  height: fit-content;
  border-radius: 6px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, 335px);
    grid-gap: 15px;
    justify-content: center;
    justify-items: center;
  }
`
