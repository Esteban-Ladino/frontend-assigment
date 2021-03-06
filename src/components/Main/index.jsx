import { Article } from '../Article'
import { Cards } from '../Cards'
import { StyledMain } from './styles'

export const Main = ({ data }) => {
  return (
    <StyledMain>
      <Article {...data} />
      <Cards data={data} />
    </StyledMain>
  )
}
