document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector("[data-current-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
