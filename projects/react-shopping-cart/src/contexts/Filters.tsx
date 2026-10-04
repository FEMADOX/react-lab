import { createContext, use } from 'react'
import { useFilters } from '../hooks/Filters'

type FiltersContextValue = ReturnType<typeof useFilters>

const FiltersContext = createContext<FiltersContextValue | null>(null)

export const FiltersProvider = ({ children }: React.PropsWithChildren) => {
  return <FiltersContext value={useFilters()}>{children}</FiltersContext>
}

export const useFiltersContext = () => {
  const context = use(FiltersContext)

  if (!context)
    throw new Error('useFiltersContext must be used within a FiltersProvider')

  return context
}
