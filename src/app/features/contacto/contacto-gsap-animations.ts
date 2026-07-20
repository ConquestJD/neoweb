import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type ContactoGsapCallbacks = {
  onFormComplete?: () => void;
  onChannelsComplete?: () => void;
  onScheduleComplete?: () => void;
  onFaqComplete?: () => void;
};

const EASE = 'power3.out';
const EASE_SOFT = 'power2.out';
const EASE_EXPO = 'expo.out';

/**
 * Animaciones GSAP específicas por sección de la vista Contacto.
 */
export function initContactoGsapAnimations(
  root: HTMLElement,
  callbacks: ContactoGsapCallbacks = {}
): () => void {
  const ctx = gsap.context(() => {
    setupHero(root);
    setupForm(root, callbacks.onFormComplete);
    setupChannels(root, callbacks.onChannelsComplete);
    setupSchedule(root, callbacks.onScheduleComplete);
    setupFaq(root, callbacks.onFaqComplete);
  }, root);

  requestAnimationFrame(() => ScrollTrigger.refresh());

  return () => ctx.revert();
}

function setupHero(root: HTMLElement) {
  const section = root.querySelector('.con-hero');
  if (!section) return;

  const bg = section.querySelector('.con-hero-bg');
  const overlay = section.querySelector('.con-hero-overlay');
  const title = section.querySelector('.con-hero-title');
  const desc = section.querySelector('.con-hero-desc');
  const link = section.querySelector('.con-hero-link');

  if (bg) gsap.set(bg, { scale: 1.14, opacity: 0.1 });
  if (overlay) gsap.set(overlay, { opacity: 0 });
  gsap.set([title, desc, link].filter(Boolean), { opacity: 0 });

  const tl = gsap.timeline({ defaults: { ease: EASE } });

  if (bg) {
    tl.to(bg, { scale: 1.02, opacity: 0.35, duration: 1.75, ease: EASE_SOFT }, 0);
  }
  if (overlay) {
    tl.to(overlay, { opacity: 1, duration: 1.1 }, 0.1);
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
  if (link) {
    tl.fromTo(
      link,
      { opacity: 0, y: 14, x: -8 },
      { opacity: 1, y: 0, x: 0, duration: 0.6 },
      0.95
    );
  }
}

function setupForm(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.con-form');
  if (!section) return;

  const label = section.querySelector('.con-label');
  const intro = section.querySelector('.con-intro');
  const points = section.querySelectorAll('.con-points li');
  const card = section.querySelector('.con-form-card');
  const fields = section.querySelectorAll('.con-field');
  const submit = section.querySelector('.con-submit');
  const note = section.querySelector('.con-form-note');

  gsap.set([label, intro, card, submit, note].filter(Boolean), { opacity: 0 });
  gsap.set(points, { opacity: 0, x: -16 });
  gsap.set(fields, { opacity: 0, y: 22 });

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
    tl.fromTo(intro, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.12);
  }
  if (points.length) {
    tl.to(
      points,
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.08 },
      0.28
    );
  }
  if (card) {
    tl.fromTo(
      card,
      { opacity: 0, y: 40, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: EASE_SOFT },
      0.25
    );
  }
  if (fields.length) {
    tl.to(
      fields,
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
      0.45
    );
  }
  if (submit) {
    tl.fromTo(
      submit,
      { opacity: 0, y: 16, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.5)' },
      0.75
    );
  }
  if (note) {
    tl.fromTo(note, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45 }, 0.9);
  }
}

function setupChannels(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.con-channels');
  if (!section) return;

  const label = section.querySelector('.con-label');
  const intro = section.querySelector('.con-intro');
  const cards = section.querySelectorAll('.con-channel-card');

  gsap.set([label, intro].filter(Boolean), { opacity: 0, y: 28 });
  gsap.set(cards, { opacity: 0, y: 44 });

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
      { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: EASE_SOFT },
      0.28
    );

    cards.forEach((card, i) => {
      const icon = card.querySelector('.con-channel-icon');
      const title = card.querySelector('h3');
      const text = card.querySelector('p');
      const link = card.querySelector('.con-channel-link, .con-social-links');
      const delay = 0.35 + i * 0.12;

      if (icon) {
        gsap.fromTo(
          icon,
          { opacity: 0, scale: 0.5, rotate: -18 },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.55,
            delay,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: delay + 0.08,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
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
            delay: delay + 0.14,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
      if (link) {
        gsap.fromTo(
          link,
          { opacity: 0, x: -10 },
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            delay: delay + 0.2,
            scrollTrigger: { trigger: section, start: 'top 72%', once: true }
          }
        );
      }
    });
  }
}

function setupSchedule(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.con-schedule');
  if (!section) return;

  const label = section.querySelector('.con-label');
  const intro = section.querySelector('.con-intro');
  const cards = section.querySelectorAll('.con-schedule-card');
  const note = section.querySelector('.con-schedule-note');

  gsap.set([label, intro, note].filter(Boolean), { opacity: 0, y: 24 });
  gsap.set(cards, { opacity: 0, y: 36, scale: 0.96 });

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
      const day = card.querySelector('h3');
      const time = card.querySelector('.con-schedule-time');
      const badge = card.querySelector('.con-schedule-badge');
      const delay = 0.35 + i * 0.1;

      if (day) {
        gsap.fromTo(
          day,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            delay,
            scrollTrigger: { trigger: section, start: 'top 74%', once: true }
          }
        );
      }
      if (time) {
        gsap.fromTo(
          time,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            delay: delay + 0.06,
            scrollTrigger: { trigger: section, start: 'top 74%', once: true }
          }
        );
      }
      if (badge) {
        gsap.fromTo(
          badge,
          { opacity: 0, scale: 0.7 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.45,
            delay: delay + 0.12,
            ease: 'back.out(1.8)',
            scrollTrigger: { trigger: section, start: 'top 74%', once: true }
          }
        );
      }
    });
  }
  if (note) {
    tl.fromTo(note, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55 }, 0.65);
  }
}

function setupFaq(root: HTMLElement, onComplete?: () => void) {
  const section = root.querySelector('.faq-section');
  if (!section) return;

  const label = section.querySelector('.faq-label');
  const intro = section.querySelector('.faq-intro');
  const items = section.querySelectorAll('.faq-item');

  gsap.set([label, intro].filter(Boolean), { opacity: 0 });
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
      { opacity: 1, y: 0, duration: 0.65, stagger: 0.09, ease: EASE_SOFT },
      0.25
    );

    const numbers = section.querySelectorAll('.faq-number');
    const chevrons = section.querySelectorAll('.faq-chevron');
    if (numbers.length) {
      tl.from(
        numbers,
        { opacity: 0, rotate: -12, duration: 0.45, stagger: 0.09 },
        0.3
      );
    }
    if (chevrons.length) {
      tl.from(
        chevrons,
        { opacity: 0, scale: 0.5, duration: 0.4, stagger: 0.09, ease: 'back.out(2)' },
        0.4
      );
    }
  }
}
