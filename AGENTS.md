# Repository Guidelines

Guía rápida para mantener el proyecto Astro + Tailwind consistente, legible y listo para despliegues en Netlify.

## Project Structure & Module Organization
- `src/components` guarda UI reutilizable en `.astro` con nombres PascalCase.
- `src/pages` define rutas (`/`, `/servicios`, `/contacto`); `src/layouts` contiene el layout base.
- `src/lib` centraliza contenido y datos tipados; `src/styles/global.css` importa Tailwind 4 y tokens utilitarios.
- `public` almacena assets estáticos; `dist` es solo salida de `npm run build`.
- Configuración clave: `astro.config.ts` (rutas/alias como `@lib`), `tailwind.config.ts`, `tsconfig.json` (modo estricto).

## Build, Test, and Development Commands
- `npm install` instala dependencias (Node 18+ recomendado).
- `npm run dev` inicia el entorno local con recarga.
- `npm run build` genera la versión optimizada en `dist`.
- `npm run preview` sirve la build para validar antes de publicar (el flujo usado por Netlify).
- En Netlify: comando `npm run build`, directorio de publicación `dist`.

## Coding Style & Naming Conventions
- Sangría de 2 espacios; mantener imports ordenados y ESM por defecto.
- Componentes en PascalCase; props y utilidades en camelCase; datos en `src/lib` tipados en TypeScript.
- Usar clases utilitarias de Tailwind; evitar estilos inline salvo excepciones pequeñas.
- Cuidar accesibilidad: atributos `aria-*`, texto descriptivo en botones, manejo de foco si se agregan interacciones.
- Respeta el toggling de tema (`elp-theme` en `localStorage`) y la clase `dark` en `<html>`.

## Testing Guidelines
- No hay suite automatizada hoy; antes de merge ejecuta `npm run build` y revisa `npm run preview`.
- Validar manualmente navegación desktop/mobile, modo claro/oscuro y botones del navbar y CTA.
- Si agregas pruebas, documenta el comando en este archivo y usa nombres alineados a la ruta o componente bajo prueba.

## Commit & Pull Request Guidelines
- Mensajes cortos en español, frase clara sin punto final (p. ej., `Ajusta hero para mobile`); primera línea <= 72 caracteres.
- Agrupa cambios coherentes; evita commits masivos mixtos.
- PRs: incluye descripción breve, lista de comandos ejecutados (build/preview), capturas para cambios visuales y referencia a issue o ticket.
- Declara nuevas dependencias o variables de entorno y cómo se configuran.
