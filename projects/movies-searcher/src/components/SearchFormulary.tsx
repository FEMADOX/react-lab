import { useSearchFormulary } from '../hooks/useSearchFormulary'
import { SearchInput } from './SearchInput'
import { SortDirection } from './SortDirection'
import { SortResults } from './SortResults'

export const SearchFormulary = () => {
  const { movie, error, handleOnChange, handleOnSubmit } = useSearchFormulary()

  return (
    <search className="relative z-10 rounded-[3px] border border-line bg-[rgb(255_253_248/92%)] p-[clamp(26px,4vw,42px)] shadow-[0_24px_70px_rgb(40_31_22/12%)] max-[900px]:max-w-175">
      <form onSubmit={handleOnSubmit} noValidate>
        <label
          className="mb-3.5 block font-display text-[22px] font-bold"
          htmlFor="movie-search"
        >
          ¿Qué película estás buscando?
        </label>
        <div className="flex gap-2.5 max-[560px]:flex-col">
          <div className="flex min-w-0 flex-1 items-center border border-[#c9c2b7] bg-white focus-within:border-orange focus-within:shadow-[0_0_0_3px_rgb(236_91_42/12%)]">
            <span
              className="rotate-[-15deg] pl-4 text-2xl text-muted"
              aria-hidden="true"
            >
              ⌕
            </span>
            <SearchInput value={movie} onValueChange={handleOnChange} />
          </div>
          <button
            className="min-w-36.25 cursor-pointer border border-orange bg-orange px-5 text-sm font-bold text-white transition-[background,transform] duration-150 hover:-translate-y-px hover:bg-orange-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[rgb(236_91_42/25%)] motion-reduce:transition-none max-[560px]:min-h-12.25"
            type="submit"
          >
            Buscar película
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 min-[561px]:grid-cols-2 min-[900px]:grid-cols-2 lg:grid-cols-1">
          <SortResults />
          <SortDirection />
        </div>
        {error ? (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : null}
      </form>
    </search>
  )
}
