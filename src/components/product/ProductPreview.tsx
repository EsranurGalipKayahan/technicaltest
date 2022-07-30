import React from 'react'
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={modalStyle}>
          <CardMedia
            component="img"
            height="140"
            image={product.image_link || NO_PREVIEW}
            onError={addDefaultImgSrc}
            style={{ objectFit: 'contain' }}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
            <IconButton size="small">
              <FavoriteIcon />
            </IconButton>
            <IconButton size="small">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Modal>
    </div>
  )
}
