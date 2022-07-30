import React, { useContext } from 'react'
import { Divider, Stack, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { ProductType } from '../../apis/Product'
import { capitalize } from '../../utils/string-utils'
import { ProductContext } from './ProductController'
import { addDefaultImgSrc } from '../../utils/common-utils'

interface IProductListItemProps {
  product: ProductType
}

export const ProductListItem = ({ product }: IProductListItemProps) => {
  const { handleDelete } = useContext(ProductContext)

  console.log('product img :', product.name, product.image_link)

  return (
    <Stack
      p={1}
      m={1}
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{ border: '1px solid lightgrey', borderRadius: 5 }}
    >
      <Stack direction={'row'} alignItems={'center'}>
        <img
          src={`${product.image_link}` || './images/nopreview.jpg'}
          srcSet={`${product.image_link}` || './images/nopreview.jpg'}
          onError={addDefaultImgSrc}
          title={product.name}
          alt={product.name}
          style={{
            height: 75,
            width: 75,
            objectFit: 'cover',
            border: '1px solid yellow',
          }}
        />

        <Typography
          align={'left'}
          fontStyle={'italic'}
          pl={2}
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          {capitalize(product.name)}
        </Typography>
      </Stack>
      <Stack
        direction={'row'}
        alignItems={'center'}
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Typography align={'left'} pl={2}>
          ${product.price}
        </Typography>
        <IconButton onClick={() => handleDelete(product.id)}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}
