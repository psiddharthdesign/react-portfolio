import logo from './logo.svg'
import './App.css'
import styled, { ThemeProvider } from "styled-components"
import { Footer } from './Footer'
import { Header } from './Header'

const theme = {
  primary: '#ff0001',
  secondary: "#00ff01"
}

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding-top: 182px;
`

function App() {
  
  return <ThemeProvider theme={theme}>
    <Container>
            <Header/>
            <Footer/>    
    </Container>
  </ThemeProvider>
}

export default App

