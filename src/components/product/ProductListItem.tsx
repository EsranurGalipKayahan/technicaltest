import { useContext, useState } from 'react'
import { Divider, Stack, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { ProductType } from '../../apis/Product'
import { capitalize } from '../../utils/string-utils'
import { ProductContext } from './ProductController'
import { addDefaultImgSrc } from '../../utils/common-utils'
import { ProductPreview } from './ProductPreview'
import { NO_PREVIEW } from '../../data/constants'

interface IProductListItemProps {
  product: ProductType
}

export const ProductListItem = ({ product }: IProductListItemProps) => {
  const { handleDelete } = useContext(ProductContext)
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <>
      <Stack
        p={1}
        m={1}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        sx={{ boxShadow: 6, borderRadius: 5, ':hover': { cursor: 'pointer' } }}
        role={'button'}
        onClick={() => setOpenModal(true)}
      >
        <Stack direction={'row'} alignItems={'center'}>
          <img
            src={`${product.api_featured_image}` || NO_PREVIEW}
            srcSet={`${product.api_featured_image}}` || NO_PREVIEW}
            onError={addDefaultImgSrc}
            title={product.name}
            alt={product.name}
            style={{ height: 75, width: 75, objectFit: 'cover' }}
          />
          <Typography
            align={'left'}
            fontStyle={'italic'}
            pl={2}
            sx={{ display: { xs: 'none', sm: 'block' } }}
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

      <ProductPreview
        open={openModal}
        handleClose={() => setOpenModal(false)}
        product={product}
      />
    </>
  )
}
