import products from '../mocks/products.ts'
import type { Cart, CartItem, StoredCart } from '../types/cart'
import { CART_STORAGE_KEY } from './constantes.ts'
import { formatPrice } from './formatPrice.ts'

export type StoradCartItem = {
  productId: number
  quantity: number
}

const isStoredCartItem = (value: unknown): value is StoradCartItem => {
  if (typeof value !== 'object' || value === null) return false

  const item = value as Record<string, unknown>

  return (
    typeof item.productId === 'number' &&
    typeof item.quantity === 'number' &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0
  )
}

const isStoredCart = (value: unknown): value is StoredCart => {
  if (typeof value !== 'object' || value === null) return false

  const cart = value as Record<string, unknown>

  return Array.isArray(cart.items) && cart.items.every(isStoredCartItem)
}

export const createCart = (items: CartItem[]): Cart => {
  let totalPrice = 0
  let totalItems = 0

  for (const item of items) {
    totalPrice += item.price * item.quantity
    totalItems += item.quantity
  }

  return {
    items,
    totalPrice,
    totalItems
  }
}

export const loadCart = (fallback: Cart): Cart => {
  try {
    const storedValue = localStorage.getItem(CART_STORAGE_KEY)

    if (!storedValue) return fallback

    const parsedValue: unknown = JSON.parse(storedValue)

    if (!isStoredCart(parsedValue)) return fallback

    const items: CartItem[] = parsedValue.items.flatMap(storedItem => {
      const product = products.find(
        product => product.id === storedItem.productId
      )

      if (!product) return []

      return [
        {
          ...product,
          quantity: storedItem.quantity
        }
      ]
    })

    return createCart(items)
  } catch {
    return fallback
  }
}
