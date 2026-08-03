import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type PsGsapCallbacks = {
  onSectionVisible?: (sectionId: string) => void;
  onCtaComplete?: () => void;
};

const EASE = 'power3.out';
const EASE_SOFT = 'power2.out';
const EASE_EXPO = 'expo.out';

/**
 * Animaciones GSAP específicas por sección de portafolio seleccionado.
 */
export function initPortafolioSeleccionadoGsapAnimations(
  root: HTMLElement,
  callbacks: PsGsapCallbacks = {}
): () => void {
  const mark = (id: string) => () => callbacks.onSectionVisible?.(id);

  const ctx = gsap.context(() => {
    setupHero(root);
    setupOverview(root, mark('overview'));
    setupImpact(root, mark('impact'));
    setupStory(root, mark('story'));
    setupFeatures(root, mark('features'));
    setupBusiness(root, mark('business'));
    setupGallery(root, mark('gallery'));
    setupStack(root, mark('stack'));
    setupPlans(root, mark('plans'));
    setupRelated(root, mark('related'));
    setupCta(root, () => {
      callbacks.onSectionVisible?.('cta');
      callbacks.onCtaComplete?.();
    });
  }, root);

  requestAnimationFrame(() => ScrollTrigger.refresh());

  return () => ctx.revert();
}

function setupHero(root: HTMLElement) {
  const section = root.querySelector('.ps-hero');
  if (!section) return;

  const bg = section.querySelector('.ps-hero-bg');
  const overlay = section.querySelector('.ps-hero-overlay');
  const back = section.querySelector('.ps-back');
  const eyebrow = section.querySelector('.ps-hero-eyebrow');
  const cat = section.querySelector('.ps-hero-cat');
  const title = section.querySelector('.ps-hero-title');
  const desc = section.querySelector('.ps-hero-desc');
  const actions = section.querySelector('.ps-hero-actions');
  const media = section.querySelector('.ps-hero-media');
  const img = section.querySelector('.ps-hero-media img');

  if (bg) gsap.set(bg, { opacity: 0 });
  if (overlay) gsap.set(overlay, { opacity: 0 });
  gsap.set([back, eyebrow, cat, title, desc, actions, media].filter(Boolean), { opacity: 0 });
  if (img) gsap.set(img, { scale: 1.12 });

  const tl = gsap.timeline({ defaults: { ease: EASE } });

  if (bg) tl.to(bg, { opacity: 1, duration: 0.9, ease: EASE_SOFT }, 0);
  if (overlay) tl.to(overlay, { opacity: 1, duration: 0.8 }, 0.05);
  if (back) {
    tl.fromTo(back, { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.55 }, 0.2);
  }
  if (eyebrow) {
    tl.fromTo(
      eyebrow,
      { opacity: 0, y: 14, letterSpacing: '0.28em' },
      { opacity: 1, y: 0, letterSpacing: '0.14em', duration: 0.6 },
      0.3
    );
  }
  if (cat) tl.fromTo(cat, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, 0.4);
  if (title) {
    tl.fromTo(
      title,
      { opacity: 0, y: 48, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1.05, ease: EASE_EXPO },
      0.45
    );
  }
  if (desc) {
    tl.fromTo(
      desc,
      { opacity: 0, y: 18, filter: 'blur(5px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75 },
      0.7
    );
  }
  if (actions) {
    tl.fromTo(
      actions,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.4)' },
      0.9
    );
  }
  if (media) {
    tl.fromTo(
      media,
      { opacity: 0, x: 40, rotateY: -6 },
      { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: EASE_SOFT },
      0.5
    );
  }
  if (img) tl.to(img, { scale: 1, duration: 1.25, ease: EASE_SOFT }, 0.5);
}

function headerReveal(
  section: Element,
  tl: gsap.core.Timeline,
  light = false
) {
  const label = section.querySelector(light ? '.ps-label' : '.ps-label');
  const intro = section.querySelector('.ps-intro');
  gsap.set([label, intro].filter(Boolean), { opacity: 0, y: 28 });

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
}

function setupOverview(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('[data-section="overview"]');
  if (!section) return;

  const main = section.querySelector('.ps-overview-main');
  const prose = section.querySelectorAll('.ps-prose');
  const facts = section.querySelector('.ps-facts');
  const rows = section.querySelectorAll('.ps-facts-list > div');

  gsap.set([main, facts].filter(Boolean), { opacity: 0 });
  gsap.set(prose, { opacity: 0, y: 20 });
  gsap.set(rows, { opacity: 0, x: 16 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: { trigger: section, start: 'top 72%', once: true },
    onStart: () => onComplete?.()
  });

  headerReveal(section, tl);
  if (main) tl.to(main, { opacity: 1, duration: 0.4 }, 0.25);
  if (prose.length) tl.to(prose, { opacity: 1, y: 0, duration: 0.65, stagger: 0.1 }, 0.3);
  if (facts) {
    tl.fromTo(
      facts,
      { opacity: 0, x: 36 },
      { opacity: 1, x: 0, duration: 0.8, ease: EASE_SOFT },
      0.35
    );
  }
  if (rows.length) tl.to(rows, { opacity: 1, x: 0, duration: 0.45, stagger: 0.07 }, 0.5);
}

