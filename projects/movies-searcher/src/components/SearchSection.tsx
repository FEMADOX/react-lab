import { SearchFormulary } from './SearchFormulary'
import { SearchHeader } from './SearchHeader'

export const SearchSection = () => (
  <section
    className="relative grid min-h-142.5 grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] items-center gap-[clamp(50px,8vw,120px)] border-line border-b bg-[radial-gradient(circle_at_12%_82%,rgb(236_91_42/8%),transparent_24%),linear-gradient(115deg,var(--color-paper)_0_61%,var(--color-paper-deep)_61%_100%)] px-[max(5vw,calc((100vw-1180px)/2))] after:pointer-events-none after:absolute after:top-10.5fter:right-[3%] after:size-45 after:rounded-full after:border after:border-[rgb(236_91_42/18%)] after:content-[''] max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:gap-10.5 max-[900px]:bg-none max-[900px]:bg-paper max-[900px]:py-18.5 max-[560px]:gap-8.5 max-[560px]:py-13.5"
    aria-labelledby="hero-title"
  >
    <SearchHeader />
    <SearchFormulary />
  </section>
)
