const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveals(): void {
  if (prefersReducedMotion) {
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        observer.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    observer.observe(el);
  });
}

function initMobileNav(): void {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const servicesToggle = document.getElementById('mobile-services-toggle');
  const servicesList = document.getElementById('mobile-services-list');

  toggle?.addEventListener('click', () => {
    const isOpen = menu?.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('overflow-hidden', Boolean(isOpen));
  });

  servicesToggle?.addEventListener('click', () => {
    servicesList?.classList.toggle('open');
    servicesToggle.setAttribute(
      'aria-expanded',
      String(servicesList?.classList.contains('open')),
    );
  });

  menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('overflow-hidden');
    });
  });
}

function initServicesDropdown(): void {
  const trigger = document.getElementById('services-dropdown-trigger');
  const menu = document.getElementById('services-dropdown');
  if (!trigger || !menu) return;

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = menu.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('open')) return;
    if (menu.contains(e.target as Node) || trigger.contains(e.target as Node)) return;
    menu.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  });
}

function initFaq(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-faq-trigger]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('[data-faq-item]');
      const panel = item?.querySelector<HTMLElement>('[data-faq-panel]');
      const isOpen = item?.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      if (panel) {
        panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : '0px';
      }
    });
  });
}

function initHeaderScroll(): void {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = (): void => {
    header.classList.toggle('scrolled', window.scrollY > 24);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

initReveals();
initMobileNav();
initServicesDropdown();
initFaq();
initHeaderScroll();

export {};
