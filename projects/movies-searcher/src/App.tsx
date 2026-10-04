import { Footer } from './components/Footer'
import { Header } from './components/Header'
import HomePage from './pages/HomePage'

export const App = () => (
  <div className="min-h-screen overflow-hiidden">
    <Header />

    <HomePage />

    <Footer />
  </div>
)

export default App
