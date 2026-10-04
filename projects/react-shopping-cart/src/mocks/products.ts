import { formatPrice } from '../utils/formatPrice'
import productsJson from './products.json'

const products = productsJson.map(product => ({
  ...product,
  formattedPrice: formatPrice(product.price)
}))

export default products
