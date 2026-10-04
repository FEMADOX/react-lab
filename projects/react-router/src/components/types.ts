import type { JSX } from 'react'

export type RouteProps = {
  path: string
  render: (params: Record<string, string | undefined>) => JSX.Element
}
