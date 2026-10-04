import { type Cart, initialCartState, type Product } from '../types/cart'
import { createCart } from '../utils/cart'

export type CartAction =
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'DECREMENT'; productId: number }
  | { type: 'REMOVE_FROM_CART'; productId: number }
  | { type: 'CLEAR' }

export const cartReducer = (state: Cart, action: CartAction): Cart => {
  const { items } = state
  switch (action.type) {
    case 'ADD_TO_CART': {
      const productExist = items.some(item => item.id === action.product.id)
      const newItems = productExist
        ? items.map(item =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...items, { ...action.product, quantity: 1 }]

      return createCart(newItems)
    }

    case 'DECREMENT': {
      const newItems = items
        .map(item =>
          item.id === action.productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
      return createCart(newItems)
    }

    case 'REMOVE_FROM_CART':
      return createCart(items.filter(item => item.id !== action.productId))

    case 'CLEAR':
      return initialCartState

    default:
      return state
  }
}
