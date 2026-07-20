import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EASE = 'power3.out';
const EASE_SOFT = 'power2.out';
const EASE_EXPO = 'expo.out';

/**
 * Animaciones GSAP específicas por bloque del footer global.
 */
export function initFooterGsapAnimations(root: HTMLElement): () => void {
  const ctx = gsap.context(() => {
    setupTop(root);
    setupNav(root);
    setupServices(root);
    setupWordmark(root);
    setupMeta(root);
  }, root);

  requestAnimationFrame(() => ScrollTrigger.refresh());

  return () => ctx.revert();
}

function setupTop(root: HTMLElement) {
  const section = root.querySelector('.site-footer-top');
  if (!section) return;

  const cta = section.querySelector('.site-footer-cta');
  const contacts = section.querySelectorAll('.site-footer-contact-link');

  gsap.set(cta, { opacity: 0, y: 36, clipPath: 'inset(0 0 100% 0)' });
  gsap.set(contacts, { opacity: 0, y: 16, x: 12 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: { trigger: section, start: 'top 88%', once: true }
  });

  if (cta) {
    tl.fromTo(
      cta,
      { opacity: 0, y: 36, clipPath: 'inset(0 0 100% 0)' },
      {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0 0 0% 0)',
        duration: 0.95,
        ease: EASE_EXPO
      },
      0
    );
  }

  if (contacts.length) {
    tl.to(
      contacts,
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: EASE_SOFT
      },
      0.28
    );
  }
}

function setupNav(root: HTMLElement) {
  const section = root.querySelector('.site-footer-nav');
  if (!section) return;

  const items = section.querySelectorAll('.site-footer-nav-item');
  gsap.set(items, { opacity: 0 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: { trigger: section, start: 'top 90%', once: true }
  });

  items.forEach((item, i) => {
    const index = item.querySelector('.site-footer-nav-index');
    const label = item.querySelector('.site-footer-nav-label');
    const arrow = item.querySelector('.site-footer-nav-arrow');
    const at = i * 0.1;

    gsap.set(item, { opacity: 1 });
    gsap.set([index, label].filter(Boolean), { opacity: 0 });

    if (index) {
      tl.fromTo(
        index,
        { opacity: 0, x: -18, rotate: -6 },
        { opacity: 1, x: 0, rotate: 0, duration: 0.45, ease: 'back.out(1.4)' },
        at
      );
    }

    if (label) {
      tl.fromTo(
        label,
        { opacity: 0, y: 22, clipPath: 'inset(0 0 100% 0)' },
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0)',
          duration: 0.7,
          ease: EASE_EXPO
        },
        at + 0.06
      );
    }

    if (arrow) {
      tl.fromTo(
        arrow,
        { opacity: 0, x: -10, y: 10, rotate: -20, scale: 0.6 },
        {
          opacity: 0.55,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 0.45,
          ease: 'back.out(1.8)'
        },
        at + 0.22
      );
      // Vuelve al estado hover-ready (oculto) para no pelear con CSS hover
      tl.to(arrow, { opacity: 0, x: -8, y: 8, rotate: -15, duration: 0.25 }, at + 0.55);
    }

    tl.fromTo(
      item,
      { x: -8 },
      { x: 0, duration: 0.55, ease: EASE_SOFT },
      at
    );
  });
}

function setupServices(root: HTMLElement) {
  const section = root.querySelector('.site-footer-services');
  if (!section) return;

  const eyebrow = section.querySelector('.site-footer-eyebrow');
  const links = section.querySelectorAll('.site-footer-service-link');

  gsap.set(eyebrow, { opacity: 0, y: 16, letterSpacing: '0.28em' });
  gsap.set(links, { opacity: 0, x: -16 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: { trigger: section, start: 'top 90%', once: true }
  });

  if (eyebrow) {
    tl.to(
      eyebrow,
      {
        opacity: 1,
        y: 0,
        letterSpacing: '0.16em',
        duration: 0.65,
        ease: EASE_EXPO
      },
      0
    );
  }

  if (links.length) {
    tl.to(
      links,
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: {
          each: 0.06,
          from: 'start'
        },
        ease: EASE_SOFT
      },
      0.18
    );

    links.forEach((link, i) => {
      const arrow = link.querySelector('.site-footer-service-arrow');
      const label = link.querySelector('span:not(.material-icons)');
      const delay = 0.22 + i * 0.06;

      if (label) {
        gsap.fromTo(
          label,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            delay,
            ease: EASE,
            scrollTrigger: { trigger: section, start: 'top 90%', once: true }
          }
        );
      }

      if (arrow) {
        gsap.fromTo(
          arrow,
          { opacity: 0, x: -6, y: 6, scale: 0.5 },
          {
            opacity: 0.5,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.35,
            delay: delay + 0.1,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: section, start: 'top 90%', once: true },
            onComplete: () => {
              gsap.set(arrow, { clearProps: 'opacity,transform' });
            }
          }
        );
      }
    });
  }
}

function setupWordmark(root: HTMLElement) {
  const section = root.querySelector('.site-footer-wordmark-wrap');
  if (!section) return;

  const wordmark = section.querySelector('.site-footer-wordmark');
  if (!wordmark) return;

  gsap.set(wordmark, {
    opacity: 0,
    y: '28%',
    scale: 1.08,
    letterSpacing: '0.08em',
    filter: 'blur(6px)'
  });

  const tl = gsap.timeline({
    defaults: { ease: EASE_SOFT },
    scrollTrigger: { trigger: section, start: 'top 92%', once: true },
    onComplete: () => {
      gsap.set(wordmark, {
        clearProps: 'opacity,filter,letterSpacing,scale,transform,webkitTextStrokeColor'
      });
      wordmark.classList.add('is-live');
    }
  });

  tl.fromTo(
    wordmark,
    {
      opacity: 0,
      y: '28%',
      scale: 1.08,
      letterSpacing: '0.08em',
      filter: 'blur(6px)'
    },
    {
      opacity: 1,
      y: '12%',
      scale: 1,
      letterSpacing: '-0.04em',
      filter: 'blur(0px)',
      duration: 1.15,
      ease: EASE_EXPO
    },
    0
  );

  // Pulso breve del stroke al landing
  tl.fromTo(
    wordmark,
    { webkitTextStrokeColor: 'rgba(255,255,255,0.06)' },
    {
      webkitTextStrokeColor: 'rgba(255,255,255,0.22)',
      duration: 0.55,
      yoyo: true,
      repeat: 1,
      ease: EASE_SOFT
    },
    0.55
  );
}

function setupMeta(root: HTMLElement) {
  const section = root.querySelector('.site-footer-meta');
  if (!section) return;

  const copy = section.querySelector('.site-footer-copy');
  const legal = section.querySelectorAll('.site-footer-legal-link');

  gsap.set(section, { borderTopColor: 'rgba(255,255,255,0)' });
  gsap.set(copy, { opacity: 0, y: 12 });
  gsap.set(legal, { opacity: 0, y: 10 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: { trigger: section, start: 'top 95%', once: true }
  });

  tl.to(
    section,
    {
      borderTopColor: 'rgba(255,255,255,0.08)',
      duration: 0.7,
      ease: EASE_SOFT
    },
    0
  );

  if (copy) {
    tl.to(copy, { opacity: 1, y: 0, duration: 0.5 }, 0.12);
  }

  if (legal.length) {
    tl.to(
      legal,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.08,
        ease: EASE_SOFT
      },
      0.22
    );
  }
}
