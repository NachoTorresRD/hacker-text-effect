# Hacker Text Effect

![Hacker Text Effect preview](assets/preview.svg)

An accessible, lightweight, configurable scramble/decoder text effect built with HTML, CSS, and Vanilla JavaScript.

## Features

- Runs on typing, hover, click, or keyboard activation.
- Adjustable speed and a manual replay control.
- Only one active `requestAnimationFrame` loop.
- Honors `prefers-reduced-motion`.
- Responsive from 360 px with no external dependencies.

## Live demo

[hacker-text-effect.netlify.app](https://hacker-text-effect.netlify.app)

## Installation

```bash
git clone https://github.com/NachoTorresRD/hacker-text-effect.git
cd hacker-text-effect
```

Open `index.html` directly in your browser.

## Project structure

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

## Customization

Change the color tokens in `:root`, edit `symbols` in `script.js`, and adjust the speed input range in the HTML.

## Accessibility

The trigger is a native button, controls have labels, state changes use an `aria-live` region, and optional motion is removed when requested by the operating system.

## Performance

No libraries, remote fonts, or heavy images. Each animation is cancelled before a new one begins and updates only `textContent`.

## License

[MIT](LICENSE)

## Credits

Created by [Nacho Torres](https://github.com/NachoTorresRD) for [NTDESWEB](https://www.ntdesweb.com), using [NT-SKILL SUPREME](https://github.com/NachoTorresRD/nt-skill-supreme).

[Browse the code on GitHub](https://github.com/NachoTorresRD/hacker-text-effect) or [work with NTDESWEB](https://www.ntdesweb.com).
