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
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const panel = document.getElementById('mobile-menu-panel');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const closeBtn = document.getElementById('mobile-menu-close');
  const servicesAccordion = document.getElementById('mobile-services-accordion');
  const servicesToggle = document.getElementById('mobile-services-toggle');
  const servicesList = document.getElementById('mobile-services-list');

  if (!toggle || !menu || !panel || !backdrop || !closeBtn) return;

  const syncHeaderOffset = (): void => {
    const height = header?.offsetHeight ?? 76;
    menu.style.setProperty('--mobile-header-offset', `${height}px`);
  };

  const closeServicesAccordion = (): void => {
    servicesAccordion?.classList.remove('is-open');
    servicesToggle?.setAttribute('aria-expanded', 'false');
    servicesList?.setAttribute('hidden', '');
  };

  const openMenu = (): void => {
    syncHeaderOffset();
    menu.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    menu.setAttribute('aria-hidden', 'false');
    menu.removeAttribute('inert');
    document.body.classList.add('overflow-hidden');
  };

  const closeMenu = (): void => {
    menu.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.setAttribute('aria-hidden', 'true');
    menu.setAttribute('inert', '');
    document.body.classList.remove('overflow-hidden');
    closeServicesAccordion();
  };

  const isOpen = (): boolean => menu.classList.contains('is-open');

  toggle.addEventListener('click', () => {
    if (isOpen()) closeMenu();
    else openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  panel.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  servicesToggle?.addEventListener('click', () => {
    const expanded = servicesAccordion?.classList.toggle('is-open');
    const isExpanded = Boolean(expanded);
    servicesToggle.setAttribute('aria-expanded', String(isExpanded));
    if (isExpanded) {
      servicesList?.removeAttribute('hidden');
    } else {
      servicesList?.setAttribute('hidden', '');
    }
  });

  menu.querySelectorAll<HTMLAnchorElement>('[data-mobile-nav-link]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) closeMenu();
  });

  window.addEventListener('resize', () => {
    syncHeaderOffset();
    if (window.innerWidth >= 1024 && isOpen()) closeMenu();
  });

  syncHeaderOffset();
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
