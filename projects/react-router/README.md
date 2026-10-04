# Router en React

Aplicación para explorar cómo conectar la URL del navegador con la interfaz de React. Implementa un router pequeño con componentes declarativos, History API y `URLPattern`.

## Funcionalidades

- Navegación interna mediante un componente `Link` y `history.pushState`.
- Actualización de la página al usar los botones de atrás y adelante del navegador.
- Declaración de rutas mediante componentes `Route`.
- Coincidencia de rutas estáticas y parametrizadas, como `/search/:query`.
- Página de respaldo cuando ninguna ruta coincide.
- Carga diferida de las páginas con `React.lazy` y un estado visual de espera con `Suspense`.

## Decisiones de React

`LocationProvider` comparte el `pathname` actual. Un efecto escucha los eventos de navegación y elimina esas suscripciones al desmontarse.

`Router` recorre las rutas en orden, usa `URLPattern` para encontrar la primera coincidencia y entrega los parámetros a su función `render`. `Link` publica un evento después de cambiar el historial para que React actualice la página.

Las importaciones diferidas adaptan las exportaciones con nombre al formato `default` que espera `React.lazy`.

## Ejecución

Desde la raíz del repositorio:

```sh
cd projects/react-router
bun install
bun run dev
```

Abre la dirección que indique Vite en un navegador con soporte para `URLPattern`. No se necesitan variables de entorno.

## Comandos

```sh
bun run build   # Comprobación de TypeScript y compilación con Vite
bun run preview # Vista local de la compilación, después de build
```

El script `lint` invoca `oxlint`, pero esa herramienta no está declarada entre las dependencias del proyecto. La configuración necesita completarse para que la revisión sea reproducible tras una instalación limpia.

## Límites actuales

- El router trabaja con `pathname`; no gestiona parámetros de consulta ni fragmentos como estado de navegación.
- No incluye rutas anidadas, carga de datos por ruta ni renderizado en servidor.
- `Link` necesita ampliar el tratamiento de clics con teclas modificadoras, descargas y enlaces externos.
- No se incluye un reemplazo para navegadores sin `URLPattern`.
- Publicar la aplicación requiere que el servidor devuelva `index.html` al abrir directamente una ruta interna.
- No hay pruebas automatizadas, aunque Vitest figura en las dependencias.
