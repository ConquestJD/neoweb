import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type ServicioGsapCallbacks = {
  onSectionVisible?: (sectionId: string) => void;
  onCtaComplete?: () => void;
};

const EASE = 'power3.out';
const EASE_SOFT = 'power2.out';
const EASE_EXPO = 'expo.out';

/**
 * Animaciones GSAP específicas por sección de la vista de servicios.
 * Devuelve cleanup (ctx.revert).
 */
export function initServicioGsapAnimations(
  root: HTMLElement,
  callbacks: ServicioGsapCallbacks = {}
): () => void {
  const ctx = gsap.context(() => {
    setupHero(root);
    setupPlans(root, () => callbacks.onSectionVisible?.('plans'));
    setupIncludes(root, () => callbacks.onSectionVisible?.('includes'));
    setupProcess(root, () => callbacks.onSectionVisible?.('process'));
    setupCta(root, () => {
      callbacks.onSectionVisible?.('cta');
      callbacks.onCtaComplete?.();
    });
  }, root);

  requestAnimationFrame(() => ScrollTrigger.refresh());

  return () => ctx.revert();
}

function setupHero(root: HTMLElement) {
  const section = root.querySelector('.svc-hero');
  if (!section) return;

  const bg = section.querySelector('.svc-hero-bg');
  const overlay = section.querySelector('.svc-hero-overlay');
  const eyebrow = section.querySelector('.svc-hero-eyebrow');
  const title = section.querySelector('.svc-hero-title');
  const highlight = section.querySelector('.svc-hero-highlight');
  const cta = section.querySelector('.svc-hero-cta');
  const desc = section.querySelector('.svc-hero-desc');

  if (bg) gsap.set(bg, { scale: 1.14, opacity: 0.25 });
  if (overlay) gsap.set(overlay, { opacity: 0 });
  gsap.set([eyebrow, title, cta, desc].filter(Boolean), { opacity: 0 });

  const tl = gsap.timeline({ defaults: { ease: EASE } });

  if (bg) {
    tl.to(bg, { scale: 1, opacity: 1, duration: 1.7, ease: EASE_SOFT }, 0);
  }
  if (overlay) {
    tl.to(overlay, { opacity: 1, duration: 1.1 }, 0.1);
  }
  if (eyebrow) {
    tl.fromTo(
      eyebrow,
      { opacity: 0, y: 18, letterSpacing: '0.28em' },
      { opacity: 1, y: 0, letterSpacing: '0.14em', duration: 0.7 },
      0.25
    );
  }
  if (title) {
    tl.fromTo(
      title,
      { opacity: 0, y: 52, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: EASE_EXPO },
      0.4
    );
  }
  if (highlight) {
    tl.fromTo(
      highlight,
      { opacity: 0.35, x: -12 },
      { opacity: 1, x: 0, duration: 0.65 },
      0.75
    );
  }
  if (cta) {
    tl.fromTo(
      cta,
      { opacity: 0, scale: 0.84, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.7)' },
      0.85
    );
  }
  if (desc) {
    tl.fromTo(
      desc,
      { opacity: 0, y: 18, filter: 'blur(6px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 },
      1.0
    );
  }
}

function setupPlans(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.svc-plans');
  if (!section) return;

  const label = section.querySelector('.svc-label');
  const intro = section.querySelector('.svc-intro');
  const highlightsTitle = section.querySelector('.svc-plans-highlights-title');
  const highlights = section.querySelectorAll('.svc-plans-highlights li');
  const cards = section.querySelectorAll('.svc-plan-card');
  const benefits = section.querySelector('.svc-plans-benefits');
  const benefitItems = section.querySelectorAll('.svc-plans-benefits-list li');
  const guarantee = section.querySelector('.svc-plans-guarantee');
  const compareHead = section.querySelector('.svc-plans-compare-head');
  const compareTable = section.querySelector('.svc-plans-compare-scroll');
  const compareRows = section.querySelectorAll('.svc-compare-table tbody tr');

  const compactPlans = window.matchMedia('(max-width: 900px)').matches;

  gsap.set([label, intro, highlightsTitle, benefits, guarantee, compareHead, compareTable].filter(Boolean), {
    opacity: 0
  });
  gsap.set(highlights, { opacity: 0, y: 14 });
  gsap.set(cards, compactPlans ? { opacity: 0, y: 28 } : { opacity: 0, y: 56, rotateX: 10 });
  gsap.set(benefitItems, { opacity: 0, y: 16 });
  gsap.set(compareRows, { opacity: 0, x: -12 });

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
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: EASE_EXPO },
      0
    );
  }
  if (intro) {
    tl.fromTo(intro, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7 }, 0.12);
  }
  if (highlightsTitle) {
    tl.to(highlightsTitle, { opacity: 1, duration: 0.5 }, 0.2);
  }
  if (highlights.length) {
    tl.to(
      highlights,
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.05 },
      0.28
    );
  }
  if (cards.length) {
    tl.to(
      cards,
      compactPlans
        ? { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: EASE_SOFT }
        : {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: EASE_SOFT
          },
      0.4
    );

    cards.forEach((card, i) => {
      const name = card.querySelector('.svc-plan-name');
      const price = card.querySelector('.svc-plan-price');
      const tag = card.querySelector('.svc-plan-tag');
      const benefit = card.querySelector('.svc-plan-benefit');
      const features = card.querySelectorAll('.svc-plan-features li');
      const cta = card.querySelector('.svc-plan-cta');
      const delay = 0.45 + i * 0.12;

      if (name) {
        gsap.fromTo(
          name,
          { opacity: 0, letterSpacing: '0.28em' },
          {
            opacity: 1,
            letterSpacing: '0.14em',
            duration: 0.55,
            delay,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (price) {
        gsap.fromTo(
          price,
          { opacity: 0, y: 20, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            delay: delay + 0.08,
            ease: 'back.out(1.4)',
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (tag) {
        gsap.fromTo(
          tag,
          { opacity: 0, scale: 0.7, y: -8 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.45,
            delay: delay + 0.05,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (benefit) {
        gsap.fromTo(
          benefit,
          { opacity: 0, x: -16 },
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            delay: delay + 0.15,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (features.length) {
        gsap.fromTo(
          features,
          { opacity: 0, x: -10 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.04,
            delay: delay + 0.2,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (cta) {
        gsap.fromTo(
          cta,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: delay + 0.35,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
    });
  }

  if (benefits) {
    tl.fromTo(
      benefits,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.75 },
      '-=0.2'
    );
  }
  if (benefitItems.length) {
    tl.to(
      benefitItems,
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.05 },
      '-=0.35'
    );
  }
  if (guarantee) {
    tl.fromTo(
      guarantee,
      { opacity: 0, y: 20, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7 },
      '-=0.15'
    );
  }
  if (compareHead) {
    tl.fromTo(
      compareHead,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.65 },
      '-=0.1'
    );
  }
  if (compareTable) {
    tl.fromTo(
      compareTable,
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 0.75 },
      '-=0.3'
    );
  }
  if (compareRows.length) {
    tl.to(
      compareRows,
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.035 },
      '-=0.45'
    );
  }
}

function setupIncludes(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.svc-includes');
  if (!section) return;

  const label = section.querySelector('.svc-label');
  const intro = section.querySelector('.svc-intro');
  const items = section.querySelectorAll('.svc-list-item');

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
      { opacity: 1, y: 0, duration: 0.65, stagger: 0.08, ease: EASE_SOFT },
      0.25
    );

    items.forEach((item, i) => {
      const number = item.querySelector('.svc-list-number');
      const title = item.querySelector('.svc-list-title');
      const desc = item.querySelector('.svc-list-desc');
      const arrow = item.querySelector('.svc-list-arrow');
      const delay = 0.3 + i * 0.08;

      if (number) {
        gsap.fromTo(
          number,
          { opacity: 0, x: -16 },
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
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
            delay: delay + 0.05,
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
      if (arrow) {
        gsap.fromTo(
          arrow,
          { opacity: 0, rotate: -20, scale: 0.6 },
          {
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 0.45,
            delay: delay + 0.18,
            ease: 'back.out(1.8)',
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
    });
  }
}

function setupProcess(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.svc-process');
  if (!section) return;

  const label = section.querySelector('.svc-label');
  const intro = section.querySelector('.svc-intro');
  const wrap = section.querySelector('.svc-process-accordion-wrap');
  const panels = section.querySelectorAll('.svc-process-panel');
  const numbers = section.querySelectorAll('.svc-process-panel-number');
  const bgLayers = section.querySelectorAll('.svc-process-accordion-bg-layer');

  gsap.set([label, intro].filter(Boolean), { opacity: 0, y: 28 });
  if (wrap) gsap.set(wrap, { opacity: 0, y: 48 });
  gsap.set(panels, { opacity: 0.3 });
  gsap.set(numbers, { opacity: 0, y: 14 });

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
  if (wrap) {
    tl.to(wrap, { opacity: 1, y: 0, duration: 0.9, ease: EASE_SOFT }, 0.25);
  }
  if (panels.length) {
    tl.to(panels, { opacity: 1, duration: 0.7, stagger: 0.08 }, 0.4);
  }
  if (numbers.length) {
    tl.to(numbers, { opacity: 1, y: 0, duration: 0.5, stagger: 0.07 }, 0.5);
  }

  if (bgLayers.length && wrap) {
    gsap.fromTo(
      bgLayers,
      { scale: 1.1 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.15
        }
      }
    );
  }
}

function setupCta(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.svc-cta');
  if (!section) return;

  const outline = section.querySelector('.svc-cta-outline');
  const title = section.querySelector('.svc-cta-title');
  const desc = section.querySelector('.svc-cta-desc');
  const magnet = section.querySelector('.svc-magnet-wrap');
  const btn = section.querySelector('.svc-magnet-btn');
  const link = section.querySelector('.svc-cta-link');

  gsap.set([outline, title, desc, magnet, link].filter(Boolean), { opacity: 0 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
      once: true
    },
    onComplete: () => onComplete?.()
  });

  // Botón primero: no esperar a outline/título/desc
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
        boxShadow: '0 18px 40px rgba(0,0,0,0.22)',
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
      { opacity: 0, y: 28, filter: 'blur(6px)', letterSpacing: '0.06em' },
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
  if (title) {
    tl.fromTo(
      title,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.1
    );
  }
  if (desc) {
    tl.fromTo(desc, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, 0.18);
  }
  if (link) {
    tl.fromTo(
      link,
      { opacity: 0, y: 12, x: -6 },
      { opacity: 1, y: 0, x: 0, duration: 0.4 },
      0.22
    );
  }
}
