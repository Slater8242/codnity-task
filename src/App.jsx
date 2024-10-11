import { Box, Container, CssBaseline } from '@mui/material'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    // <>
    <Box sx={{
      minHeight: "100vh",
      display:"flex",
      flexDirection:"column"
    }}>
      <CssBaseline />
      <Header/>
      <Container>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
      </Container>
      <Footer/>
    </Box>
    // </>
  )
}

export default App
