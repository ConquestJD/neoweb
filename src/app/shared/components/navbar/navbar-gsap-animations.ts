import gsap from 'gsap';

const EASE = 'power3.out';
const EASE_SOFT = 'power2.out';
const EASE_EXPO = 'expo.out';

/**
 * Animaciones GSAP del navbar: intro, megamenú, menú móvil y submenú.
 */
export function initNavbarIntro(root: HTMLElement): () => void {
  const ctx = gsap.context(() => {
    setupIntro(root);
  }, root);

  return () => ctx.revert();
}

export function playMegamenuOpen(root: HTMLElement): gsap.core.Timeline | null {
  const menu = root.querySelector('.services-megamenu') as HTMLElement | null;
  if (!menu) return null;

  const aside = menu.querySelector('.megamenu-aside');
  const eyebrow = menu.querySelector('.megamenu-eyebrow');
  const title = menu.querySelector('.megamenu-title');
  const copy = menu.querySelector('.megamenu-copy');
  const cta = menu.querySelector('.megamenu-cta');
  const ctaIcon = cta?.querySelector('.material-icons');
  const rows = menu.querySelectorAll('.megamenu-row');

  gsap.set(menu, { opacity: 0, y: -14, xPercent: -50 });
  gsap.set([eyebrow, title, copy, cta].filter(Boolean), { opacity: 0 });
  gsap.set(rows, { opacity: 0, y: 14 });

  const tl = gsap.timeline({ defaults: { ease: EASE } });

  tl.to(menu, { opacity: 1, y: 0, xPercent: -50, duration: 0.4, ease: EASE_SOFT }, 0);

  if (aside) {
    tl.fromTo(
      aside,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 0.55, ease: EASE_EXPO },
      0.05
    );
  }

  if (eyebrow) {
    tl.fromTo(
      eyebrow,
      { opacity: 0, y: 12, letterSpacing: '0.32em' },
      { opacity: 1, y: 0, letterSpacing: '0.18em', duration: 0.5 },
      0.18
    );
  }

  if (title) {
    tl.fromTo(
      title,
      { opacity: 0, y: 22, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: EASE_EXPO },
      0.26
    );
  }

  if (copy) {
    tl.fromTo(
      copy,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.38
    );
  }

  if (cta) {
    tl.fromTo(
      cta,
      { opacity: 0, x: -12 },
      { opacity: 1, x: 0, duration: 0.45, ease: 'back.out(1.4)' },
      0.48
    );
  }

  if (ctaIcon) {
    tl.fromTo(
      ctaIcon,
      { opacity: 0, x: -8 },
      { opacity: 1, x: 0, duration: 0.35 },
      0.58
    );
  }

  rows.forEach((row, i) => {
    const index = row.querySelector('.megamenu-row-index');
    const name = row.querySelector('.megamenu-row-name');
    const short = row.querySelector('.megamenu-row-short');
    const arrow = row.querySelector('.megamenu-row-arrow');
    const at = 0.28 + i * 0.055;

    tl.to(row, { opacity: 1, y: 0, duration: 0.45, ease: EASE_SOFT }, at);

    if (index) {
      tl.fromTo(
        index,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.35 },
        at + 0.04
      );
    }
    if (name) {
      tl.fromTo(
        name,
        { opacity: 0, x: -8, clipPath: 'inset(0 100% 0 0)' },
        { opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)', duration: 0.45, ease: EASE_EXPO },
        at + 0.06
      );
    }
    if (short) {
      tl.fromTo(
        short,
        { opacity: 0, x: 10 },
        { opacity: 0.85, x: 0, duration: 0.4 },
        at + 0.1
      );
    }
    if (arrow) {
      tl.fromTo(
        arrow,
        { opacity: 0, x: -8, y: 8, scale: 0.5 },
        {
          opacity: 0.35,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: 'back.out(1.8)',
          onComplete: () => {
            // Estado base para el hover CSS
            gsap.set(arrow, { clearProps: 'opacity,transform' });
          }
        },
        at + 0.14
      );
    }
  });

  return tl;
}

export function playMobileMenuOpen(root: HTMLElement): gsap.core.Timeline | null {
  const panel = root.querySelector('.mobile-menu-glass') as HTMLElement | null;
  if (!panel) return null;

  const links = panel.querySelectorAll('.nav-link-mobile');
  const cta = panel.querySelector('.btn-mobile-full');

  gsap.set(panel, { opacity: 0, y: -16, scaleY: 0.96, transformOrigin: 'top center' });
  gsap.set(links, { opacity: 0, x: -18 });
  gsap.set(cta, { opacity: 0, y: 12, scale: 0.94 });

  const tl = gsap.timeline({ defaults: { ease: EASE } });

  tl.to(
    panel,
    { opacity: 1, y: 0, scaleY: 1, duration: 0.4, ease: EASE_SOFT },
    0
  );

  links.forEach((link, i) => {
    const icon = link.querySelector('.material-icons:not(.dropdown-icon)');
    const label = link.querySelector('span:not(.material-icons)');
    const chevron = link.querySelector('.dropdown-icon');
    const at = 0.12 + i * 0.07;

    tl.to(link, { opacity: 1, x: 0, duration: 0.45, ease: EASE_SOFT }, at);

    if (icon) {
      tl.fromTo(
        icon,
        { opacity: 0, scale: 0.5, rotate: -20 },
        { opacity: 1, scale: 1, rotate: 0, duration: 0.4, ease: 'back.out(1.8)' },
        at + 0.04
      );
    }

    if (label) {
      tl.fromTo(
        label,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.4 },
        at + 0.08
      );
    }

    if (chevron) {
      tl.fromTo(
        chevron,
        { opacity: 0, rotate: -90 },
        { opacity: 1, rotate: 0, duration: 0.35 },
        at + 0.1
      );
    }
  });

  if (cta) {
    tl.to(
      cta,
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'back.out(1.5)' },
      0.12 + links.length * 0.07
    );
  }

  return tl;
}

