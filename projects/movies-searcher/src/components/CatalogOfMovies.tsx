import { useMoviesContext } from '../contexts/MoviesContext'
import type { Movie } from '../types/movies'

type MovieComponentProps = {
  movie: Movie
}

type ListOfMoviesProps = {
  movies: Movie[]
}

const imageFallback =
  'https://img.icons8.com/?size=100&id=j1UxMbqzPi7n&format=png&color=000000'

const MovieComponent = ({
  movie: { title, year, poster }
}: MovieComponentProps) => (
  <article className="group min-w-0">
    <div className="relative flex aspect-2/3 flex-col items-center justify-center overflow-hidden text-white shadow-[0_12px_30px_rgb(26_20_16/15%)] transition-[transform,box-shadow] duration-200 group-hover:-translate-y-1.25 group-hover:shadow-[0_20px_40px_rgb(26_20_16/22%)] motion-reduce:transition-none max-[900px]:aspect-4/5">
      <img
        className="size-auto object-cover"
        src={poster !== 'N/A' ? poster : imageFallback}
        alt={title}
        onError={(event: React.SyntheticEvent<HTMLImageElement>) => {
          event.currentTarget.src = imageFallback
        }}
      />
    </div>
    <div className="pt-4.25">
      <p className="text-[11px] font-bold tracking-[0.08em] text-orange-dark uppercase">
        {year}
      </p>
      <h3 className="mt-1.75 mb-2 font-display text-[21px] leading-[1.2] text-ink">
        {title}
      </h3>
    </div>
  </article>
)

const ListOfMovies = ({ movies }: ListOfMoviesProps) => (
  <div className="grid grid-cols-4 gap-[clamp(18px,2.5vw,30px)] max-[900px]:grid-cols-2 max-[900px]:gap-y-10.5 max-[560px]:grid-cols-1">
    {movies.map(movie => (
      <MovieComponent movie={movie} key={movie.id} />
    ))}
  </div>
)

const NoMovies = () => <p>No se encontraron peliculas</p>

export const CatalogOfMovies = () => {
  const { movies, hasMovies } = useMoviesContext()

  return (
    <section
      className="px-[max(5vw,calc((100vw-1180px)/2))] pt-19 pb-22.5 max-[560px]:pt-14.5 max-[560px]:pb-16"
      id="peliculas"
    >
      {hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />}
    </section>
  )
}
