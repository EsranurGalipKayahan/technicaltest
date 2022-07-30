import React, {
  createContext,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react'
import { Box } from '@mui/material'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import { NUMBER_OF_ITEMS, PRODUCT_URL } from '../../data/constants'
import { useFetch } from '../../hook/useFetch'
import { Error } from '../common/Error'
import { Loading } from '../common/Loading'
import { SectionBox } from '../common/SectionBox'
import { ProductList } from './ProductList'
import { FETCH_ERROR, NO_DATA } from '../../data/messages'
import { ProductType } from '../../apis/Product'
import { isArrayEmpty } from '../../utils/array-utils'

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
    if (products.length === 0) setProducts([...data.slice(0, NUMBER_OF_ITEMS)])
  }, [data])

  const handleDelete = (id: number) => {
    setProducts(products.filter(f => f.id !== id))
  }

  if (isLoading) return <Loading />

  if (isError) return <Error message={FETCH_ERROR} />

  console.log(data)
  return (
    <ProductContext.Provider value={{ products, handleDelete }}>
      <SectionBox>
        {!isArrayEmpty(products) ? (
          <ProductList />
        ) : (
          <Error
            icon={<ThumbDownAltIcon fontSize={'large'} color={'primary'} />}
            message={NO_DATA}
          />
        )}
      </SectionBox>
    </ProductContext.Provider>
  )
}
