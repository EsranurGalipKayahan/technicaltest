import React from 'react'
import { Box } from '@mui/material'
import { ProductController } from './components/product/ProductController'
import { containerStyle } from './components/styles/commonStyles'

function App() {
  return (
    <Box sx={containerStyle}>
      <ProductController />
    </Box>
  )
}

export default App
