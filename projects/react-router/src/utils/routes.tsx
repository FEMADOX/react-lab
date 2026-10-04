import type { RouteProps } from '../components/types'
import { LazyAboutPage, LazyHomePage, LazySearchPage } from '../pages'

export const routes: Record<string, RouteProps> = {
  home: {
    path: '/',
    render: () => <LazyHomePage />
  },
  about: {
    path: '/about',
    render: () => <LazyAboutPage />
  },
  search: {
    path: '/search',
    render: () => <LazySearchPage />
  },
  searchWithQuery: {
    path: `/search/:query`,
    render: ({ query }) => <LazySearchPage query={query} />
  }
}
