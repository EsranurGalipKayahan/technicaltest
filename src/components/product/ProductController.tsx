import { createContext, useEffect, useState } from 'react'
import { AppBar, Typography, Box } from '@mui/material'
import LeakRemoveIcon from '@mui/icons-material/LeakRemove'
import {
  BACKGROUND_IMG,
  NUMBER_OF_ITEMS,
  PRODUCT_URL,
} from '../../data/constants'
import { useFetch } from '../../hook/useFetch'
import { Error } from '../common/Error'
import { SectionBox } from '../common/SectionBox'
import { ProductList } from './ProductList'
import { FETCH_ERROR, NO_DATA } from '../../data/messages'
import { ProductType } from '../../apis/Product'
import { isArrayEmpty } from '../../utils/array-utils'
import { ListSkeleton } from '../common/ListSkeleton'
import { calculateListHeight, flexCenter } from '../styles/commonStyles'

interface IProductContextProps {
  products: ProductType[]
  handleDelete: (id: number) => void
}
export const ProductContext = createContext({} as IProductContextProps)

export const ProductController = () => {
  const { data, isError, isLoading, fetchData } = useFetch(PRODUCT_URL)
  const [products, setProducts] = useState(data)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (isArrayEmpty(products)) setProducts([...data.slice(0, NUMBER_OF_ITEMS)])
  }, [data])

  const handleDelete = (id: number) => {
    setProducts(products.filter(f => f.id !== id))
  }

  return (
    <ProductContext.Provider value={{ products, handleDelete }}>
      <SectionBox style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}>
        <Box
          height={calculateListHeight}
          sx={{ overflow: 'auto', minWidth: { xs: 280, md: 550 } }}
        >
          <AppBar
            position={'sticky'}
            color={'secondary'}
            sx={{ height: 45, ...flexCenter }}
          >
            <Typography
              color={'whitesmoke'}
              fontFamily={'serif'}
              fontStyle={'italic'}
              fontWeight={'bold'}
              fontSize={20}
            >
              Top 15 Products
            </Typography>
          </AppBar>
          {isLoading ? (
            <ListSkeleton />
          ) : isError ? (
            <Error message={FETCH_ERROR} />
          ) : isArrayEmpty(products) ? (
            <Error
              icon={<LeakRemoveIcon fontSize={'large'} color={'secondary'} />}
              message={NO_DATA}
            />
          ) : (
            <ProductList />
          )}
        </Box>
      </SectionBox>
    </ProductContext.Provider>
  )
}
