import Logo from '@images/Logo.png'
import { StyledFooter } from './styles'

export const Footer = () => {
  return (
    <StyledFooter>
      <figure>
        <img src={Logo} alt='DocRed Logo' />
      </figure>
      <ul>
        <li><a href='#'>Preguntas frecuentes</a></li>
        <li><a href='#'>Contáctanos</a></li>
        <li><a href='#'>Información</a></li>
        <li>DocRed © 2019. Todos los derechos reservados</li>
      </ul>
    </StyledFooter>
  )
}
