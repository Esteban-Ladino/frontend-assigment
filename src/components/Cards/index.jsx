import { Card } from '../Card'
import { Container, Section } from './styles'

export const Cards = () => {
  return (
    <Container>
      <h5>Noticias relacionadas <div>.</div></h5>
      <Section>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Section>
    </Container>
  )
}
