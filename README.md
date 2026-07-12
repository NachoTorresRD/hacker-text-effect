# 👾 Letras Hacker — Efecto Matrix Scramble Interactivo

Una demostración web interactiva, moderna y de diseño premium que implementa el efecto **Text Scramble Decode** (mejor conocido como *efecto letras hacker*). 

Este repositorio está estructurado de manera modular (HTML, CSS y JS separados) para servir como recurso educativo de apoyo al video tutorial del canal.

---

## 🚀 Características
*   **Decodificación al Vuelo**: Cada letra que escribes en el campo de texto se decodifica en tiempo real con caracteres de código aleatorios antes de revelar el texto final.
*   **Glow en Hover**: Pasa el cursor por encima del texto para activar la animación de re-cifrado de forma instantánea.
*   **Diseño Oscuro Premium**: Estilo futurista con desenfoque de fondo (glassmorphism) y degradados en tonos púrpura y cian.
*   **Totalmente Responsivo**: Adaptado para lucir de forma impecable tanto en dispositivos móviles como en pantallas grandes de escritorio.
*   **Sin Dependencias**: Escrito con HTML5, Tailwind CSS para el maquetado rápido y Javascript Vainilla puro.

---

## 📁 Estructura del Proyecto
El proyecto está dividido de forma limpia para facilitar su comprensión paso a paso:

```bash
hacker-text-demo/
├── index.html   # Estructura del DOM y maquetación de la interfaz
├── style.css    # Definición de fuentes, fondo radial y estilos glassmorphism
└── script.js    # Lógica de cifrado y manipulación de texto en JS
```

---

## 💻 ¿Cómo usarlo localmente?
No necesitas realizar instalaciones complejas ni inicializar servidores de desarrollo. 

1.  Clona el repositorio o descarga los archivos.
2.  Haz doble clic en el archivo `index.html` para abrirlo directamente en tu navegador favorito.
3.  ¡Escribe cualquier palabra y disfruta del efecto!

---

## 🛠️ ¿Cómo funciona el algoritmo?
El efecto se basa en cambiar de forma progresiva cada caracter del texto original por un símbolo aleatorio de una colección (`!@#$%&*?...`), y luego revelar los caracteres reales de izquierda a derecha usando un bucle de tiempo (`setInterval`):

```javascript
// Fragmento básico de la función en script.js
function scrambleEffect(element, originalText, speed = 60, iterations = 3) {
  let count = 0;
  let interval = setInterval(() => {
    element.innerText = originalText
      .split("")
      .map((char, index) => {
        if (char === " ") return " ";
        if (index < count) return originalText[index];
        return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      })
      .join("");
    
    if (count >= originalText.length) clearInterval(interval);
    count += 1 / iterations;
  }, speed);
}
```

---

## ⚡ Créditos, Fork y Contribución
Desarrollado con fines educativos y de portafolio por **[NachoTorresRD](https://ntdesweb.com)** para la agencia de desarrollo web premium **[NTDESWEB](https://ntdesweb.com)**.

¡Eres libre de utilizar este código en tus propios proyectos! Si te sirve de ayuda para tus desarrollos, te invito a:
*   Darle una **Estrella (Star) ⭐** a este repositorio para apoyar mi contenido.
*   Hacer un **Fork 🍴** del repositorio y personalizarlo con tus propios efectos o estilos.
