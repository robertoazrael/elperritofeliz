# El Perrito Feliz

Sitio demo construido con Astro 4 + TailwindCSS 4, en TypeScript y con estructura modular lista para desplegar en Netlify.

## Stack
- Astro 4 (config minimalista y Vite integrado)
- TailwindCSS 4 con modo oscuro por clase `dark`
- Tipado estricto con `tsconfig` extendiendo `astro/tsconfigs/strict`

## Scripts
- `npm run dev` – arranca el entorno local
- `npm run build` – genera la versión de producción
- `npm run preview` – sirve la build localmente

## Estructura
- `src/components` – Navbar, Hero, botones, cards, servicios, testimonios, CTA, footer
- `src/layouts` – layout base con import de estilos y script de tema
- `src/pages` – `/`, `/servicios`, `/contacto`
- `src/styles` – `global.css` con `@import 'tailwindcss'` y tokens utilitarios
- `src/lib` – contenido demo (servicios, testimonios y enlaces)

## Notas de tema
- Modo oscuro controlado por clase `dark` en `<html>`; se guarda preferencia en `localStorage` (`elp-theme`).
- Paleta cálida con acentos caramelo y fondos crema; tipografía Manrope.

## Puesta en marcha
1. Instala dependencias: `npm install`
2. Corre `npm run dev` y abre el puerto indicado.
3. Para producción: `npm run build` y `npm run preview` para validar.

Listo para desplegar en Netlify (build command `npm run build`, publish dir `dist`).
