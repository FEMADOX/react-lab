import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'
import type { Movie, SortOption, SortOrder } from '../types/movies'

const titleCollator = new Intl.Collator('es', { sensitivity: 'base' })

const comparators: Record<
  Exclude<SortOption, 'none'>,
  (firstMovie: Movie, secondMovie: Movie) => number
> = {
  title: (firstMovie, secondMovie) =>
    titleCollator.compare(firstMovie.title, secondMovie.title),
  year: (firstMovie, secondMovie) =>
    Number.parseInt(firstMovie.year, 10) - Number.parseInt(secondMovie.year, 10)
}

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [sortBy, setSortBy] = useState<SortOption>('none')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')
  const previousSearch = useRef<string | null>(null)

  const getMovies = useCallback((search: string) => {
    const normalizedSearch = search.trim().toLowerCase()

    if (normalizedSearch === previousSearch.current) return

    previousSearch.current = normalizedSearch
    void searchMovies(search).then(setMovies)
  }, [])

  const sortedMovies = useMemo(() => {
    if (sortBy === 'none') return movies

    const direction = sortOrder === 'asc' ? 1 : -1

    return movies.toSorted(
      (firstMovie, secondMovie) =>
        comparators[sortBy](firstMovie, secondMovie) * direction
    )
  }, [movies, sortBy, sortOrder])

  const changeSort = (sortOption: SortOption) => setSortBy(sortOption)
  const changeSortOrder = (order: SortOrder) => setSortOrder(order)

  return {
    movies: sortedMovies,
    hasMovies: movies.length > 0,
    getMovies,
    sortBy,
    changeSort,
    sortOrder,
    changeSortOrder
  }
}
