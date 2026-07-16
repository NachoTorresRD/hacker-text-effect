# Hacker Text Effect

![Vista previa de Hacker Text Effect](assets/preview.svg)

Efecto de texto scramble/decoder accesible, ligero y configurable, construido con HTML, CSS y JavaScript Vanilla.

## Características

- Activación al escribir, hacer hover, clic o usar el teclado.
- Velocidad ajustable y reinicio manual.
- Una sola animación `requestAnimationFrame` activa.
- Adaptación a `prefers-reduced-motion`.
- Diseño responsive desde 360 px y sin dependencias externas.

## Demo en vivo

[hacker-text-effect.netlify.app](https://hacker-text-effect.netlify.app)

## Instalación

```bash
git clone https://github.com/NachoTorresRD/hacker-text-effect.git
cd hacker-text-effect
```

Abre `index.html` directamente en el navegador.

## Estructura

```text
hacker-text-effect/
├── assets/
├── index.html
├── style.css
├── script.js
├── netlify.toml
├── robots.txt
└── sitemap.xml
```

## Personalización

Cambia los tokens de color en `:root`, edita `symbols` en `script.js` y ajusta el rango de velocidad del control HTML.

## Accesibilidad

El disparador es un botón nativo, los controles tienen etiquetas, el estado se anuncia con una región `aria-live` y el movimiento no esencial se elimina cuando el sistema lo solicita.

## Rendimiento

No usa librerías, fuentes remotas ni imágenes pesadas. La animación se cancela antes de iniciar otra y solo modifica `textContent`.

## Licencia

[MIT](LICENSE)

## Créditos

Creado por [Nacho Torres](https://github.com/NachoTorresRD) para [NTDESWEB](https://www.ntdesweb.com), usando [NT-SKILL SUPREME](https://github.com/NachoTorresRD/nt-skill-supreme).

¿Te resultó útil? [Explora el código en GitHub](https://github.com/NachoTorresRD/hacker-text-effect) o [trabaja con NTDESWEB](https://www.ntdesweb.com).
