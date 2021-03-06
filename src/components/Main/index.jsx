import { Article } from '../Article'
import { Cards } from '../Cards'
import { StyledMain } from './styles'

export const Main = () => {
  return (
    <StyledMain>
      <Article />
      <Cards />
    </StyledMain>
  )
}
