import styled, { createGlobalStyle } from 'styled-components'

export const ModalStyles = createGlobalStyle`
  & .ModalMenu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    outline: none;
    margin: auto;
    width: 320px;
    height: 100%;
    border: none;
    background: white;
  }

  & .OverlayMenu {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #5050507d;
  }
`

export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  & div {
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #EEEEEE;
    background-color: #FAFAFA;
    & figure img {
      margin-right: 20px;
      width: 70px;
      height: 70px;
      border: 2px solid white;
      border-radius: 50%;
    }
  }
  & a {
    position: relative;
    display: flex;
    align-items: center;
    margin: 15px;
    padding: 8px;
    width: 100%;
    cursor: pointer;
    & svg {
      margin-right: 15px;
    }
    transition: 0.3s;
    & span {
      position: absolute;
      top: 3px;
      left: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colorGreen};
      font-size: 11px;
    }
    & :hover {
      border-radius: 5px;
      background: #d1e3f04d;
    }
  }
`
