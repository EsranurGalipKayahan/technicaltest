import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { ProductController } from './components/product/ProductController'
import { NavBar } from './components/navbar/NavBar'
import { APP_STYLE } from './components/styles/appStyle'
import { Home } from './components/home/Home'

const theme = createTheme(APP_STYLE)
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductController />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
