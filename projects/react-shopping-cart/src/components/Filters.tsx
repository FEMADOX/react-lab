import type { ChangeEvent } from 'react'
import { useFiltersContext } from '../contexts/Filters'
import { categories } from '../mocks/categories'
import { priceMinMax } from '../mocks/priceMinMax'

export const CategoriesList = () => {
  const { category, onCategoryChange } = useFiltersContext()

  return (
    <div className="grid gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
      <label className="text-sm font-semibold" htmlFor="category">
        Categoría
      </label>
      <select
        id="category"
        className="w-full rounded border border-white/15 bg-[#181818] px-3 py-2 text-sm text-white outline-none transition focus:border-[#09f]"
        defaultValue={category}
        onChange={event =>
          onCategoryChange(event.target.value.toLocaleLowerCase())
        }
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export function FiltersList() {
  const { price, onPriceChange } = useFiltersContext()

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value)
    onPriceChange(value)
  }

  return (
    <section
      className="grid gap-5 sm:grid-cols-2 sm:items-center sm:gap-8"
      aria-labelledby="filters-title"
    >
      <h2 id="filters-title" className="sr-only">
        Filtros de productos
      </h2>
      <div>
        <div className="mb-3 flex items-center justify-between gap-4 text-sm font-semibold">
          <label htmlFor="price-range">Precio a partir de:</label>
          <div className="relative">
            <span className="pointer-events-none inline-block text-sky-400">
              $
            </span>
            <input
              id="price-number"
              type="number"
              className="text-sky-400 w-18 bg-transparent text-center outline-none"
              value={price}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <input
          id="price-range"
          className="h-2 w-full cursor-pointer accent-[#09f]"
          type="range"
          min={priceMinMax.min}
          max={priceMinMax.max}
          value={price}
          step={0.01}
          onChange={handleOnChange}
        />
      </div>
    </section>
  )
}
