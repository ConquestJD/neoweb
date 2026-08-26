import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type HomeGsapCallbacks = {
  onServicesStart?: () => void;
  onServicesComplete?: () => void;
  onWhyComplete?: () => void;
  onPortfolioComplete?: () => void;
  onFaqComplete?: () => void;
  onCtaComplete?: () => void;
};

const EASE = 'power3.out';
const EASE_SOFT = 'power2.out';
const EASE_EXPO = 'expo.out';

/**
 * Animaciones GSAP específicas por sección del home.
 * Devuelve una función de cleanup (ctx.revert).
 */
export function initHomeGsapAnimations(
  root: HTMLElement,
  callbacks: HomeGsapCallbacks = {}
): () => void {
  const ctx = gsap.context(() => {
    setupHero(root);
    setupServices(root, callbacks.onServicesStart, callbacks.onServicesComplete);
    setupWhy(root, callbacks.onWhyComplete);
    setupPortfolio(root, callbacks.onPortfolioComplete);
    setupProcess(root);
    setupFaq(root, callbacks.onFaqComplete);
    setupCta(root, callbacks.onCtaComplete);
  }, root);

  requestAnimationFrame(() => ScrollTrigger.refresh());

  return () => ctx.revert();
}

function setupHero(root: HTMLElement) {
  const section = root.querySelector('.hero-section-enhanced');
  if (!section) return;

  const video = section.querySelector('.hero-video');
  const overlay = section.querySelector('.hero-video-overlay');
  const title = section.querySelector('.hero-title-enhanced');
  const cta = section.querySelector('.hero-cta');
  const desc = section.querySelector('.hero-description-enhanced');

  gsap.set([title, cta, desc].filter(Boolean), { opacity: 0, y: 36 });
  if (video) gsap.set(video, { scale: 1.12, opacity: 0.35 });
  if (overlay) gsap.set(overlay, { opacity: 0 });

  const tl = gsap.timeline({ defaults: { ease: EASE } });

  if (video) {
    tl.to(video, { scale: 1, opacity: 1, duration: 1.8, ease: EASE_SOFT }, 0);
  }
  if (overlay) {
    tl.to(overlay, { opacity: 1, duration: 1.2 }, 0.15);
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
      { opacity: 0, scale: 0.82, y: 24 },
      { opacity: 1, scale: 1, y: 0, duration: 0.75, ease: 'back.out(1.6)' },
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

function setupServices(
  root: HTMLElement,
  onStart?: () => void,
  onComplete?: () => void
) {
  const section = root.querySelector('#services-section');
  if (!section) return;

  const title = section.querySelector('.services-header h2');
  const intro = section.querySelector('.services-header p');
  const navItems = section.querySelectorAll('.services-nav-item');
  const viewport = section.querySelector('.carousel-viewport');
  const active = section.querySelector('.carousel-slide.is-active');
  const sides = section.querySelectorAll('.carousel-slide.is-prev, .carousel-slide.is-next');
  const indicator = section.querySelector('.carousel-indicator');
  const marks = section.querySelectorAll('.carousel-indicator-mark');
  const thumb = section.querySelector('.carousel-indicator-thumb');
  const captionIndex = section.querySelector('.carousel-indicator-index');
  const captionName = section.querySelector('.carousel-indicator-name');

  const activeImg = active?.querySelector('img');
  const activeOverlay = active?.querySelector('.carousel-slide-overlay');
  const activeTitle = active?.querySelector('.carousel-slide-top h3');
  const activeDesc = active?.querySelector('.carousel-slide-top p');
  const activeTop = active?.querySelector('.carousel-slide-top');

  gsap.set([title, intro].filter(Boolean), { opacity: 0 });
  gsap.set(navItems, { opacity: 0, scale: 0.88, y: 10 });
  if (viewport) gsap.set(viewport, { clipPath: 'inset(10% 14% 10% 14% round 8px)' });
  gsap.set([activeImg, activeOverlay, activeTop].filter(Boolean), { opacity: 0 });
  gsap.set(sides, { opacity: 0 });
  gsap.set(indicator, { opacity: 0 });
  gsap.set(marks, { scaleY: 0, transformOrigin: 'center bottom' });
  gsap.set(thumb, { scaleX: 0, transformOrigin: 'left center' });
  gsap.set([captionIndex, captionName].filter(Boolean), { opacity: 0, y: 8 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: {
      trigger: section,
      start: 'top 78%',
      once: true
    },
    onStart: () => onStart?.(),
    onComplete: () => onComplete?.()
  });

  // Header editorial
  if (title) {
    tl.fromTo(
      title,
      { opacity: 0, y: 28, clipPath: 'inset(0 0 100% 0)' },
      {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0 0 0% 0)',
        duration: 0.7,
        ease: EASE_EXPO
      },
      0
    );
  }
  if (intro) {
    tl.fromTo(
      intro,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.45 },
      0.12
    );
  }

  // Nav: ensambla desde el centro, como un selector
  if (navItems.length) {
    tl.to(
      navItems,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.4,
        stagger: { each: 0.045, from: 'center' },
        ease: 'back.out(1.35)'
      },
      0.22
    );
  }

  // Carrusel: reveal por clip del viewport (no mueve slides)
  if (viewport) {
    tl.to(
      viewport,
      {
        clipPath: 'inset(0% 0% 0% 0% round 8px)',
        duration: 0.85,
        ease: EASE_EXPO
      },
      0.28
    );
  }

  // Laterales solo opacity — sin tocar transform del track
  if (sides.length) {
    tl.to(sides, { opacity: 1, duration: 0.55, ease: EASE_SOFT }, 0.38);
  }

  // Slide activo: imagen + copy, elemento por elemento
  if (activeImg) {
    tl.fromTo(
      activeImg,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 0.9, ease: EASE_SOFT },
      0.32
    );
  }
  if (activeOverlay) {
    tl.fromTo(
      activeOverlay,
      { opacity: 0 },
      { opacity: 1, duration: 0.55 },
      0.42
    );
  }
  if (activeTop) {
    tl.to(activeTop, { opacity: 1, duration: 0.35 }, 0.48);
  }
  if (activeTitle) {
    tl.fromTo(
      activeTitle,
      { opacity: 0, y: 18, clipPath: 'inset(0 0 100% 0)' },
      {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0 0 0% 0)',
        duration: 0.55,
        ease: EASE_EXPO
      },
      0.5
    );
  }
  if (activeDesc) {
    tl.fromTo(
      activeDesc,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45 },
      0.6
    );
  }

  // Indicador
  if (indicator) {
    tl.to(indicator, { opacity: 1, duration: 0.3 }, 0.72);
  }
  if (marks.length) {
    tl.to(
      marks,
      { scaleY: 1, duration: 0.35, stagger: 0.04, ease: EASE_SOFT },
      0.75
    );
  }
  if (thumb) {
    tl.to(thumb, { scaleX: 1, duration: 0.45, ease: EASE_EXPO }, 0.82);
  }
  if (captionIndex) {
    tl.to(captionIndex, { opacity: 1, y: 0, duration: 0.35 }, 0.85);
  }
  if (captionName) {
    tl.to(captionName, { opacity: 1, y: 0, duration: 0.4 }, 0.9);
  }
}

