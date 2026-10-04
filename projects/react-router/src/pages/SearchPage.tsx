import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { navigate } from '../components/Link'

type SearchPageProps = {
  query?: string
}

export const SearchPage = ({ query }: SearchPageProps) => {
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const query = formData.get('query') as string

    navigate(`/search/${query}`)
  }

  return (
    <main className="relative z-1 mx-auto min-h-[calc(100vh-10rem)] w-full max-w-5xl px-5 py-20 sm:px-8 lg:px-12">
      <div className="rounded-4xl border border-white/8 bg-white/2.5 p-6 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-400">
          Búsqueda
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
          {query ? `Resultados para “${query}”` : 'Inicia tu busqueda'}
        </h1>

        <search className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-3">
          <form className="flex items-center gap-3" onSubmit={handleSubmit}>
            <MagnifyingGlassIcon className="shrink-0 text-zinc-500 ml-2 size-6" />
            <input
              name="query"
              type="text"
              placeholder="React / Router..."
              className="w-full h-full rounded-2xl bg-transparent px-3 py-1 text-sm text-white placeholder:text-zinc-500 focus:border-violet-400 focus:outline-none transition-colors"
              defaultValue={query}
            />
            <input
              type="submit"
              className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:cursor-pointer hover:bg-violet-500 transition-colors"
              value="Buscar"
            />
          </form>
        </search>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map(item => (
            <article
              className="rounded-2xl border border-white/8 bg-white/2 p-5"
              key={item}
            >
              <div className="h-3 w-20 rounded-full bg-violet-400/20" />
              <div className="mt-5 h-4 w-4/5 rounded-full bg-white/10" />
              <div className="mt-3 h-3 w-full rounded-full bg-white/5" />
              <div className="mt-2 h-3 w-2/3 rounded-full bg-white/5" />
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
