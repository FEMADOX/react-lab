import { Suspense } from 'react'
import { Footer, Header, Router } from './components'
import { MainSuspense } from './components/MainSuspense'
import { Route } from './components/Route'
import { LocationProvider } from './contexts/LocationContext'
import { routes } from './utils/routes'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#08070d] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(109,40,217,0.16),transparent_28%),radial-gradient(circle_at_12%_85%,rgba(91,33,182,0.1),transparent_24%)]" />
      <LocationProvider>
        <Header />
        <Suspense fallback={MainSuspense()}>
          <Router>
            {Object.values(routes).map(route => (
              <Route
                key={route.path}
                path={route.path}
                render={route.render}
              />
            ))}
          </Router>
        </Suspense>
      </LocationProvider>
      <Footer />
    </div>
  )
}

export default App
