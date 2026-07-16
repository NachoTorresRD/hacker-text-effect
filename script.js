"use strict";

(() => {
  const symbols = "!@#$%&*?+={}<>/\\ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
  const fallbackText = "DESCÍFRAME";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const display = document.querySelector("#scramble-display");
  const input = document.querySelector("#text-input");
  const autoToggle = document.querySelector("#auto-scramble");
  const speedControl = document.querySelector("#speed-control");
  const speedOutput = document.querySelector("#speed-output");
  const resetButton = document.querySelector("#reset-button");
  const characterCount = document.querySelector("#character-count");
  const status = document.querySelector("#effect-status");

  if (!display || !input || !autoToggle || !speedControl || !speedOutput || !resetButton || !characterCount || !status) {
    console.warn("Hacker Text Effect: faltan elementos requeridos en el DOM.");
    return;
  }

  let animationFrame = 0;
  let lastStepTime = 0;
  let revealedCharacters = 0;

  const cleanText = () => input.value.trim() || fallbackText;

  const randomSymbol = (character) => {
    let next = character;
    while (next === character) {
      next = symbols[Math.floor(Math.random() * symbols.length)];
    }
    return next;
  };

  const scrambleText = (characters, revealed) => characters.map((character, index) => {
    if (character === " ") return " ";
    if (index < revealed) return character;
    return randomSymbol(character);
  }).join("");

  const renderFinalText = () => {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    display.textContent = cleanText();
    display.classList.remove("is-running");
  };

  const runEffect = () => {
    const targetText = cleanText();
    const targetCharacters = Array.from(targetText);
    window.cancelAnimationFrame(animationFrame);

    if (prefersReducedMotion.matches) {
      renderFinalText();
      status.textContent = `Mensaje actualizado: ${targetText}`;
      return;
    }

    revealedCharacters = 0;
    lastStepTime = performance.now();
    display.classList.add("is-running");
    display.textContent = scrambleText(targetCharacters, 0);
    status.textContent = "Decodificando mensaje";

    const animate = (now) => {
      const delay = Number(speedControl.value);
      if (now - lastStepTime >= delay) {
        revealedCharacters += 0.5;
        lastStepTime = now;
        display.textContent = scrambleText(targetCharacters, Math.floor(revealedCharacters));
      }

      if (revealedCharacters < targetCharacters.length) {
        animationFrame = window.requestAnimationFrame(animate);
      } else {
        display.textContent = targetText;
        display.classList.remove("is-running");
        animationFrame = 0;
        status.textContent = `Mensaje decodificado: ${targetText}`;
      }
    };

    animationFrame = window.requestAnimationFrame(animate);
  };

  const updateCount = () => {
    characterCount.textContent = `${input.value.length} / ${input.maxLength}`;
  };

  input.addEventListener("input", () => {
    updateCount();
    if (autoToggle.checked) runEffect();
    else renderFinalText();
  });

  speedControl.addEventListener("input", () => {
    speedOutput.value = `${speedControl.value} ms`;
  });

  display.addEventListener("click", runEffect);
  display.addEventListener("mouseenter", runEffect);
  resetButton.addEventListener("click", runEffect);
  prefersReducedMotion.addEventListener("change", renderFinalText);

  updateCount();
  runEffect();
})();
