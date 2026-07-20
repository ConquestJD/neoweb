import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type NosotrosGsapCallbacks = {
  onHistoriaComplete?: () => void;
  onPurposeComplete?: () => void;
  onValoresComplete?: () => void;
  onTechComplete?: () => void;
  onCtaComplete?: () => void;
};

const EASE = 'power3.out';
const EASE_SOFT = 'power2.out';
const EASE_EXPO = 'expo.out';

/**
 * Animaciones GSAP específicas por sección de la vista Nosotros.
 */
export function initNosotrosGsapAnimations(
  root: HTMLElement,
  callbacks: NosotrosGsapCallbacks = {}
): () => void {
  const ctx = gsap.context(() => {
    setupHero(root);
    setupHistoria(root, callbacks.onHistoriaComplete);
    setupPurpose(root, callbacks.onPurposeComplete);
    setupValores(root, callbacks.onValoresComplete);
    setupTech(root, callbacks.onTechComplete);
    setupCta(root, callbacks.onCtaComplete);
  }, root);

  requestAnimationFrame(() => ScrollTrigger.refresh());

  return () => ctx.revert();
}

function setupHero(root: HTMLElement) {
  const section = root.querySelector('.nos-hero');
  if (!section) return;

  const bg = section.querySelector('.nos-hero-bg');
  const overlay = section.querySelector('.nos-hero-overlay');
  const title = section.querySelector('.nos-hero-title');
  const cta = section.querySelector('.nos-hero-cta');
  const desc = section.querySelector('.nos-hero-desc');

  if (bg) gsap.set(bg, { scale: 1.14, opacity: 0.35 });
  if (overlay) gsap.set(overlay, { opacity: 0 });
  gsap.set([title, cta, desc].filter(Boolean), { opacity: 0 });

  const tl = gsap.timeline({ defaults: { ease: EASE } });

  if (bg) {
    tl.to(bg, { scale: 1.02, opacity: 1, duration: 1.8, ease: EASE_SOFT }, 0);
  }
  if (overlay) {
    tl.to(overlay, { opacity: 1, duration: 1.15 }, 0.1);
  }
  if (title) {
    tl.fromTo(
      title,
      { opacity: 0, y: 56, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1.15, ease: EASE_EXPO },
      0.35
    );
  }
  if (cta) {
    tl.fromTo(
      cta,
      { opacity: 0, scale: 0.84, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.7)' },
      0.75
    );
  }
  if (desc) {
    tl.fromTo(
      desc,
      { opacity: 0, y: 20, filter: 'blur(6px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.85 },
      0.95
    );
  }
}

function setupHistoria(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.nos-historia');
  if (!section) return;

  const label = section.querySelector('.nos-label');
  const intro = section.querySelector('.nos-intro');
  const paragraphs = section.querySelectorAll('.nos-historia-copy > p');
  const stats = section.querySelectorAll('.nos-stat');
  const figure = section.querySelector('.nos-figure');
  const img = section.querySelector('.nos-figure img');

  gsap.set([label, intro, figure].filter(Boolean), { opacity: 0 });
  gsap.set(paragraphs, { opacity: 0, y: 24 });
  gsap.set(stats, { opacity: 0, y: 18 });
  if (img) gsap.set(img, { scale: 1.12 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: {
      trigger: section,
      start: 'top 72%',
      once: true
    },
    onComplete: () => onComplete?.()
  });

  if (label) {
    tl.fromTo(
      label,
      { opacity: 0, y: 36, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.95, ease: EASE_EXPO },
      0
    );
  }
  if (intro) {
    tl.fromTo(intro, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7 }, 0.12);
  }
  if (paragraphs.length) {
    tl.to(
      paragraphs,
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
      0.28
    );
  }
  if (stats.length) {
    tl.to(
      stats,
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: 'back.out(1.4)' },
      0.5
    );
  }
  if (figure) {
    tl.fromTo(
      figure,
      { opacity: 0, x: 48, rotateY: -8 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: EASE_SOFT },
      0.35
    );
  }
  if (img) {
    tl.to(img, { scale: 1, duration: 1.25, ease: EASE_SOFT }, 0.35);
  }
}

