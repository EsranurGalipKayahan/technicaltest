import { useState } from 'react'
import { ProductType } from '../apis/Product'

export const useFetch = (url: string) => {
  const [data, setData] = useState<ProductType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(url)
      const resData = await response.json()
      console.log('res:', resData)
      setData(resData)
      setIsError(false)
    } catch (err) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading, isError, fetchData }
}
