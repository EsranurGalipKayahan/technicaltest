import React, { useContext } from 'react'
import {
  Box,
  TableBody,
  List,
  ListItem,
  ListItemText,
  ImageListItem,
} from '@mui/material'
import { ProductType } from '../../apis/Product'
import { ProductListItem } from './ProductListItem'
import { ProductContext } from './ProductController'
import { NUMBER_OF_ITEMS } from '../../data/constants'

/*interface IProductListProps {
  products: ProductType[]
}*/
export const ProductList = () => {
  //({ products }: IProductListProps) => {
  const { products } = useContext(ProductContext)

  return (
    <Box sx={{ width: '100%' }}>
      {products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </Box>
  )
}
