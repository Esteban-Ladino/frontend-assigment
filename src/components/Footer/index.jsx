import Logo from '@images/Logo.png'
import { StyledFooter } from './styles'

export const Footer = () => {
  return (
    <StyledFooter>
      <figure>
        <img src={Logo} alt='DocRed Logo' />
      </figure>
      <ul>
        <li><a>Preguntas frecuentes</a></li>
        <li><a>Contáctanos</a></li>
        <li><a>Información</a></li>
        <li>DocRed © 2019. Todos los derechos reservados</li>
      </ul>
    </StyledFooter>
  )
}