function setupImpact(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('[data-section="impact"]');
  if (!section) return;

  const metrics = section.querySelectorAll('.ps-metric');
  gsap.set(metrics, { opacity: 0, y: 40, scale: 0.94 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: { trigger: section, start: 'top 74%', once: true },
    onStart: () => onComplete?.()
  });

  headerReveal(section, tl);
  if (metrics.length) {
    tl.to(
      metrics,
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'back.out(1.35)' },
      0.28
    );

    metrics.forEach((metric, i) => {
      const icon = metric.querySelector('.ps-metric-icon');
      const value = metric.querySelector('.ps-metric-value');
      const label = metric.querySelector('.ps-metric-label');
      const delay = 0.35 + i * 0.1;

      if (icon) {
        gsap.fromTo(
          icon,
          { opacity: 0, scale: 0.5, rotate: -16 },
          {
            opacity: 1, scale: 1, rotate: 0, duration: 0.5, delay, ease: 'back.out(2)',
            scrollTrigger: { trigger: section, start: 'top 74%', once: true }
          }
        );
      }
      if (value) {
        gsap.fromTo(
          value,
          { opacity: 0, y: 16, scale: 0.9 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.6, delay: delay + 0.08, ease: EASE_EXPO,
            scrollTrigger: { trigger: section, start: 'top 74%', once: true }
          }
        );
      }
      if (label) {
        gsap.fromTo(
          label,
          { opacity: 0, y: 10 },
          {
            opacity: 1, y: 0, duration: 0.45, delay: delay + 0.14,
            scrollTrigger: { trigger: section, start: 'top 74%', once: true }
          }
        );
      }
    });
  }
}

