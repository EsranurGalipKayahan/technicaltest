import {
  Modal,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Rating,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { modalStyle } from '../styles/commonStyles'
import { ProductType } from '../../apis/Product'
import { addDefaultImgSrc } from '../../utils/common-utils'
import { NO_PREVIEW } from '../../data/constants'

interface IProductPreviewProps {
  open: boolean
  handleClose: () => void
  product: ProductType
}

export const ProductPreview = ({
  open,
  handleClose,
  product,
}: IProductPreviewProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Card sx={modalStyle}>
        <CardMedia
          component={'img'}
          height={'140'}
          image={product.image_link || NO_PREVIEW}
          onError={addDefaultImgSrc}
          style={{ objectFit: 'contain' }}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant={'h5'}>
            {product.name}
          </Typography>
          <Typography
            variant={'body2'}
            color={'text.secondary'}
            align={'justify'}
          >
            {product.description}
          </Typography>
          <Rating
            name="read-only"
            value={product.rating}
            readOnly
            sx={{ paddingTop: 1 }}
          />
        </CardContent>
        <CardActions>
          <IconButton size={'small'}>
            <FavoriteIcon color={'secondary'} />
          </IconButton>
          <IconButton size={'small'} color={'primary'}>
            <ShareIcon />
          </IconButton>
          <IconButton style={{ marginLeft: 'auto' }}>
            <ShoppingCartIcon color={'success'} />
          </IconButton>
        </CardActions>
      </Card>
    </Modal>
  )
}
