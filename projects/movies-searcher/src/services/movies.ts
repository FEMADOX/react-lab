import type { Movie } from '../types/movies'

const API_KEY: string = import.meta.env.VITE_OMDB_API_KEY
const API_URL = 'https://www.omdbapi.com/'

type ApiMovie = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
type WithResultsResponse = {
  Search: ApiMovie[]
  Response: 'True'
  totalResults: string
}
type WithoutResultsResponse = {
  Response: 'False'
  Error: string
}
type MoviesResponse = WithResultsResponse | WithoutResultsResponse

export const searchMovies = async (search?: string): Promise<Movie[]> => {
  if (!search) return Promise.resolve([])
  const FULL_URL = `${API_URL}?apikey=${API_KEY}&s=${search}`

  try {
    const response = await fetch(FULL_URL)
    const json = (await response.json()) as MoviesResponse

    if (json.Response === 'False') {
      throw new Error(json.Error)
    }

    return json.Search.map((movie: ApiMovie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error: any) {
    if (error.message.includes('Movie not found')) return []
    console.error(`Error while searching the movie ${search}: ${error}`)
    return []
  }
}
