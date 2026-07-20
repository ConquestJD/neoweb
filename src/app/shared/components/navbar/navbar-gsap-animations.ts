import gsap from 'gsap';

const EASE = 'power3.out';
const EASE_SOFT = 'power2.out';
const EASE_EXPO = 'expo.out';

export type PanelAnimationHandle = {
  kill: () => void;
};

/**
 * Animaciones GSAP del navbar: intro, megamenú, menú móvil y submenú.
 */
export function initNavbarIntro(root: HTMLElement): () => void {
  const ctx = gsap.context(() => {
    setupIntro(root);
  }, root);

  return () => ctx.revert();
}

export function playMegamenuOpen(root: HTMLElement): PanelAnimationHandle | null {
  const menu = root.querySelector('.services-megamenu') as HTMLElement | null;
  if (!menu) return null;

  const ctx = gsap.context(() => {
    const eyebrow = menu.querySelector('.megamenu-eyebrow');
    const rows = menu.querySelectorAll('.megamenu-row');
    const cta = menu.querySelector('.megamenu-cta');
    const preview = menu.querySelector('.megamenu-preview');
    const activeBg = menu.querySelector('.megamenu-preview-bg.is-active');
    const metaIndex = menu.querySelector('.megamenu-preview-index');
    const metaName = menu.querySelector('.megamenu-preview-name');
    const metaShort = menu.querySelector('.megamenu-preview-short');

    gsap.set(menu, { opacity: 0, y: -12, xPercent: -50 });
    gsap.set([eyebrow, cta].filter(Boolean), { opacity: 0, y: 8 });
    gsap.set(rows, { opacity: 0, y: 10 });
    if (preview) gsap.set(preview, { clipPath: 'inset(0 0 0 100%)' });
    gsap.set([metaIndex, metaName, metaShort].filter(Boolean), { opacity: 0, y: 12 });

    const tl = gsap.timeline({
      defaults: { ease: EASE },
      onComplete: () => {
        // Deja el estado final limpio para hovers CSS
        gsap.set([eyebrow, cta, ...Array.from(rows)].filter(Boolean), {
          clearProps: 'opacity,transform,letterSpacing'
        });
        gsap.set(menu, { clearProps: 'opacity,y' });
        // Mantener xPercent para el centrado
        gsap.set(menu, { xPercent: -50 });
        if (preview) gsap.set(preview, { clearProps: 'clipPath' });
        gsap.set([metaIndex, metaName, metaShort].filter(Boolean), {
          clearProps: 'opacity,transform'
        });
      }
    });

    tl.to(menu, { opacity: 1, y: 0, xPercent: -50, duration: 0.35, ease: EASE_SOFT }, 0);

    if (eyebrow) {
      tl.fromTo(
        eyebrow,
        { opacity: 0, y: 8, letterSpacing: '0.28em' },
        { opacity: 1, y: 0, letterSpacing: '0.18em', duration: 0.4 },
        0.08
      );
    }

    rows.forEach((row, i) => {
      const index = row.querySelector('.megamenu-row-index');
      const name = row.querySelector('.megamenu-row-name');
      const at = 0.14 + i * 0.045;

      tl.fromTo(
        row,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: EASE_SOFT },
        at
      );

      if (index) {
        tl.fromTo(
          index,
          { opacity: 0, x: -8 },
          { opacity: 1, x: 0, duration: 0.3 },
          at + 0.02
        );
      }
      if (name) {
        tl.fromTo(
          name,
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.35 },
          at + 0.04
        );
      }
    });

    if (cta) {
      tl.fromTo(
        cta,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.35 },
        0.14 + rows.length * 0.045
      );
    }

    if (preview) {
      tl.to(
        preview,
        { clipPath: 'inset(0 0 0 0%)', duration: 0.55, ease: EASE_EXPO },
        0.12
      );
    }

    if (activeBg) {
      tl.fromTo(
        activeBg,
        { scale: 1.1 },
        { scale: 1, duration: 0.8, ease: EASE_SOFT },
        0.18
      );
    }

    if (metaIndex) tl.to(metaIndex, { opacity: 1, y: 0, duration: 0.35 }, 0.35);
    if (metaName) tl.to(metaName, { opacity: 1, y: 0, duration: 0.4 }, 0.4);
    if (metaShort) tl.to(metaShort, { opacity: 1, y: 0, duration: 0.35 }, 0.48);
  }, menu);

  return {
    kill: () => ctx.revert()
  };
}

export function playMobileMenuOpen(root: HTMLElement): PanelAnimationHandle | null {
  const panel = root.querySelector('.mobile-menu-glass') as HTMLElement | null;
  if (!panel) return null;

  const ctx = gsap.context(() => {
    const links = panel.querySelectorAll('.nav-link-mobile');
    const cta = panel.querySelector('.btn-mobile-full');

    gsap.set(panel, { opacity: 0, y: -16, scaleY: 0.96, transformOrigin: 'top center' });
    gsap.set(links, { opacity: 0, x: -18 });
    gsap.set(cta, { opacity: 0, y: 12, scale: 0.94 });

    const tl = gsap.timeline({
      defaults: { ease: EASE },
      onComplete: () => {
        gsap.set([panel, cta, ...Array.from(links)].filter(Boolean), {
          clearProps: 'opacity,transform,scale,scaleY'
        });
      }
    });

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

      tl.fromTo(
        link,
        { opacity: 0, x: -18 },
        { opacity: 1, x: 0, duration: 0.45, ease: EASE_SOFT },
        at
      );

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
      tl.fromTo(
        cta,
        { opacity: 0, y: 12, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'back.out(1.5)' },
        0.12 + links.length * 0.07
      );
    }
  }, panel);

  return {
    kill: () => ctx.revert()
  };
}

export function playMobileSubmenuOpen(root: HTMLElement): PanelAnimationHandle | null {
  const submenu = root.querySelector('.mobile-services-submenu') as HTMLElement | null;
  if (!submenu) return null;

  const ctx = gsap.context(() => {
    const items = submenu.querySelectorAll('.mobile-submenu-item');

    gsap.set(submenu, { opacity: 0, height: 0, overflow: 'hidden' });
    gsap.set(items, { opacity: 0, y: 10 });

    const tl = gsap.timeline({
      defaults: { ease: EASE },
      onComplete: () => {
        gsap.set(submenu, { clearProps: 'opacity,height,overflow' });
        gsap.set(items, { clearProps: 'opacity,transform' });
      }
    });

    tl.to(submenu, { opacity: 1, height: 'auto', duration: 0.35, ease: EASE_SOFT }, 0);

    items.forEach((item, i) => {
      const index = item.querySelector('.mobile-submenu-index');
      const name = item.querySelector('.mobile-submenu-name');
      const short = item.querySelector('.mobile-submenu-short');
      const at = 0.08 + i * 0.05;

      tl.fromTo(
        item,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4 },
        at
      );

      if (index) {
        tl.fromTo(
          index,
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.28 },
          at + 0.04
        );
      }
      if (name) {
        tl.fromTo(
          name,
          { opacity: 0, x: -8 },
          { opacity: 1, x: 0, duration: 0.32 },
          at + 0.06
        );
      }
      if (short) {
        tl.fromTo(
          short,
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.28 },
          at + 0.1
        );
      }
    });
  }, submenu);

  return {
    kill: () => ctx.revert()
  };
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
