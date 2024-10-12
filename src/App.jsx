import { Box, Container, CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProductDetails from './components/ProductDetails'

function App() {

  return (
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
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
      </Container>
      <Footer/>
    </Box>
  )
}

export default App
