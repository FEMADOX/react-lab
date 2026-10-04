import { ShoppingCartIcon } from 'lucide-react'
import { FiltersList } from './Filters'

export function Header() {
  return (
    <header className="mb-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        React Shop <ShoppingCartIcon className={'w-8 inline-block ml-2'} />
      </h1>
      <FiltersList />
    </header>
  )
}