function setupStory(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('[data-section="story"]');
  if (!section) return;

  const cards = section.querySelectorAll('.ps-story-card');
  gsap.set(cards, { opacity: 0, y: 48 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: { trigger: section, start: 'top 72%', once: true },
    onStart: () => onComplete?.()
  });

  if (cards.length) {
    tl.to(cards, { opacity: 1, y: 0, duration: 0.85, stagger: 0.16, ease: EASE_SOFT }, 0);

    cards.forEach((card, i) => {
      const kicker = card.querySelector('.ps-story-kicker');
      const title = card.querySelector('.ps-story-title');
      const text = card.querySelector('p');
      const delay = 0.1 + i * 0.16;

      if (kicker) {
        gsap.fromTo(
          kicker,
          { opacity: 0, letterSpacing: '0.28em' },
          {
            opacity: 1, letterSpacing: '0.12em', duration: 0.55, delay,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.55, delay: delay + 0.08,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (text) {
        gsap.fromTo(
          text,
          { opacity: 0, y: 12 },
          {
            opacity: 1, y: 0, duration: 0.55, delay: delay + 0.16,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
    });
  }
}

function setupFeatures(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('[data-section="features"]');
  if (!section) return;

  const items = section.querySelectorAll('.ps-feature-item');
  gsap.set(items, { opacity: 0, y: 32 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: { trigger: section, start: 'top 72%', once: true },
    onStart: () => onComplete?.()
  });

  headerReveal(section, tl, true);
  if (items.length) {
    tl.to(items, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: EASE_SOFT }, 0.28);

    items.forEach((item, i) => {
      const num = item.querySelector('.ps-feature-num');
      const text = item.querySelector('.ps-feature-text');
      const arrow = item.querySelector('.ps-feature-arrow');
      const delay = 0.35 + i * 0.08;

      if (num) {
        gsap.fromTo(
          num,
          { opacity: 0, x: -16 },
          {
            opacity: 1, x: 0, duration: 0.45, delay,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (text) {
        gsap.fromTo(
          text,
          { opacity: 0, y: 12 },
          {
            opacity: 1, y: 0, duration: 0.5, delay: delay + 0.05,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (arrow) {
        gsap.fromTo(
          arrow,
          { opacity: 0, rotate: -20, scale: 0.6 },
          {
            opacity: 1, rotate: 0, scale: 1, duration: 0.45, delay: delay + 0.12, ease: 'back.out(1.8)',
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
    });
  }
}

function setupBusiness(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('[data-section="business"]');
  if (!section) return;

  const items = section.querySelectorAll('.ps-impact-list li');
  gsap.set(items, { opacity: 0, x: -20 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: { trigger: section, start: 'top 74%', once: true },
    onStart: () => onComplete?.()
  });

  headerReveal(section, tl);
  if (items.length) {
    tl.to(items, { opacity: 1, x: 0, duration: 0.55, stagger: 0.08 }, 0.28);
  }
}

function setupGallery(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('[data-section="gallery"]');
  if (!section) return;

  const figures = section.querySelectorAll('.ps-gallery-item');
  gsap.set(figures, { opacity: 0, y: 48 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: { trigger: section, start: 'top 72%', once: true },
    onStart: () => onComplete?.()
  });

  headerReveal(section, tl);
  if (figures.length) {
    tl.to(figures, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: EASE_SOFT }, 0.28);

    figures.forEach((fig, i) => {
      const img = fig.querySelector('img');
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.14 },
          {
            scale: 1, duration: 1.2, delay: 0.35 + i * 0.12, ease: EASE_SOFT,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
    });
  }
}

function setupStack(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('[data-section="stack"]');
  if (!section) return;

  const chips = section.querySelectorAll('.ps-stack-chip');
  gsap.set(chips, { opacity: 0, y: 20, scale: 0.9 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: { trigger: section, start: 'top 76%', once: true },
    onStart: () => onComplete?.()
  });

  headerReveal(section, tl);
  if (chips.length) {
    tl.to(
      chips,
      {
        opacity: 1, y: 0, scale: 1, duration: 0.5,
        stagger: { each: 0.045, from: 'start' },
        ease: 'back.out(1.5)'
      },
      0.28
    );
  }
}

function setupPlans(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('[data-section="plans"]');
  if (!section) return;

  const cards = section.querySelectorAll('.ps-plan-card');
  gsap.set(cards, { opacity: 0, y: 52, rotateX: 8 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: { trigger: section, start: 'top 72%', once: true },
    onStart: () => onComplete?.()
  });

  headerReveal(section, tl);
  if (cards.length) {
    tl.to(
      cards,
      { opacity: 1, y: 0, rotateX: 0, duration: 0.85, stagger: 0.12, ease: EASE_SOFT },
      0.3
    );

    cards.forEach((card, i) => {
      const price = card.querySelector('.ps-plan-price');
      const features = card.querySelectorAll('.ps-plan-features li');
      const cta = card.querySelector('.ps-plan-cta');
      const delay = 0.4 + i * 0.12;

      if (price) {
        gsap.fromTo(
          price,
          { opacity: 0, y: 16, scale: 0.94 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.6, delay, ease: 'back.out(1.4)',
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (features.length) {
        gsap.fromTo(
          features,
          { opacity: 0, x: -10 },
          {
            opacity: 1, x: 0, duration: 0.4, stagger: 0.04, delay: delay + 0.1,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (cta) {
        gsap.fromTo(
          cta,
          { opacity: 0, y: 12 },
          {
            opacity: 1, y: 0, duration: 0.5, delay: delay + 0.25,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
    });
  }
}

function setupRelated(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('[data-section="related"]');
  if (!section) return;

  const link = section.querySelector('.ps-link');
  const cards = section.querySelectorAll('.ps-related-card');

  gsap.set([link].filter(Boolean), { opacity: 0, x: -12 });
  gsap.set(cards, { opacity: 0, y: 48 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: { trigger: section, start: 'top 74%', once: true },
    onStart: () => onComplete?.()
  });

  headerReveal(section, tl);
  if (link) tl.to(link, { opacity: 1, x: 0, duration: 0.55 }, 0.2);
  if (cards.length) {
    tl.to(cards, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: EASE_SOFT }, 0.3);

    cards.forEach((card, i) => {
      const media = card.querySelector('.ps-related-media img');
      const info = card.querySelector('.ps-related-info');
      if (media) {
        gsap.fromTo(
          media,
          { scale: 1.16 },
          {
            scale: 1, duration: 1.15, delay: 0.35 + i * 0.12, ease: EASE_SOFT,
            scrollTrigger: { trigger: section, start: 'top 74%', once: true }
          }
        );
      }
      if (info) {
        gsap.fromTo(
          info,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.6, delay: 0.45 + i * 0.12,
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
    scrollTrigger: { trigger: section, start: 'top 85%', once: true },
    onStart: () => onComplete?.()
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
      { boxShadow: '0 20px 50px rgba(0,0,0,0.25)', duration: 0.45, yoyo: true, repeat: 1 },
      0.15
    );
  }
  if (outline) {
    tl.fromTo(
      outline,
      { opacity: 0, y: 32, filter: 'blur(6px)', letterSpacing: '0.06em' },
      {
        opacity: 1, y: 0, filter: 'blur(0px)', letterSpacing: '0.01em',
        duration: 0.85, ease: EASE_EXPO
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
