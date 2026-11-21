// Small progressive enhancement: animated network indicator and copyright year.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const counter = document.getElementById('network-counter');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (counter && !reducedMotion) {
  let value = 1;
  window.setInterval(() => {
    value = value >= 999 ? 1 : value + 1;
    counter.textContent = String(value).padStart(3, '0');
  }, 2400);
}
