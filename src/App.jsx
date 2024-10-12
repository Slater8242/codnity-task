import { Box, Container, CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProductDetails from './components/ProductDetails'
import store from './store';

function App() {

  return (
    <Provider store={store}>
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
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </Container>
        <Footer/>
      </Box>
    </Provider>
  )
}

export default App
