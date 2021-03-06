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

  @media (max-width: 1024px) {
    grid-template-columns: auto;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
`

export const Input = styled.form`
  display: flex;
  width: 340px;
  height: 35px;
  border-radius: 13px 0 13px 0;
  background: white;
  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100%;
    background-color: transparent;
    cursor: pointer;
    & svg {
      color: ${({ theme }) => theme.colorGreen};
    }
  }
  & input {
    outline: none;
    padding-left: 10px;
    width: 80%;
    border: none;
    border-left: 2px solid ${({ theme }) => theme.colorBlue};
    font-family: Roboto, sans-serif;
    font-size: 15px;
    & ::placeholder {
      font-size: 15px;
      color: ${({ theme }) => theme.colorGray};
    }
  }

  @media (max-width: 1024px) {
    width: 300px;
    height: 32px;
    justify-self: center;
  }
`

export const Menu = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 40px;
  padding: 5px;
  width: 90px;
  height: 40px;
  cursor: pointer;
  font-size: 15px;
  transition: 0.3s;
  & :hover {
    border-radius: 5px;
    background: #d1e3f04d;
  }

  @media (max-width: 1024px) {
    & svg {
      width: 25px;
    }
  }
`

export const BurguerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

export const UserSection = styled.div`
  display: flex;
  grid-column-start: 6;
  justify-content: space-around;
  align-items: center;
  padding-left: 30px;
  width: 230px;
  height: 55px;
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
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colorGreen};
      font-size: 11px;
    }
  }
  & a:nth-child(2) {
    display: flex;
    align-items: center;
    padding: 5px;
    & img {
      width: 35px;
      height: 35px;
      border: 2px solid white;
      border-radius: 50%;
    }
    transition: 0.3s;
    & :hover {
      border-radius: 5px;
      background: #d1e3f04d;
    }
  }
  @media (max-width: 1024px) {
    & svg {
      width: 25px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`
