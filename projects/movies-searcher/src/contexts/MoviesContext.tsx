import { createContext, type PropsWithChildren, use } from 'react'
import { useMovies } from '../hooks/useMovies'

type MoviesContextValue = ReturnType<typeof useMovies>

const MoviesContext = createContext<MoviesContextValue | null>(null)

export const MoviesProvider = ({ children }: PropsWithChildren) => {
  const moviesContextValue = useMovies()
  return <MoviesContext value={moviesContextValue}>{children}</MoviesContext>
}

export const useMoviesContext = () => {
  const context = use(MoviesContext)

  if (!context) {
    throw new Error('useMoviesContext must be used within a MoviesProvider')
  }

  return context
}