function setupCompactStory(
  stage: Element,
  layerSelector: string,
  onComplete?: () => void
) {
  const layers = stage.querySelectorAll(layerSelector);
  const copy = stage.querySelector('.home-story-copy');
  const progress = stage.querySelector('.home-story-progress');
  const steps = Math.max(1, layers.length);

  gsap.set([copy, progress].filter(Boolean), { opacity: 0, y: 18 });

  const intro = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: {
      trigger: stage,
      start: 'top 82%',
      once: true
    },
    onComplete: () => onComplete?.()
  });

  if (progress) {
    intro.to(progress, { opacity: 1, y: 0, duration: 0.45 }, 0);
  }
  if (copy) {
    intro.to(copy, { opacity: 1, y: 0, duration: 0.6 }, 0.08);
  }

  ScrollTrigger.create({
    trigger: stage,
    start: 'top top',
    end: () => `+=${Math.max(1, steps - 1) * window.innerHeight}`,
    pin: true,
    pinSpacing: true,
    anticipatePin: 1,
    invalidateOnRefresh: true
  });

  if (layers.length) {
    const bg = stage.querySelector('.why-showcase-bg, .process-accordion-bg');
    if (bg) {
      gsap.fromTo(
        bg,
        { scale: 1.08 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: stage.parentElement || stage,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.1
          }
        }
      );
    }
  }
}

