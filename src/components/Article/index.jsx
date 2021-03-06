import { Actions, Button, Hero, Profile, StyledArticle, Tags, Title } from './styles'
import { FiStar, FiArrowUpRight, FiMessageSquare } from 'react-icons/fi'
import CompanyProfile from '@images/CompanyProfile.png'

export const Article = (props) => {
  const {
    cover = 'https://via.placeholder.com/935x565/19bbce/19bbce/?text=docred',
    category = 'noticia',
    title = 'Lorem ipsum dolor: Volutpat consequat',
    companyPhoto = CompanyProfile,
    companyName = 'Noticias DocRed',
    time = '12 h',
    timeAgo = '17/01/18',
    readingTime = '3 min',
    tags = ['Medicina interna', 'Pediatria', 'Obstreticia'],
    content = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum dolor ac ornare dictum. Nulla sollicitudin eros ex, in condimentum lacus condimentum vel. Nullam dui eros, sagittis eget pellentesque nec, faucibus at elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur tincidunt, justo eget tristique dictum, lorem lorem ultricies enim, ac rhoncus nisl arcu ac tellus. Integer placerat ante dolor, sed tristique lectus ullamcorper sit amet. Proin porta urna ac risus faucibus, vitae viverra magna lobortis. Vivamus fringilla, ipsum sit amet facilisis tempus, sapien nisi gravida augue, vitae vehicula ipsum neque sed mi. Sed vitae ante iaculis, aliquam erat laoreet, tristique tellus. Duis sed neque risus. Mauris commodo blandit leo, non commodo nisi congue ac. Cras nec dignissim felis. Proin viverra molestie porta. Fusce a fermentum ligula. Praesent ac mauris vitae nisi aliquam convallis ac ut enim.</p><p>Pellentesque ornare dui nec tincidunt placerat. Vivamus maximus, lorem sit amet gravida tempor, diam neque pretium nunc, eu tincidunt orci ipsum non libero. Nam ac tellus ac est vestibulum eleifend. Integer fermentum luctus semper. Etiam ullamcorper fringilla nibh, a aliquam libero mollis sed. Suspendisse est nulla, auctor et erat eget, efficitur convallis dui. Integer bibendum diam quis odio mollis volutpat ut egestas risus. In efficitur, sapien nec elementum sodales, lorem quam laoreet felis, vel congue arcu felis in mi. Duis eleifend massa augue, vel faucibus ligula interdum quis. Pellentesque efficitur orci non malesuada pulvinar.</p>'
  } = props

  return (
    <StyledArticle>
      <Hero>
        <img src={cover} alt='' />
        <span>{category}</span>
      </Hero>
      <Title>
        <h3>{title}</h3>
        <Button>Guardar</Button>
      </Title>
      <Profile>
        <figure><img src={companyPhoto} alt='' /></figure>
        <div>
          <h5>{companyName}</h5>
          <small>Hace {time} &nbsp;|&nbsp; Publicado: {timeAgo} &nbsp;|&nbsp; Lectura: {readingTime}.</small>
        </div>
      </Profile>
      <Tags>
        {tags.map((tag, i) => <li key={i}>{tag}</li>)}
      </Tags>
      <div dangerouslySetInnerHTML={{ __html: content.replace(content.match(/^.*<\/a>/), '') }} />
      <Actions>
        <a href='#'><FiStar size='18' /> Destacar</a>
        <a href='#'><FiMessageSquare size='18' /> Comentar</a>
        <a href='#'><FiArrowUpRight size='18' /> Compartir</a>
      </Actions>
    </StyledArticle>
  )
}
