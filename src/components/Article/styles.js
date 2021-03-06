import styled from 'styled-components'

export const StyledArticle = styled.article`
  padding: 30px;
  width: 1000px;
  margin-right: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colorWhite};
  & p {
    margin-bottom: 35px;
    font-size: 17.5px;
    line-height: 28px;
  }
  @media (max-width: 1024px) {
    margin: 0;
    width: auto;
  }
  @media (max-width: 768px) {
    & p {
      font-size: 16px;
    }
  }
`

export const Hero = styled.figure`
  position: relative;
  margin-bottom: 35px;
  height: 560px;
  & img {
    width: 100%;
    height: 100%;
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
  @media (max-width: 1024px) {
    height: auto;
  }
`

export const Title = styled.div`
  display: flex;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colorBlack};
  & h3 {
    margin-right: 60px;
  }
`

export const Button = styled.button`
  width: 85px;
  height: 30px;
  border-radius: 12px 0 12px;
  background-color: ${({ theme }) => theme.colorGreen};
  color: white;
`

export const Profile = styled.div`
  display: flex;
  margin-bottom: 35px;
  & figure img {
    margin-right: 12px;
    width: 30px;
    height: 30px;
  }
  & div {
    & h5 {
      font-size: 15px;
    }
    & small {
      color: ${({ theme }) => theme.colorGray};
    }
  }
`

export const Tags = styled.ul`
  display: flex;
  margin-bottom: 35px;
  text-align: center;

  & li {
    margin-right: 15px;
    padding: 8px 15px;
    width: fit-content;
    border-radius: 4px;
    background: #f4f8fc;
    font-size: 14px;
    color: ${({ theme }) => theme.highlightBlue};
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  width: 590px;
  height: 45px;
  border: 2px solid ${({ theme }) => theme.highlightBlue};
  border-radius: 14px 0;
  & a {
    display: inherit;
    align-items: center;
    font-size: 13px;
    & svg {
      margin-right: 5px;
      color: ${({ theme }) => theme.highlightBlue};
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    min-width: 283px;
  }
`
