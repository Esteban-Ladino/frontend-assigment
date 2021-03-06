import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@styles/GlobalStyles'
import { theme } from '@styles/Theme'
import { Container } from './styles'
import { Header } from '@components/Header'
import { Main } from '@components/Main'
import { Footer } from '@components/Footer'
import { getData } from '../utils/getData'

export const App = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    getData()
      .then(res => setData(res))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Main data={data} />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