function setupWhy(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.why-neoweb-section');
  const showcase = root.querySelector('#why-showcase');
  if (!section || !showcase) return;

  const compact = window.matchMedia('(max-width: 768px)').matches;
  if (compact) {
    setupCompactStory(showcase, '.why-showcase-bg-layer', onComplete);
    return;
  }

  const bg = showcase.querySelector('.why-showcase-bg');
  const mask = showcase.querySelector('.why-showcase-mask');
  const title = showcase.querySelector('.why-neoweb-label');
  const items = showcase.querySelectorAll('.why-list-item');
  const detail = showcase.querySelector('.why-showcase-detail');
  const points = showcase.querySelectorAll('.why-showcase-points li');

  gsap.set(title, { opacity: 0, y: 30 });
  gsap.set(items, { opacity: 0, x: -36 });
  gsap.set(detail, { opacity: 0, x: 40 });
  gsap.set(points, { opacity: 0, y: 12 });
  if (bg) gsap.set(bg, { scale: 1.14, opacity: 0 });
  if (mask) gsap.set(mask, { opacity: 0 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: {
      trigger: showcase,
      start: 'top 68%',
      once: true
    },
    onComplete: () => onComplete?.()
  });

  if (bg) {
    tl.to(bg, { scale: 1, opacity: 1, duration: 1.4, ease: EASE_SOFT }, 0);
  }
  if (mask) {
    tl.to(mask, { opacity: 1, duration: 0.8 }, 0.2);
  }
  if (title) {
    tl.fromTo(
      title,
      { opacity: 0, y: 40, letterSpacing: '0.2em' },
      { opacity: 1, y: 0, letterSpacing: '0.08em', duration: 0.9 },
      0.25
    );
  }
  if (items.length) {
    tl.to(
      items,
      {
        opacity: 1,
        x: 0,
        duration: 0.65,
        stagger: 0.09,
        ease: EASE_EXPO
      },
      0.4
    );
  }
  if (detail) {
    tl.to(detail, { opacity: 1, x: 0, duration: 0.8 }, 0.65);
  }
  if (points.length) {
    tl.to(points, { opacity: 1, y: 0, duration: 0.45, stagger: 0.07 }, 0.85);
  }
}

function setupPortfolio(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('#portfolio-section');
  if (!section) return;

  const marquee = section.querySelector('.portfolio-marquee');
  const label = section.querySelector('.portfolio-label');
  const intro = section.querySelector('.portfolio-intro');
  const link = section.querySelector('.portfolio-view-all-link');
  const cards = section.querySelectorAll('.portfolio-card');

  gsap.set([marquee, label, intro, link].filter(Boolean), { opacity: 0 });
  gsap.set(cards, { opacity: 0, y: 64, rotateX: 8 });

  const tl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      once: true
    },
    onComplete: () => onComplete?.()
  });

  if (marquee) {
    tl.fromTo(
      marquee,
      { opacity: 0, y: -24 },
      { opacity: 1, y: 0, duration: 0.8 },
      0
    );
  }
  if (label) {
    tl.fromTo(
      label,
      { opacity: 0, y: 36, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.95, ease: EASE_EXPO },
      0.1
    );
  }
  if (intro) {
    tl.fromTo(intro, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7 }, 0.25);
  }
  if (link) {
    tl.fromTo(
      link,
      { opacity: 0, x: -16 },
      { opacity: 1, x: 0, duration: 0.55 },
      0.35
    );
  }
  if (cards.length) {
    tl.to(
      cards,
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.85,
        stagger: { each: 0.12, from: 'start' },
        ease: EASE_SOFT
      },
      0.4
    );

    cards.forEach((card, i) => {
      const media = card.querySelector('.portfolio-card-media');
      const info = card.querySelector('.portfolio-card-info');
      const arrow = card.querySelector('.portfolio-card-arrow');
      if (media) {
        gsap.fromTo(
          media,
          { scale: 1.18 },
          {
            scale: 1,
            duration: 1.2,
            ease: EASE_SOFT,
            delay: 0.45 + i * 0.12,
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              once: true
            }
          }
        );
      }
      if (info) {
        gsap.fromTo(
          info,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.55 + i * 0.12,
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              once: true
            }
          }
        );
      }
      if (arrow) {
        gsap.fromTo(
          arrow,
          { opacity: 0, rotate: -25, scale: 0.6 },
          {
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 0.55,
            delay: 0.7 + i * 0.12,
            ease: 'back.out(1.8)',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              once: true
            }
          }
        );
      }
    });
  }
}

