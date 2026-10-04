# React Lab

Laboratorio de práctica y profundización en React y TypeScript. Cada aplicación se centra en un problema concreto: búsqueda asíncrona, estado compartido o navegación en el navegador.

El objetivo es comprender cómo se conectan los componentes, los hooks y las APIs del navegador, y documentar las decisiones y los límites de cada implementación.

## Proyectos

| Proyecto | Enfoque | Implementación |
| --- | --- | --- |
| [Buscador de películas](./projects/movies-searcher/) | Formularios y consumo de APIs | Búsqueda en OMDb, debounce, validación y ordenación de resultados |
| [Carrito de compras](./projects/react-shopping-cart/) | Estado compartido y persistencia | Context, reducer, filtros y recuperación desde `localStorage` |
| [Router](./projects/react-router/) | Navegación y composición | History API, rutas parametrizadas y carga diferida de páginas |

## Ejecución

Cada proyecto es una aplicación independiente con React, TypeScript, Vite y Tailwind CSS. No hay un comando de instalación o ejecución común en la raíz.

Consulta el README de cada carpeta para instalar sus dependencias y arrancar la aplicación. El buscador utiliza pnpm; el carrito y el router utilizan Bun, de acuerdo con sus archivos de bloqueo.

El buscador requiere una clave de OMDb. Los otros dos proyectos no necesitan variables de entorno.

## Alcance

Las aplicaciones son prácticas acotadas y están en evolución. Sus README explican qué implementan, qué decisiones estudian y qué queda pendiente. El repositorio no incluye una suite de pruebas automatizadas.
