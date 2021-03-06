import { Article, Figure, Actions, Details } from './styles'
import { FiStar, FiEye, FiMessageSquare } from 'react-icons/fi'
import articleImg from '@images/articleImg.jpg'

export const Card = (props) => {
  const {
    cover = articleImg,
    category = 'noticia',
    title = 'Lorem ipson dolor sit amet',
    author = 'Lorem Impsum Dolor',
    stars = '50',
    comments = '50',
    views = '50',
    content
  } = props

  return (
    <Article>
      <Figure>
        {!content && <img src={cover} />}
        {content && <div dangerouslySetInnerHTML={{ __html: content.match(/<img.*\/>/)[0] }} />}
        <span>{category}</span>
      </Figure>
      <Details>
        <div>
          <h4>{title}</h4>
          <small>Por: {author}</small>
        </div>
        <Actions>
          <a href='#'><FiStar size='24' /> {stars}</a>
          <a href='#'><FiMessageSquare size='24' /> {comments}</a>
          <a href='#'><FiEye size='24' /> {views}</a>
        </Actions>
      </Details>
    </Article>
  )
}
