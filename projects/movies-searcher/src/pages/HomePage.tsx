import { CatalogOfMovies } from '../components/CatalogOfMovies'
import { SearchSection } from '../components/SearchSection'
import { MoviesProvider } from '../contexts/MoviesContext'

const HomePage = () => (
  <MoviesProvider>
    <main id="top">
      <SearchSection />
      <CatalogOfMovies />
    </main>
  </MoviesProvider>
)

export default HomePage
