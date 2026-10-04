import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { ProductsList } from './components/Products'
import { CartProvider } from './contexts/Cart'
import { FiltersProvider } from './contexts/Filters'

export default function App() {
  return (
    <div className="min-h-screen bg-[#242424] text-white/90">
      <CartProvider>
        <div className="mx-auto w-full max-w-150 px-5 py-10 sm:px-8">
          <FiltersProvider>
            <Header />
            <main>
              <ProductsList />
            </main>
          </FiltersProvider>
        </div>
        <Cart />
      </CartProvider>
    </div>
  )
}
