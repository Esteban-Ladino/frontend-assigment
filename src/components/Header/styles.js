import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  height: 81px;
  background: ${({ theme }) => theme.colorBlue};
  color: white;
  & figure {
    justify-self: center;
    & img {
      height: 65px;
    }
  }
`

export const Input = styled.form`
  display: flex;
  height: 35px;
  width: 340px;
  background: white;
  border-radius: 13px 0 13px 0;
  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 40px;
    background-color: transparent;
    cursor: pointer;
    & svg {
      color: ${({ theme }) => theme.colorGreen};
    }
  }
  & input {
    padding-left: 10px;
    width: 80%;
    border: none;
    border-left: 2px solid ${({ theme }) => theme.colorBlue};
    outline: none;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    & ::placeholder {
      font-size: 15px;
      color: ${({ theme }) => theme.colorGray};
    }
  }
`

export const Menu = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90px;
  height: 40px;
  margin-left: 40px;
  padding: 5px;
  font-size: 15px;
  transition: 0.3s;
  cursor: pointer;
  & :hover {
    background: #d1e3f04d;
    border-radius: 5px;
  }
`

export const UserSection = styled.div`
  display: flex;
  grid-column-start: 6;
  align-items: center;
  justify-content: space-around;
  width: 230px;
  height: 55px;
  padding-left: 30px;
  border-left: 2px solid ${({ theme }) => theme.highlightBlue};
  & a {
    cursor: pointer;
  }
  & a:first-child {
    position: relative;
    & span {
      position: absolute;
      top: -5px;
      right: -5px;
      width: 17px;
      height: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colorGreen};
      border-radius: 50%;
      font-size: 11px;
    }
  }
  & a:nth-child(2) {
    display: flex;
    align-items: center;
    padding: 5px;
    & img {
      height: 35px;
      width: 35px;
      border: 2px solid white;
      border-radius: 50%;
    }
    transition: 0.3s;
    & :hover {
      background: #d1e3f04d;
      border-radius: 5px;
    }
  }
`
