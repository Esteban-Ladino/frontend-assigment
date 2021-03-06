import { Article, Figure, Actions, Details } from './styles'
import { FiStar, FiEye, FiMessageSquare } from 'react-icons/fi'
import articleImg from '@images/articleImg.jpg'

export const Card = () => {
  return (
    <Article>
      <Figure>
        <img src={articleImg} alt='' />
        <span>noticia</span>
      </Figure>
      <Details>
        <div>
          <h4>Lorem ipson dolor sit amet</h4>
          <small>Por: Lorem Impsum Dolor</small>
        </div>
        <Actions>
          <a href='#'><FiStar size='24' /> 50</a>
          <a href='#'><FiMessageSquare size='24' /> 40</a>
          <a href='#'><FiEye size='24' /> 75</a>
        </Actions>
      </Details>
    </Article>
  )
}
