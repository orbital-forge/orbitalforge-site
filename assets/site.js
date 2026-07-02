(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('[data-menu-toggle], [data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu], .nav-links');
  const yearEls = document.querySelectorAll('[data-year]');

  yearEls.forEach((el) => { el.textContent = new Date().getFullYear(); });

  function setHeaderState() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  if (toggle && menu) {
    if (!menu.hasAttribute('data-open')) menu.setAttribute('data-open', 'false');
    toggle.addEventListener('click', () => {
      const isOpen = menu.getAttribute('data-open') === 'true';
      menu.setAttribute('data-open', String(!isOpen));
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });

    menu.addEventListener('click', (event) => {
      if (event.target && event.target.tagName === 'A') {
        menu.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}());
