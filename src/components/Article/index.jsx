import { Actions, Button, Hero, Profile, StyledArticle, Tags, Title } from './styles'
import { FiStar, FiArrowUpRight, FiMessageSquare } from 'react-icons/fi'
import CompanyProfile from '@images/CompanyProfile.png'

export const Article = ({ title, content }) => {
  return (
    <StyledArticle>
      <Hero>
        <img src='https://via.placeholder.com/935x565/19bbce/19bbce/?text=docred' alt='' />
        <span>noticia</span>
      </Hero>
      <Title>
        <h3>Lorem ipsum dolor: Volutpat consequat</h3>
        <Button>Guardar</Button>
      </Title>
      <Profile>
        <figure><img src={CompanyProfile} alt='' /></figure>
        <div>
          <h5>Noticias DocRed</h5>
          <small>Hace 12 h &nbsp;|&nbsp; Publicado: 17/01/18 &nbsp;|&nbsp; Lectura: 3 min.</small>
        </div>
      </Profile>
      <Tags>
        <li>Medicina interna</li>
        <li>Pediatría</li>
        <li>Obstreticia</li>
      </Tags>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum dolor ac ornare dictum.
        Nulla sollicitudin eros ex, in condimentum lacus condimentum vel. Nullam dui eros, sagittis eget pellentesque nec,
        faucibus at elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur tincidunt, justo eget
        tristique dictum, lorem lorem ultricies enim, ac rhoncus nisl arcu ac tellus. Integer placerat ante dolor, sed
        tristique lectus ullamcorper sit amet. Proin porta urna ac risus faucibus, vitae viverra magna lobortis. Vivamus
        fringilla, ipsum sit amet facilisis tempus, sapien nisi gravida augue, vitae vehicula ipsum neque sed mi. Sed
        vitae ante iaculis, aliquam erat laoreet, tristique tellus. Duis sed neque risus. Mauris commodo blandit leo,
        non commodo nisi congue ac. Cras nec dignissim felis. Proin viverra molestie porta. Fusce a fermentum ligula.
        Praesent ac mauris vitae nisi aliquam convallis ac ut enim.
      </p>
      <p>Pellentesque ornare dui nec tincidunt placerat. Vivamus maximus, lorem sit amet gravida tempor, diam neque pretium
        nunc, eu tincidunt orci ipsum non libero. Nam ac tellus ac est vestibulum eleifend. Integer fermentum luctus semper.
        Etiam ullamcorper fringilla nibh, a aliquam libero mollis sed. Suspendisse est nulla, auctor et erat eget, efficitur
        convallis dui. Integer bibendum diam quis odio mollis volutpat ut egestas risus. In efficitur, sapien nec elementum
        sodales, lorem quam laoreet felis, vel congue arcu felis in mi. Duis eleifend massa augue, vel faucibus ligula
        interdum quis. Pellentesque efficitur orci non malesuada pulvinar.
      </p>
      <p>Integer ac ligula sagittis, vehicula sem a,
        tincidunt tortor. Maecenas a facilisis tellus. Cras tincidunt augue eget euismod pellentesque. Maecenas ut lacus
        pretium, facilisis sapien sed, molestie ante. Curabitur porttitor tincidunt dui, ac malesuada elit pretium vitae.
        Nunc pulvinar aliquet enim id sodales. Pellentesque nec sodales ante. Aliquam erat volutpat. Maecenas accumsan
        luctus aliquet. Suspendisse ut feugiat erat. Aliquam sodales cursus arcu eget pellentesque. Sed pellentesque est
        quis leo lacinia, ut commodo turpis volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Curabitur nec nibh ut nibh congue pretium et ac felis. Nam hendrerit leo in mi facilisis, et posuere est pulvinar.
        Nullam a ex at sapien facilisis rutrum.
      </p>
      <p>Fusce vel velit eu ligula cursus commodo. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. In sit amet sapien a arcu consequat tempor. Sed sed tincidunt nibh. Aenean accumsan ligula non tincidunt
        sollicitudin. Proin iaculis imperdiet vestibulum.
      </p>
      <p>Aliquam pharetra pulvinar lectus porttitor rutrum. Ut in
        lacinia libero, a hendrerit neque. Donec a sollicitudin mi. Aliquam et nulla laoreet, ultricies nulla ac, convallis
        mi. Vestibulum non libero interdum, fringilla leo at, maximus nibh. Curabitur fringilla in risus vitae ornare.
        Duis lectus odio, lacinia venenatis lacinia ac, efficitur nec tortor. Aliquam cursus massa massa, sed facilisis
        justo posuere non. Pellentesque non nulla mauris.
      </p>

      <Actions>
        <a href='#'><FiStar size='18' /> Destacar</a>
        <a href='#'><FiMessageSquare size='18' /> Comentar</a>
        <a href='#'><FiArrowUpRight size='18' /> Compartir</a>
      </Actions>
    </StyledArticle>
  )
}
