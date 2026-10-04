import { NAVIGATION_EVENTS } from '../utils/constants'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export const navigate = (href: string) => {
  if (href.endsWith('/')) href = href.slice(0, -1)
  window.history.pushState(null, '', href)
  window.dispatchEvent(new Event(NAVIGATION_EVENTS.PUSHSTATE))
}

export const Link = ({ target, href, ...props }: LinkProps) => {
  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented) return

    const isManageableEvent = target === undefined || target === '_self'

    if (e.button === 0 && isManageableEvent) {
      e.preventDefault()
      navigate(href)
    }
  }

  return <a href={href} {...props} onClick={handleOnClick} />
}
