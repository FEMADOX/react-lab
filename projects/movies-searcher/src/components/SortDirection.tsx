import { useMoviesContext } from '../contexts/MoviesContext'
import type { SortOrder } from '../types/movies'

export const SortDirection = () => {
  const {
    sortBy,
    sortOrder,
    changeSortOrder: onSortOrderChange
  } = useMoviesContext()

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 min-w-0 gap-1.5 min-[900px]:grid-cols-2 lg:grid-cols-2">
      <label
        className="text-xs font-bold tracking-[0.06em] text-muted uppercase content-center text-center"
        htmlFor="sort-order"
      >
        Dirección del orden
      </label>
      <div className="relative">
        <select
          className="w-full cursor-pointer appearance-none rounded-sm border border-[#c9c2b7] bg-white py-2 pr-9 pl-3 text-sm font-semibold text-ink shadow-[0_4px_14px_rgb(40_31_22/6%)] outline-none transition-[border-color,box-shadow,background-color] hover:border-orange hover:bg-[#fffaf3] focus-visible:border-orange focus-visible:ring-3 focus-visible:ring-[rgb(236_91_42/14%)] disabled:cursor-not-allowed disabled:bg-[#eeeae3] disabled:text-muted disabled:opacity-70 motion-reduce:transition-none"
          name="sortOrder"
          id="sort-order"
          value={sortOrder}
          disabled={sortBy === 'none'}
          onChange={event =>
            onSortOrderChange(event.currentTarget.value as SortOrder)
          }
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <svg
          className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-orange"
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}
