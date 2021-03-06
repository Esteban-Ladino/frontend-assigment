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
`

export const Section = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 2px;
  overflow: hidden;
  height: fit-content;
  border-radius: 6px;
`
