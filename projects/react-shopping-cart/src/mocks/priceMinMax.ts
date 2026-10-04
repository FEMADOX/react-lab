import products from './products.json'

const mappedPrices = [...new Set(products.map(product => product.price))]

export const priceMinMax = {
  min: Math.min(...mappedPrices),
  max: Math.max(...mappedPrices)
}