export function playMobileSubmenuOpen(root: HTMLElement): gsap.core.Timeline | null {
  const submenu = root.querySelector('.mobile-services-submenu') as HTMLElement | null;
  if (!submenu) return null;

  const items = submenu.querySelectorAll('.mobile-submenu-item');

  gsap.set(submenu, { opacity: 0, height: 0, overflow: 'hidden' });
  gsap.set(items, { opacity: 0, x: -12 });

  const tl = gsap.timeline({ defaults: { ease: EASE } });

  tl.to(submenu, { opacity: 1, height: 'auto', duration: 0.35, ease: EASE_SOFT }, 0);

  items.forEach((item, i) => {
    const index = item.querySelector('.mobile-submenu-index');
    const name = item.querySelector('.mobile-submenu-name');
    const short = item.querySelector('.mobile-submenu-short');
    const arrow = item.querySelector('.mobile-submenu-arrow');
    const at = 0.08 + i * 0.05;

    tl.to(item, { opacity: 1, x: 0, duration: 0.4 }, at);

    if (index) {
      tl.fromTo(
        index,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.3 },
        at + 0.02
      );
    }
    if (name) {
      tl.fromTo(
        name,
        { opacity: 0, x: -8 },
        { opacity: 1, x: 0, duration: 0.35 },
        at + 0.04
      );
    }
    if (short) {
      tl.fromTo(
        short,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.3 },
        at + 0.08
      );
    }
    if (arrow) {
      tl.fromTo(
        arrow,
        { opacity: 0, x: -4, y: 4 },
        {
          opacity: 0,
          x: -4,
          y: 4,
          duration: 0.25,
          onComplete: () => gsap.set(arrow, { clearProps: 'opacity,transform' })
        },
        at + 0.1
      );
    }
  });

  return tl;
}

function setupIntro(root: HTMLElement) {
  const bar = root.querySelector('.navbar-fixed');
  const logo = root.querySelector('.navbar-logo');
  const logoImg = root.querySelector('.navbar-logo img');
  const desktop = root.querySelector('.navbar-desktop-menu');
  const mobileToggle = root.querySelector('.mobile-menu-button');
  const mobileIcon = mobileToggle?.querySelector('.material-icons');

  const menuItems = desktop ? Array.from(desktop.children) : [];

  gsap.set(bar, { opacity: 0, y: -20 });
  gsap.set(logo, { opacity: 0, x: -24, scale: 0.92 });
  gsap.set(menuItems, { opacity: 0 });
  gsap.set(mobileToggle, { opacity: 0, scale: 0.7, rotate: -12 });

  const tl = gsap.timeline({ defaults: { ease: EASE } });

  if (bar) {
    tl.to(bar, { opacity: 1, y: 0, duration: 0.55, ease: EASE_SOFT }, 0);
  }

  if (logo) {
    tl.to(logo, { opacity: 1, x: 0, scale: 1, duration: 0.65, ease: EASE_EXPO }, 0.1);
  }

  if (logoImg) {
    tl.fromTo(
      logoImg,
      { filter: 'blur(6px)', opacity: 0.4 },
      { filter: 'blur(0px)', opacity: 1, duration: 0.55 },
      0.18
    );
  }

  menuItems.forEach((item, i) => {
    const at = 0.28 + i * 0.09;

    if (item.classList.contains('nav-link')) {
      tl.fromTo(
        item,
        { opacity: 0, y: -14, clipPath: 'inset(0 0 100% 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0)',
          duration: 0.55,
          ease: EASE_EXPO
        },
        at
      );
      return;
    }

    if (item.classList.contains('navbar-dropdown-wrapper')) {
      const btn = item.querySelector('.nav-link');
      const icon = item.querySelector('.dropdown-icon');
      gsap.set(item, { opacity: 1 });

      if (btn) {
        tl.fromTo(
          btn,
          { opacity: 0, y: -14, rotateX: -36 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.55, ease: EASE_SOFT },
          at
        );
      }
      if (icon) {
        tl.fromTo(
          icon,
          { opacity: 0, rotate: -90, scale: 0.5 },
          { opacity: 1, rotate: 0, scale: 1, duration: 0.4, ease: 'back.out(1.8)' },
          at + 0.12
        );
      }
      return;
    }

    if (item.classList.contains('btn-navbar')) {
      const icon = item.querySelector('.material-icons');
      tl.fromTo(
        item,
        { opacity: 0, scale: 0.86, y: -8 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.6)' },
        at
      );
      if (icon) {
        tl.fromTo(
          icon,
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.35 },
          at + 0.14
        );
      }
    }
  });

  if (mobileToggle) {
    tl.to(
      mobileToggle,
      { opacity: 1, scale: 1, rotate: 0, duration: 0.45, ease: 'back.out(1.7)' },
      0.25
    );
  }

  if (mobileIcon) {
    tl.fromTo(
      mobileIcon,
      { scale: 0.4, rotate: -45 },
      { scale: 1, rotate: 0, duration: 0.4, ease: 'back.out(2)' },
      0.32
    );
  }
}
