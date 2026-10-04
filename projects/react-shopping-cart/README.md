# Carrito de compras

Aplicación para estudiar estado compartido, actualizaciones inmutables y persistencia en React. Utiliza un catálogo local de productos y mantiene un carrito entre recargas.

## Funcionalidades

- Filtrado del catálogo por precio mínimo.
- Añadir productos, aumentar o disminuir cantidades, eliminar artículos y vaciar el carrito.
- Recuento de unidades y cálculo del importe total, mostrado en dólares estadounidenses.
- Panel lateral para consultar el carrito.
- Persistencia en `localStorage`, con validación de los datos recuperados.

## Decisiones de React

Un reducer centraliza las operaciones del carrito y devuelve nuevos arrays al modificar los artículos. `createCart` recalcula las unidades y el importe a partir de esos artículos.

Los contextos del carrito y de los filtros mantienen responsabilidades independientes. `useCartState` inicializa el reducer desde el almacenamiento y sincroniza los cambios mediante un efecto.

Al cargar un carrito se validan los identificadores y las cantidades guardadas, se recuperan los productos del catálogo y se recalculan los totales. Los datos inválidos vuelven al estado inicial; los identificadores que ya no existen en el catálogo se descartan.

## Ejecución

Desde la raíz del repositorio:

```sh
cd projects/react-shopping-cart
bun install
bun run dev
```

Abre la dirección que indique Vite. No se necesitan variables de entorno.

## Comandos

```sh
bun run build   # Comprobación de TypeScript y compilación con Vite
bun run lint    # Revisión con Biome
bun run preview # Vista local de la compilación, después de build
```

## Límites actuales

- El catálogo es local: no hay sincronización con un servidor, inventario ni proceso de pago.
- La lógica de filtrado contempla categorías, pero su selector todavía no se incorpora a la interfaz.
- La persistencia pertenece al navegador y al origen donde se ejecuta la aplicación; no se comparte entre dispositivos.
- Algunos nombres accesibles de los botones del carrito están fijados a un producto y necesitan ajustarse al artículo mostrado.
- No hay pruebas automatizadas.
