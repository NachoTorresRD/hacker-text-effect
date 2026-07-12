// Hacker Scramble Logic
const SYMBOLS = '!@#$%&*?ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789';

function scrambleEffect(element, originalText, speed = 60, iterations = 3) {
  let interval = null;
  let count = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    element.innerText = originalText
      .split("")
      .map((char, index) => {
        if (char === " ") return " ";
        if (index < count) return originalText[index];
        return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      })
      .join("");
    
    if (count >= originalText.length) {
      clearInterval(interval);
    }
    
    count += 1 / iterations;
  }, speed);
}

// Dom Elements
const titleEl = document.getElementById("main-title");
const displayEl = document.getElementById("scramble-display");
const inputEl = document.getElementById("text-input");
const autoScrambleCheck = document.getElementById("auto-scramble");

// Initialize titles on page load
window.addEventListener("DOMContentLoaded", () => {
  scrambleEffect(titleEl, "Letras Hacker", 40, 4);
  scrambleEffect(displayEl, "DECIFRAME", 50, 3);
});

// Scramble on Hover
titleEl.addEventListener("mouseenter", () => {
  scrambleEffect(titleEl, "Letras Hacker", 40, 4);
});

displayEl.addEventListener("mouseenter", () => {
  scrambleEffect(displayEl, inputEl.value || "DECIFRAME", 40, 3);
});

// Scramble on Input Typing
inputEl.addEventListener("input", (e) => {
  const val = e.target.value || "VACIO";
  
  if (autoScrambleCheck.checked) {
    scrambleEffect(displayEl, val, 30, 2);
  } else {
    displayEl.innerText = val;
  }
});
