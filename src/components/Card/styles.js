import styled from 'styled-components'

export const Article = styled.article`
  display: flex;
  padding: 20px;
  width: 335px;
  background: ${({ theme }) => theme.colorWhite};
`

export const Figure = styled.figure`
  position: relative;
  margin-right: 12px;
  & img {
    width: 127px;
    height: 127px;
    border-radius: 6px;
    object-fit: cover;
  }
  & span {
    position: absolute;
    top: 25px;
    left: 0;
    padding: 3px 16px;
    border-radius: 0 8px 8px 0;
    background-color: #2380c4;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: white;
}
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & div:first-child {
    margin-bottom: 6px;
    padding: 6px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colorGray};
    & small {
      color: ${({ theme }) => theme.colorGray};
    }
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  color: ${({ theme }) => theme.colorGray};
  & a {
    display: inherit;
    align-items: center;
    font-size: 13px;
    & svg {
      margin-right: 3px;
      color: ${({ theme }) => theme.highlightBlue};
    }
    & :last-child svg {
      color: ${({ theme }) => theme.colorGray};
    }
  }
`
