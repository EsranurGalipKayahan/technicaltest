import { useContext } from 'react'
import { AppBar, Box, Typography } from '@mui/material'
import { ProductListItem } from './ProductListItem'
import { ProductContext } from './ProductController'
import { flexCenter } from '../styles/commonStyles'

export const ProductList = () => {
  const { products } = useContext(ProductContext)

  return (
    <Box sx={{ overflow: 'auto' }}>
      {products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </Box>
  )
}
