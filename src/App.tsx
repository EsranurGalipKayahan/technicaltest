import React from 'react'
import { Box } from '@mui/material'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { ProductController } from './components/product/ProductController'
import { containerStyle } from './components/styles/commonStyles'
import { NavBar } from './components/navbar/NavBar'
import { APP_STYLE } from './components/styles/appStyle'

const theme = createTheme(APP_STYLE)
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Box sx={containerStyle}>
        <ProductController />
      </Box>
    </ThemeProvider>
  )
}

export default App
