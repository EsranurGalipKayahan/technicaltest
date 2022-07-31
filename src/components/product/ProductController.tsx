import { createContext, useEffect, useState } from 'react'
import LeakRemoveIcon from '@mui/icons-material/LeakRemove'
import { NUMBER_OF_ITEMS, PRODUCT_URL } from '../../data/constants'
import { useFetch } from '../../hook/useFetch'
import { Error } from '../common/Error'
import { SectionBox } from '../common/SectionBox'
import { ProductList } from './ProductList'
import { FETCH_ERROR, NO_DATA } from '../../data/messages'
import { ProductType } from '../../apis/Product'
import { isArrayEmpty } from '../../utils/array-utils'
import { ListSkeleton } from '../common/ListSkeleton'

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

  if (isLoading)
    return (
      <SectionBox>
        <ListSkeleton />
      </SectionBox>
    )

  if (isError)
    return (
      <SectionBox>
        <Error message={FETCH_ERROR} />
      </SectionBox>
    )

  console.log(data)
  return (
    <ProductContext.Provider value={{ products, handleDelete }}>
      <SectionBox>
        {!isArrayEmpty(products) ? (
          <ProductList />
        ) : (
          <Error
            icon={<LeakRemoveIcon fontSize={'large'} color={'secondary'} />}
            message={NO_DATA}
          />
        )}
      </SectionBox>
    </ProductContext.Provider>
  )
}
