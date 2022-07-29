import React, { useEffect } from 'react'
import { EYELINER_URL } from '../data/constants'
import { useFetch } from '../hook/useFetch'

export const ProductController = () => {
  const { data, isError, isLoading, fetchData } = useFetch(EYELINER_URL)

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) return <div>Loading</div>

  if (isError) return <div>Error</div>

  console.log(data)
  return <div>Hi</div>
}
