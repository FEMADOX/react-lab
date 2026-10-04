import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useMoviesContext } from '../contexts/MoviesContext'

const validateMovie = (movie: string): string | undefined => {
  if (movie === '') return 'No puedes dejar el campo vacio'

  if (movie.length < 3) return 'La busqueda debe tener al menos 3 caracteres'
}

export const useSearchFormulary = () => {
  const [movie, setMovie] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const { getMovies: onSearch } = useMoviesContext()
  const debouncedSearch = useDebouncedCallback((value: string) => {
    onSearch(value)
  }, 1000)

  const handleOnChange = (value: string) => {
    setMovie(value)

    debouncedSearch.cancel()

    const query = value.trim()
    const validationError = validateMovie(query)

    setError(validationError)

    if (validationError) {
      if (query === '') onSearch('')
      return
    }

    debouncedSearch(query)
  }

  const handleOnSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    debouncedSearch.cancel()

    const query = movie.trim()
    const validationError = validateMovie(query)

    setError(validationError)

    if (validationError) return

    onSearch(query)
  }

  return {
    movie,
    error,
    handleOnChange,
    handleOnSubmit
  }
}
