import { useContext } from 'react'
import { Box } from '@mui/material'
import { ProductListItem } from './ProductListItem'
import { ProductContext } from './ProductController'

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
