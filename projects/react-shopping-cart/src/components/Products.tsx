import { ShoppingCartMinusIcon, ShoppingCartPlusIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { useCartContext } from '../contexts/Cart'
import { useFiltersContext } from '../contexts/Filters'
import products from '../mocks/products.ts'

type ProductProps = {
  product: (typeof products)[number]
}

type CartProductButtonProps = {
  product: (typeof products)[number]
}

const CartProductButton = ({ product }: CartProductButtonProps) => {
  const { items, addToCart, removeFromCart } = useCartContext()
  const { id: productId, title } = product

  const baseButtonClassName =
    'grid size-9 place-items-center rounded text-white transition focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer'
  const removeFromCartButtonProps: ComponentProps<'button'> = {
    className: `${baseButtonClassName} bg-red-500 hover:bg-red-400 focus-visible:outline-red-400`,
    'aria-label': `Remove product ${title} from cart`,
    onClick: () => removeFromCart(productId),
    children: <ShoppingCartMinusIcon />
  }
  const addToCartButtonProps: ComponentProps<'button'> = {
    className: `${baseButtonClassName} bg-[#09f] hover:bg-sky-400 focus-visible:outline-sky-400`,
    'aria-label': `Add product ${title} to cart`,
    onClick: () => addToCart(product),
    children: <ShoppingCartPlusIcon />
  }

  const actionButtonProps = items.some(item => item.id === productId)
    ? removeFromCartButtonProps
    : addToCartButtonProps

  const buttonProps: ComponentProps<'button'> = {
    ...actionButtonProps,
    type: 'button',
    className: `${baseButtonClassName} ${actionButtonProps.className}`
  }

  return <button {...buttonProps} />
}

const Product = ({ product }: ProductProps) => {
  const { title, thumbnail, category, price, id } = product

  return (
    <article
      className="group flex flex-col overflow-hidden rounded bg-[#111] p-4 shadow-[0_0_10px_10px_rgba(0,0,0,0.1)]"
      key={id}
    >
      <img
        className="aspect-video w-full rounded object-cover transition duration-300 group-hover:scale-[1.02]"
        src={thumbnail}
        alt={title}
      />
      <div className="flex flex-1 flex-col gap-4 pt-4">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70">{category}</p>
        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="font-bold text-sky-400">${price}</span>
          <CartProductButton product={product} />
        </div>
      </div>
    </article>
  )
}

export function ProductsList() {
  const { category: categoryToFilter, price: priceToFilter } =
    useFiltersContext()

  const filteredProducts = products.filter(product => {
    return (
      (categoryToFilter === 'all' || product.category === categoryToFilter) &&
      (priceToFilter === undefined || product.price >= priceToFilter)
    )
  })

  return (
    <section aria-labelledby="products-title">
      <h2 id="products-title" className="sr-only">
        Productos
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
