import { createContext, use } from 'react'
import { useCartState } from '../hooks/Cart'

const CartContext = createContext<ReturnType<typeof useCartState> | null>(null)

export const CartProvider = ({ children }: React.PropsWithChildren) => {
  return <CartContext value={useCartState()}>{children}</CartContext>
}

export const useCartContext = () => {
  const context = use(CartContext)

  if (!context)
    throw new Error('useCartContext must be used within a CartProvider')

  return context
}
