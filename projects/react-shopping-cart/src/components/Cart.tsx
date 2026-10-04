import {
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  Trash2Icon,
  TrashIcon,
  XIcon
} from 'lucide-react'
import { useCartContext } from '../contexts/Cart'
import type { CartItem } from '../types/cart'

const CartItemComponent = (item: CartItem) => {
  const { addToCart, decrement, removeFromCart } = useCartContext()
  const { title, thumbnail, formattedPrice, quantity } = item

  return (
    <li className="border-b border-[#444] pb-4 relative">
      <img
        className="aspect-video w-full rounded object-cover"
        src={thumbnail}
        alt={title}
      />
      <h3 className="mt-3 text-sm font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm font-bold text-sky-400">{formattedPrice}</p>
      <footer className="mt-4 flex items-center justify-center gap-3 text-sm">
        <button
          className="grid size-8 place-items-center rounded bg-[#09f] text-lg font-bold text-white transition hover:bg-sky-400"
          type="button"
          aria-label="Disminuir cantidad de Eyeshadow Palette"
          onClick={() => decrement(item.id)}
        >
          <MinusIcon />
        </button>
        <span>Qty: {quantity}</span>
        <button
          className="grid size-8 place-items-center rounded bg-[#09f] text-lg font-bold text-white transition hover:bg-sky-400"
          type="button"
          aria-label="Aumentar cantidad de Eyeshadow Palette"
          onClick={() => addToCart(item)}
        >
          <PlusIcon />
        </button>
      </footer>
      <button
        className="absolute top-2 right-2 grid size-8 place-items-center rounded bg-red-500 text-lg font-bold text-white transition hover:bg-red-400 cursor-pointer"
        type="button"
        aria-label="Remover Eyeshadow Palette del carrito"
        onClick={() => removeFromCart(item.id)}
      >
        <Trash2Icon />
      </button>
    </li>
  )
}

export function Cart() {
  const { items, totalItems, formattedTotalPrice, clearCart } = useCartContext()

  return (
    <div>
      <input
        id="cart-toggle"
        className="peer fixed top-0 right-0 size-px overflow-hidden opacity-0"
        type="checkbox"
      />
      <label
        htmlFor="cart-toggle"
        className="fixed top-4 right-4 z-20 grid size-11 cursor-pointer place-items-center rounded-full bg-[#09f] text-white shadow-lg shadow-black/40 transition hover:scale-110 hover:bg-sky-400 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white"
        aria-label="Abrir o cerrar carrito"
      >
        <ShoppingCartIcon className="size-6" />
        <span className="absolute -top-1 -right-1 grid size-5 place-items-center rounded-full bg-red-500 text-[11px] font-bold">
          {totalItems}
        </span>
      </label>

      <label
        htmlFor="cart-toggle"
        className="pointer-events-none fixed inset-0 z-10 bg-black/50 opacity-0 transition-opacity peer-checked:pointer-events-auto peer-checked:opacity-100"
        aria-hidden="true"
      >
        {}
      </label>

      <aside
        className="fixed flex flex-col top-0 right-0 z-30 h-full w-full max-w-64 translate-x-full overflow-y-auto border-l border-white/10 bg-[#0c0c0c] p-6 shadow-2xl shadow-black/60 transition-transform duration-300 peer-checked:translate-x-0"
        aria-labelledby="cart-title"
      >
        <label
          htmlFor="cart-toggle"
          className="absolute top-4 right-4 grid size-10 cursor-pointer place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
          aria-label="Cerrar carrito"
        >
          <XIcon className="size-6" aria-hidden="true" />
        </label>
        <div className="mb-8 pr-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase">
            Tu selección
          </p>
          <h2 id="cart-title" className="mt-1 text-2xl font-bold text-white">
            Carrito
          </h2>
        </div>
        <ul className="space-y-6">
          {items.map(item => (
            <CartItemComponent key={item.id} {...item} />
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-sm text-white/60">Total</span>
          <strong className="text-lg text-white">{formattedTotalPrice}</strong>
        </div>
        <button
          className="mt-5 w-fit mx-auto rounded border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-red-400 hover:bg-red-500/10 hover:text-red-300 cursor-pointer"
          type="button"
          onClick={clearCart}
          aria-label="Vaciar carrito"
        >
          <TrashIcon className="inline-block" />
        </button>
      </aside>
    </div>
  )
}
