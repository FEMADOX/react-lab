import type { ReactElement, ReactNode } from 'react'
import { useLocation } from '../contexts/LocationContext'
import { NotFoundPage } from '../pages/NotFoundPage'
import type { Route } from './Route'
import type { RouteProps } from './types'

type RouterProps = {
  children: ReactElement<RouteProps, typeof Route>[]
  defaultRoute?: ReactNode
}

export const Router = ({
  children,
  defaultRoute: DefaultComponent = <NotFoundPage />
}: RouterProps) => {
  const { pathname: currentPath } = useLocation()

  for (const routeElement of children) {
    const { path, render } = routeElement.props
    const match = new URLPattern({ pathname: path }).exec({
      pathname: currentPath
    })
    if (match) return render(match.pathname.groups)
  }

  return DefaultComponent
}
