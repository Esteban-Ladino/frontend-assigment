import { Card } from '../Card'
import { Container, Section } from './styles'

export const Cards = ({ data }) => {
  return (
    <Container>
      <h5>Noticias relacionadas <div>.</div></h5>
      <Section>
        <Card {...data} />
        <Card {...data} />
        <Card {...data} />
        <Card {...data} />
        <Card {...data} />
      </Section>
    </Container>
  )
}