function setupPurpose(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.nos-purpose');
  if (!section) return;

  const label = section.querySelector('.nos-label');
  const intro = section.querySelector('.nos-intro');
  const cards = section.querySelectorAll('.nos-purpose-card');

  gsap.set([label, intro].filter(Boolean), { opacity: 0, y: 28 });
  gsap.set(cards, { opacity: 0, y: 48 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: {
      trigger: section,
      start: 'top 72%',
      once: true
    },
    onComplete: () => onComplete?.()
  });

  if (label) {
    tl.fromTo(
      label,
      { opacity: 0, y: 34, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: EASE_EXPO },
      0
    );
  }
  if (intro) {
    tl.to(intro, { opacity: 1, y: 0, duration: 0.65 }, 0.12);
  }
  if (cards.length) {
    tl.to(
      cards,
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.14, ease: EASE_SOFT },
      0.28
    );

    cards.forEach((card, i) => {
      const title = card.querySelector('h3');
      const desc = card.querySelector('p');
      const points = card.querySelectorAll('li');
      const delay = 0.35 + i * 0.14;

      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            delay,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (desc) {
        gsap.fromTo(
          desc,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            delay: delay + 0.08,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (points.length) {
        gsap.fromTo(
          points,
          { opacity: 0, x: -12 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.06,
            delay: delay + 0.18,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
    });
  }
}

function setupValores(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.nos-valores');
  if (!section) return;

  const label = section.querySelector('.nos-label');
  const intro = section.querySelector('.nos-intro');
  const items = section.querySelectorAll('.nos-valor-item');

  gsap.set([label, intro].filter(Boolean), { opacity: 0, y: 28 });
  gsap.set(items, { opacity: 0, y: 36 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: {
      trigger: section,
      start: 'top 72%',
      once: true
    },
    onComplete: () => onComplete?.()
  });

  if (label) {
    tl.fromTo(
      label,
      { opacity: 0, y: 34, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: EASE_EXPO },
      0
    );
  }
  if (intro) {
    tl.to(intro, { opacity: 1, y: 0, duration: 0.65 }, 0.12);
  }
  if (items.length) {
    tl.to(
      items,
      { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: EASE_SOFT },
      0.28
    );

    items.forEach((item, i) => {
      const number = item.querySelector('.nos-valor-number');
      const title = item.querySelector('h3');
      const desc = item.querySelector('p');
      const delay = 0.35 + i * 0.1;

      if (number) {
        gsap.fromTo(
          number,
          { opacity: 0, x: -20, rotate: -8 },
          {
            opacity: 1,
            x: 0,
            rotate: 0,
            duration: 0.5,
            delay,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: delay + 0.06,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (desc) {
        gsap.fromTo(
          desc,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            delay: delay + 0.12,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
    });
  }
}

function setupTech(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.nos-tech');
  if (!section) return;

  const label = section.querySelector('.nos-label');
  const intro = section.querySelector('.nos-intro');
  const cards = section.querySelectorAll('.nos-tech-card');

  gsap.set([label, intro].filter(Boolean), { opacity: 0, y: 28 });
  gsap.set(cards, { opacity: 0, y: 28, scale: 0.9 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: {
      trigger: section,
      start: 'top 74%',
      once: true
    },
    onComplete: () => onComplete?.()
  });

  if (label) {
    tl.fromTo(
      label,
      { opacity: 0, y: 34, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: EASE_EXPO },
      0
    );
  }
  if (intro) {
    tl.to(intro, { opacity: 1, y: 0, duration: 0.65 }, 0.12);
  }
  if (cards.length) {
    tl.to(
      cards,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: { each: 0.045, from: 'start' },
        ease: 'back.out(1.5)'
      },
      0.28
    );

    const logos = section.querySelectorAll('.nos-tech-logo');
    if (logos.length) {
      gsap.fromTo(
        logos,
        { opacity: 0, scale: 0.6, rotate: -12 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.5,
          stagger: 0.045,
          delay: 0.35,
          ease: 'back.out(1.8)',
          scrollTrigger: { trigger: section, start: 'top 74%', once: true }
        }
      );
    }
  }
}

function setupCta(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.cta-section');
  if (!section) return;

  const outline = section.querySelector('.cta-headline-outline');
  const magnet = section.querySelector('.cta-magnet-wrap');
  const btn = section.querySelector('.cta-magnet-btn');
  const secondary = section.querySelector('.cta-link-secondary');

  gsap.set([outline, magnet, secondary].filter(Boolean), { opacity: 0 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
      once: true
    },
    onComplete: () => onComplete?.()
  });

  if (magnet) {
    tl.fromTo(
      magnet,
      { opacity: 0, scale: 0.78 },
      { opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(1.6)' },
      0
    );
  }
  if (btn) {
    tl.fromTo(
      btn,
      { boxShadow: '0 0 0 0 rgba(0,0,0,0)' },
      {
        boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
        duration: 0.45,
        yoyo: true,
        repeat: 1
      },
      0.15
    );
  }
  if (outline) {
    tl.fromTo(
      outline,
      { opacity: 0, y: 32, filter: 'blur(6px)', letterSpacing: '0.06em' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        letterSpacing: '0.01em',
        duration: 0.85,
        ease: EASE_EXPO
      },
      0.05
    );
  }
  if (secondary) {
    tl.fromTo(
      secondary,
      { opacity: 0, y: 14, x: -6 },
      { opacity: 1, y: 0, x: 0, duration: 0.45 },
      0.2
    );
  }
}
