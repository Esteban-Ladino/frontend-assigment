import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@styles/GlobalStyles'
import { theme } from '@styles/Theme'
import { Container } from './styles'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
