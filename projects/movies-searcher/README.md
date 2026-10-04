# Buscador de películas

Aplicación para explorar formularios, consultas asíncronas y estado derivado en React. Busca títulos en OMDb y muestra su año y póster.

## Funcionalidades

- Búsqueda al enviar el formulario o después de un segundo sin escribir.
- Validación de consultas vacías o de menos de tres caracteres.
- Prevención de consultas consecutivas equivalentes, ignorando espacios exteriores y mayúsculas.
- Ordenación por título o año, en dirección ascendente o descendente.
- Catálogo adaptable al ancho de pantalla e imagen alternativa para pósteres no disponibles.

## Decisiones de React

`useSearchFormulary` concentra el estado y la validación del formulario, y cancela el debounce pendiente al enviar una consulta. `useMovies` gestiona los resultados y recuerda la búsqueda anterior con `useRef`.

La ordenación se calcula con `useMemo` y `toSorted`, conservando el orden de los resultados originales. Un contexto comparte la búsqueda y sus opciones entre los componentes. El servicio de OMDb transforma la respuesta externa al tipo `Movie` utilizado por la interfaz.

## Ejecución

Desde la raíz del repositorio:

```sh
cd projects/movies-searcher
pnpm install
```

Crea un archivo `.env` en esta carpeta con tu clave de OMDb:

```dotenv
VITE_OMDB_API_KEY=tu_clave
```

Después inicia la aplicación:

```sh
pnpm dev
```

Abre la dirección que indique Vite. Reinicia el servidor si cambias la variable de entorno. Vite incorpora las variables `VITE_` al código del navegador: esta clave se usa desde el cliente y no se mantiene secreta mediante `.env`.

## Comandos

```sh
pnpm build   # Comprobación de TypeScript y compilación con Vite
pnpm lint    # Revisión con Biome
pnpm preview # Vista local de la compilación, después de build
```

## Límites actuales

- Se consulta la primera página de resultados de OMDb; no hay paginación.
- La interfaz no muestra un estado de carga ni distingue los fallos de red o de API de una búsqueda sin resultados.
- Las solicitudes no se cancelan: una respuesta anterior puede llegar después de una consulta más reciente.
- No hay pruebas automatizadas.
