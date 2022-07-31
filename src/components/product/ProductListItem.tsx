import { useContext, useState } from 'react'
import {
  Divider,
  Stack,
  Typography,
  IconButton,
  ButtonBase,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { ProductType } from '../../apis/Product'
import { capitalize } from '../../utils/string-utils'
import { ProductContext } from './ProductController'
import { addDefaultImgSrc } from '../../utils/common-utils'
import { ProductPreview } from './ProductPreview'

interface IProductListItemProps {
  product: ProductType
}

export const ProductListItem = ({ product }: IProductListItemProps) => {
  const { handleDelete } = useContext(ProductContext)
  const [openModal, setOpenModal] = useState<boolean>(false)

  console.log('product img :', product.name, product.image_link)

  return (
    <>
      <ButtonBase
        disableRipple
        style={{ display: 'block', textAlign: 'initial', width: '100%' }}
        onClick={() => {
          console.log('open click')
          setOpenModal(true)
        }}
      >
        <Stack
          p={1}
          m={1}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          sx={{ boxShadow: 6, borderRadius: 5 }}
        >
          <Stack direction={'row'} alignItems={'center'}>
            {/*TODO : There are problem in some image_links, fix that*/}
            <img
              src={`${product.image_link}` || './images/nopreview.jpg'}
              srcSet={`${product.image_link}` || './images/nopreview.jpg'}
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
      </ButtonBase>
      <ProductPreview
        open={openModal}
        handleClose={() => setOpenModal(false)}
        product={product}
      />
    </>
  )
}
