(function () {
  const header = document.querySelector('.site-header');
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
  function updateHeader() { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}());
