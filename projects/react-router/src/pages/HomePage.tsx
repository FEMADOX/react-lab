import { ArrowRightIcon } from '@radix-ui/react-icons'
import heroImage from '../assets/hero.png'
import { RouteCard } from '../components/RouteCard'

const routes = [
  {
    path: '/',
    title: 'Página de inicio',
    description: 'La puerta de entrada de la aplicación y su ruta principal.',
    icon: 'home' as const
  },
  {
    path: '/about',
    title: 'Sobre nosotros',
    description: 'Una vista de presentación con soporte para varios idiomas.',
    icon: 'user' as const
  },
  {
    path: '/search/:query',
    title: 'Resultados de búsqueda',
    description: 'Una ruta dinámica que reserva espacio para un parámetro.',
    icon: 'search' as const
  },
  {
    path: '*',
    title: 'Página no encontrada',
    description: 'El estado visual que recibe cualquier ruta desconocida.',
    icon: 'error' as const
  }
]

const concepts = [
  {
    number: '01',
    title: 'Navegación declarativa',
    text: 'Enlaces claros que describen el destino sin acoplar la interfaz a la implementación.'
  },
  {
    number: '02',
    title: 'Rutas dinámicas',
    text: 'Segmentos preparados para representar búsquedas, idiomas y contenido variable.'
  },
  {
    number: '03',
    title: 'Experiencia SPA',
    text: 'Una estructura visual lista para cambiar de vista sin perder el contexto de la app.'
  }
]

export function HomePage() {
  return (
    <main className="relative z-1">
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
            <span className="size-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_#a78bfa]" />
            Router desde cero
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Cada ruta cuenta una{' '}
            <span className="bg-linear-to-r from-violet-300 via-violet-500 to-fuchsia-400 bg-clip-text text-transparent">
              historia diferente.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            Una interfaz para aprender cómo funciona un router construyéndolo
            desde sus piezas más pequeñas: rutas, enlaces, parámetros y una
            página para cuando algo se pierde por el camino.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-violet-600 px-6 text-sm font-semibold text-white no-underline shadow-[0_12px_45px_rgba(124,58,237,0.3)] transition-colors hover:bg-violet-500"
              href="#rutas"
            >
              Explorar las rutas
              <ArrowRightIcon />
            </a>
            <a
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 text-sm font-semibold text-white no-underline transition-colors hover:bg-white/10"
              href="#conceptos"
            >
              Ver qué aprenderás
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/8 pt-7">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-zinc-600">
                Dependencias
              </dt>
              <dd className="mt-1 text-sm font-semibold text-zinc-300">Cero</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-zinc-600">
                Construido con
              </dt>
              <dd className="mt-1 text-sm font-semibold text-zinc-300">
                React + TypeScript
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-zinc-600">
                Experiencia
              </dt>
              <dd className="mt-1 text-sm font-semibold text-zinc-300">SPA</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto flex w-full max-w-xl items-center justify-center py-14 lg:py-0">
          <div className="absolute left-1/2 top-1/2 size-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[100px]" />
          <div className="relative w-full rounded-4xl border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-6">
            <div className="mb-5 flex items-center gap-2 border-b border-white/8 pb-4">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-zinc-600">router-preview</span>
            </div>

            <div className="grid min-h-96 place-items-center rounded-2xl border border-white/6 bg-[#0b0912] px-8 py-10 sm:min-h-112">
              <img
                className="relative z-10 w-full max-w-88 drop-shadow-[0_28px_45px_rgba(109,40,217,0.3)]"
                src={heroImage}
                alt="Capas conectadas que representan las rutas de una aplicación"
              />
            </div>

            <div className="absolute -left-4 top-28 rounded-xl border border-violet-400/20 bg-[#151020]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-10">
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-zinc-600">
                Ruta actual
              </p>
              <code className="mt-1 block text-sm font-semibold text-violet-300">
                /about
              </code>
            </div>

            <div className="absolute -bottom-5 right-3 rounded-xl border border-white/10 bg-[#151020]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-7 sm:bottom-10">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <span className="size-2 rounded-full bg-emerald-400" />
                Vista encontrada
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.018]" id="rutas">
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-400">
              Mapa del proyecto
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              Cuatro vistas. Un solo recorrido.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-500">
              Cada pantalla está maquetada como una pieza independiente para que
              puedas conectarla después con tu propia implementación.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {routes.map(route => (
              <RouteCard key={route.path} {...route} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12"
        id="conceptos"
      >
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-400">
              Bajo el capó
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              Entiende el camino, no solo el destino.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500">
              La UI deja visibles las piezas que luego conectarás: enlaces,
              rutas estáticas, parámetros y la vista por defecto.
            </p>
          </div>

          <ol className="space-y-4">
            {concepts.map(concept => (
              <li
                className="grid gap-5 rounded-3xl border border-white/8 bg-white/2.5 p-6 sm:grid-cols-[auto_1fr] sm:p-8"
                key={concept.number}
              >
                <span className="font-mono text-sm text-violet-400">
                  {concept.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {concept.title}
                  </h3>
                  <p className="mt-2 leading-7 text-zinc-500">{concept.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}
