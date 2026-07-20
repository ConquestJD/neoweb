import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type PortafolioGsapCallbacks = {
  onGridComplete?: () => void;
  onStatsComplete?: () => void;
  onCtaComplete?: () => void;
};

const EASE = 'power3.out';
const EASE_SOFT = 'power2.out';
const EASE_EXPO = 'expo.out';

/**
 * Animaciones GSAP específicas por sección de la vista Portafolio.
 */
export function initPortafolioGsapAnimations(
  root: HTMLElement,
  callbacks: PortafolioGsapCallbacks = {}
): () => void {
  const ctx = gsap.context(() => {
    setupHero(root);
    setupGrid(root, callbacks.onGridComplete);
    setupStats(root, callbacks.onStatsComplete);
    setupCta(root, callbacks.onCtaComplete);
  }, root);

  requestAnimationFrame(() => ScrollTrigger.refresh());

  return () => ctx.revert();
}

function setupHero(root: HTMLElement) {
  const section = root.querySelector('.pf-hero');
  if (!section) return;

  const bg = section.querySelector('.pf-hero-bg');
  const overlay = section.querySelector('.pf-hero-overlay');
  const title = section.querySelector('.pf-hero-title');
  const desc = section.querySelector('.pf-hero-desc');
  const cta = section.querySelector('.pf-hero-cta');

  if (bg) gsap.set(bg, { scale: 1.16, opacity: 0.35 });
  if (overlay) gsap.set(overlay, { opacity: 0 });
  gsap.set([title, desc, cta].filter(Boolean), { opacity: 0 });

  const tl = gsap.timeline({ defaults: { ease: EASE } });

  if (bg) {
    tl.to(bg, { scale: 1, opacity: 1, duration: 1.75, ease: EASE_SOFT }, 0);
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
  if (desc) {
    tl.fromTo(
      desc,
      { opacity: 0, y: 22, filter: 'blur(6px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.85 },
      0.7
    );
  }
  if (cta) {
    tl.fromTo(
      cta,
      { opacity: 0, scale: 0.84, y: 18 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.7)' },
      0.95
    );
  }
}

function setupGrid(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.portfolio-section');
  if (!section) return;

  const marquee = section.querySelector('.portfolio-marquee');
  const label = section.querySelector('.portfolio-label');
  const intro = section.querySelector('.portfolio-intro');
  const cards = section.querySelectorAll('.portfolio-card');

  gsap.set([marquee, label, intro].filter(Boolean), { opacity: 0 });
  gsap.set(cards, { opacity: 0, y: 64, rotateX: 10 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: {
      trigger: section,
      start: 'top 72%',
      once: true
    },
    onComplete: () => onComplete?.()
  });

  if (marquee) {
    tl.fromTo(
      marquee,
      { opacity: 0, y: -28 },
      { opacity: 1, y: 0, duration: 0.85 },
      0
    );
  }
  if (label) {
    tl.fromTo(
      label,
      { opacity: 0, y: 36, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.95, ease: EASE_EXPO },
      0.12
    );
  }
  if (intro) {
    tl.fromTo(intro, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7 }, 0.28);
  }

  if (cards.length) {
    tl.to(
      cards,
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.85,
        stagger: 0.11,
        ease: EASE_SOFT
      },
      0.4
    );

    cards.forEach((card, i) => {
      const media = card.querySelector('.portfolio-card-media');
      const info = card.querySelector('.portfolio-card-info');
      const category = card.querySelector('.portfolio-card-category');
      const title = card.querySelector('.portfolio-card-title');
      const result = card.querySelector('.portfolio-card-result');
      const arrow = card.querySelector('.portfolio-card-arrow');
      const delay = 0.45 + i * 0.11;

      if (media) {
        gsap.fromTo(
          media,
          { scale: 1.2 },
          {
            scale: 1,
            duration: 1.25,
            ease: EASE_SOFT,
            delay,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (info) {
        gsap.fromTo(
          info,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: delay + 0.12,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (category) {
        gsap.fromTo(
          category,
          { opacity: 0, letterSpacing: '0.22em' },
          {
            opacity: 1,
            letterSpacing: '0.1em',
            duration: 0.5,
            delay: delay + 0.16,
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
            duration: 0.55,
            delay: delay + 0.22,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (result) {
        gsap.fromTo(
          result,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: delay + 0.28,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (arrow) {
        gsap.fromTo(
          arrow,
          { opacity: 0, rotate: -28, scale: 0.55 },
          {
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 0.55,
            delay: delay + 0.2,
            ease: 'back.out(1.9)',
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
    });
  }
}

function setupStats(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.pf-stats');
  if (!section) return;

  const label = section.querySelector('.pf-stats-label');
  const intro = section.querySelector('.pf-stats-intro');
  const cards = section.querySelectorAll('.pf-stat-card');

  gsap.set([label, intro].filter(Boolean), { opacity: 0, y: 28 });
  gsap.set(cards, { opacity: 0, y: 40, scale: 0.94 });

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
        duration: 0.7,
        stagger: 0.1,
        ease: 'back.out(1.35)'
      },
      0.28
    );

    cards.forEach((card, i) => {
      const icon = card.querySelector('.pf-stat-icon');
      const value = card.querySelector('.pf-stat-value');
      const text = card.querySelector('.pf-stat-label');
      const delay = 0.35 + i * 0.1;

      if (icon) {
        gsap.fromTo(
          icon,
          { opacity: 0, scale: 0.5, rotate: -20 },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.55,
            delay,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: section, start: 'top 74%', once: true }
          }
        );
      }
      if (value) {
        gsap.fromTo(
          value,
          { opacity: 0, y: 18, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            delay: delay + 0.08,
            ease: EASE_EXPO,
            scrollTrigger: { trigger: section, start: 'top 74%', once: true }
          }
        );
      }
      if (text) {
        gsap.fromTo(
          text,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            delay: delay + 0.16,
            scrollTrigger: { trigger: section, start: 'top 74%', once: true }
          }
        );
      }
    });
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