function setupProcess(root: HTMLElement) {
  const section = root.querySelector('.process-section');
  if (!section) return;

  const compactProcess = window.matchMedia('(max-width: 768px)').matches;
  const wrap = section.querySelector('.process-accordion-wrap');

  if (compactProcess && wrap) {
    setupCompactStory(wrap, '.process-accordion-bg-layer');
    return;
  }

  const label = section.querySelector('.process-label');
  const intro = section.querySelector('.process-intro');
  const panels = section.querySelectorAll('.process-panel');
  const numbers = section.querySelectorAll('.process-panel-number');

  gsap.set([label, intro].filter(Boolean), { opacity: 0, y: 28 });
  if (wrap) gsap.set(wrap, { opacity: 0, y: 56 });
  gsap.set(panels, { opacity: 0.35 });
  gsap.set(numbers, { opacity: 0, y: 16 });

  const headerTl = gsap.timeline({
    defaults: { ease: EASE },
    scrollTrigger: {
      trigger: section,
      start: 'top 75%',
      once: true
    }
  });

  if (label) {
    headerTl.fromTo(
      label,
      { opacity: 0, y: 36, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: EASE_EXPO },
      0
    );
  }
  if (intro) {
    headerTl.to(intro, { opacity: 1, y: 0, duration: 0.7 }, 0.15);
  }

  const accordionTl = gsap.timeline({
    defaults: { ease: EASE_SOFT },
    scrollTrigger: {
      trigger: wrap || section,
      start: 'top 78%',
      once: true
    }
  });

  if (wrap) {
    accordionTl.to(wrap, { opacity: 1, y: 0, duration: 0.9 }, 0);
  }
  if (panels.length) {
    accordionTl.to(
      panels,
      { opacity: 1, duration: 0.7, stagger: 0.08 },
      0.15
    );
  }
  if (numbers.length) {
    accordionTl.to(
      numbers,
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.07 },
      0.25
    );
  }

  const bgLayers = section.querySelectorAll('.process-accordion-bg-layer');
  if (bgLayers.length && wrap) {
    gsap.fromTo(
      bgLayers,
      { scale: 1.08 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      }
    );
  }
}

function setupFaq(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('#faq-section');
  if (!section) return;

  const label = section.querySelector('.faq-label');
  const intro = section.querySelector('.faq-intro');
  const items = section.querySelectorAll('.faq-item');
  const contact = section.querySelector('.faq-contact-link');

  gsap.set([label, intro, contact].filter(Boolean), { opacity: 0 });
  gsap.set(items, { opacity: 0, y: 32 });

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
      { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.85, ease: EASE_EXPO },
      0
    );
  }
  if (intro) {
    tl.fromTo(intro, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.65 }, 0.12);
  }
  if (items.length) {
    tl.to(
      items,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: EASE_SOFT
      },
      0.25
    );

    const numbers = section.querySelectorAll('.faq-number');
    const chevrons = section.querySelectorAll('.faq-chevron');
    if (numbers.length) {
      tl.from(
        numbers,
        { opacity: 0, rotate: -12, duration: 0.45, stagger: 0.08 },
        0.3
      );
    }
    if (chevrons.length) {
      tl.from(
        chevrons,
        { opacity: 0, scale: 0.5, duration: 0.4, stagger: 0.08, ease: 'back.out(2)' },
        0.4
      );
    }
  }
  if (contact) {
    tl.fromTo(
      contact,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.55 },
      0.55
    );
  }
}

function setupCta(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('#cta-section');
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

  // Botón primero: no esperar al outline
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
      {
        opacity: 0,
        y: 32,
        letterSpacing: '0.06em',
        filter: 'blur(6px)'
      },
      {
        opacity: 1,
        y: 0,
        letterSpacing: '0.01em',
        filter: 'blur(0px)',
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
