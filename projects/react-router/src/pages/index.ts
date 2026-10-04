import { lazy } from 'react'

export const LazyAboutPage = lazy(() =>
  import('./AboutPage').then(({ AboutPage }) => ({ default: AboutPage }))
)
export const LazyHomePage = lazy(() =>
  import('./HomePage').then(({ HomePage }) => ({ default: HomePage }))
)
export const LazyNotFoundPage = lazy(() =>
  import('./NotFoundPage').then(({ NotFoundPage }) => ({
    default: NotFoundPage
  }))
)
export const LazySearchPage = lazy(() =>
  import('./SearchPage').then(({ SearchPage }) => ({ default: SearchPage }))
)
