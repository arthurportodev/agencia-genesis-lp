const header = document.querySelector<HTMLElement>('#site-header');
const menuButton = document.querySelector<HTMLButtonElement>('#mobile-menu-button');
const mobileMenu = document.querySelector<HTMLElement>('#mobile-menu');

const updateHeader = () => {
  if (!header) return;
  const scrolled = window.scrollY > 24;
  header.classList.toggle('border-line', scrolled);
  header.classList.toggle('bg-page/90', scrolled);
  header.classList.toggle('backdrop-blur-xl', scrolled);
  header.classList.toggle('shadow-[0_14px_35px_rgba(0,0,0,0.2)]', scrolled);
};

const closeMenu = () => {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  mobileMenu.classList.add('hidden');
};

const toggleMenu = () => {
  if (!menuButton || !mobileMenu) return;
  const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(willOpen));
  menuButton.setAttribute('aria-label', willOpen ? 'Fechar menu' : 'Abrir menu');
  mobileMenu.classList.toggle('hidden', !willOpen);
};

menuButton?.addEventListener('click', toggleMenu);
mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

updateHeader();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  revealItems.forEach((element) => element.classList.add('reveal-ready'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px' },
  );

  revealItems.forEach((element) => observer.observe(element));
}
