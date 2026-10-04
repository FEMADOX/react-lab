import { createContext, type ReactNode, use, useEffect, useState } from 'react'
import { NAVIGATION_EVENTS } from '../utils/constants'

const LocationContext = createContext<string | null>(null)

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const syncPathname = () => setPathname(window.location.pathname)

    window.addEventListener(NAVIGATION_EVENTS.POPSTATE, syncPathname)
    window.addEventListener(NAVIGATION_EVENTS.PUSHSTATE, syncPathname)

    return () => {
      window.removeEventListener(NAVIGATION_EVENTS.POPSTATE, syncPathname)
      window.removeEventListener(NAVIGATION_EVENTS.PUSHSTATE, syncPathname)
    }
  }, [])

  return <LocationContext value={pathname}>{children}</LocationContext>
}

export const useLocation = () => {
  const pathname = use(LocationContext)

  if (pathname === null)
    throw new Error('useLocation must be used within a LocationProvider')

  return { pathname }
}
