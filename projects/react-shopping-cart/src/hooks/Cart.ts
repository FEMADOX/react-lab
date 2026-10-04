import { useEffect, useReducer } from 'react'
import { cartReducer } from '../reducers/cart'
import type { Product, StoredCart } from '../types/cart'
import { initialCartState } from '../types/cart'
import { loadCart } from '../utils/cart'
import { CART_STORAGE_KEY } from '../utils/constantes'
import { formatPrice } from '../utils/formatPrice'

export const useCartState = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState, loadCart)
  const { items, totalPrice, totalItems } = cart

  const formattedTotalPrice = formatPrice(totalPrice)

  useEffect(() => {
    try {
      if (items.length === 0) {
        localStorage.removeItem(CART_STORAGE_KEY)
        return
      }

      const storedCart: StoredCart = {
        items: items.map(item => ({
          productId: item.id,
          quantity: item.quantity
        })),
        totalPrice: formatPrice(totalPrice),
        totalItems: totalItems
      }

      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(storedCart))
    } catch (error) {
      console.error(`Error saving cart to local storage ${error}`)
    }
  }, [items, totalPrice, totalItems])

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', product })
  }

  const decrement = (productId: number) => {
    dispatch({ type: 'DECREMENT', productId })
  }

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR' })
  }

  return {
    ...cart,
    formattedTotalPrice,
    addToCart,
    decrement,
    removeFromCart,
    clearCart
  }
}
