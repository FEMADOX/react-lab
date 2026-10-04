import { useState } from 'react'
import { priceMinMax } from '../mocks/priceMinMax'

export const useFilters = () => {
  const { min, max } = priceMinMax
  const [price, onPriceChange] = useState(100)
  const [category, onCategoryChange] = useState('all')

  return {
    price,
    onPriceChange,
    category,
    onCategoryChange,
    min,
    max
  }
}
