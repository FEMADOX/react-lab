import { useLocation } from '../contexts/LocationContext'
import { Brand } from './Brand'
import { GithubLogoIcon } from './icons/radix-icons-github-logo'
import { Link } from './Link'

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Acerca de', href: '/about' },
  { label: 'Buscar', href: '/search' }
]

type HeaderLinkProps = {
  navItems: typeof navItems
}

const NavLinks = ({ navItems }: HeaderLinkProps) => {
  const { pathname } = useLocation()

  const textIsActive = (href: string) => {
    if (pathname === href) {
      return 'text-white'
    }
    return 'text-zinc-400'
  }

  return (
    <nav
      aria-label="Navegación principal"
      className="hidden items-center gap-8 md:flex"
    >
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium no-underline transition-colors hover:text-white ${textIsActive(
            item.href
          )}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export const Header = () => {
  return (
    <header className="relative z-10 border-b border-white/8">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Brand />
        <NavLinks navItems={navItems} />
        <a
          className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 text-sm font-semibold text-white no-underline transition-colors hover:border-violet-400/40 hover:bg-violet-500/10"
          href="https://github.com/FEMADOX"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogoIcon />
          <span className="hidden sm:inline">Ver código</span>
        </a>
      </div>
    </header>
  )
}
