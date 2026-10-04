import type products from '../mocks/products.ts'
import type { StoradCartItem } from '../utils/cart.ts'

export type Product = (typeof products)[number]

export type CartItem = Product & {
  quantity: number
}
export type Cart = {
  items: CartItem[]
  totalPrice: number
  totalItems: number
}
export const initialCartState: Cart = {
  items: [],
  totalPrice: 0,
  totalItems: 0
}
export type StoredCart = {
  items: StoradCartItem[]
  totalPrice: string
  totalItems: number
}
