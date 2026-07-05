import { Component, OnInit, HostListener, AfterViewInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

type HomeService = {
  name: string;
  route: string;
  icon: string;
  image: string;
  tag: string;
  outcome: string;
  description: string;
  audience: string;
};

type CarouselSlide = {
  service: HomeService;
  serviceIndex: number;
  key: string;
};

type HomePortfolioProject = {
  id: string;
  title: string;
  category: string;
  scrollUrl: string;
  result: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;
  @ViewChild('servicesCarousel') servicesCarousel?: ElementRef<HTMLElement>;
  @ViewChild('carouselCursor') carouselCursor?: ElementRef<HTMLElement>;
  @ViewChild('portfolioGrid') portfolioGrid?: ElementRef<HTMLElement>;

  constructor(
    private router: Router,
    private ngZone: NgZone
  ) {}

  scrollY = 0;
  activeServiceIndex = 0;
  activeDiferencialIndex = 0;
  trackIndex = 1;
  trackTransitionEnabled = true;
  servicesVisible = false;
  servicesIntroDone = false;
  whyShowcaseEntered = false;
  whyTitleRevealed = false;
  whyRevealedListCount = 0;
  whyBgRevealed = false;
  whyDetailRevealed = false;
  ctaVisible = false;
  portfolioVisible = false;
  portfolioIntroDone = false;
  portfolioMarqueeCopies = [
    'PROYECTOS · CASOS REALES · PERÚ · NEO WEB · ',
    'PROYECTOS · CASOS REALES · PERÚ · NEO WEB · ',
    'PROYECTOS · CASOS REALES · PERÚ · NEO WEB · ',
    'PROYECTOS · CASOS REALES · PERÚ · NEO WEB · '
  ];
  activeProcessIndex = 0;
  faqVisible = false;
  faqIntroDone = false;
  activeFaqIndex = -1;
  ctaMagnetX = 0;
  ctaMagnetY = 0;
  ctaMagnetActive = false;
  carouselTransitioning = false;
  carouselCursorLabel = '';
  carouselCursorShown = false;
  carouselSlides: CarouselSlide[] = [];
  carouselTransform = '';

  // Portafolio preview - Proyectos reales
  portfolioProjects: HomePortfolioProject[] = [
    {
      id: 'omed',
      title: 'OMED',
      category: 'Sitio Web Profesional',
      scrollUrl: '/assets/portfolio/scrolls/omed-scroll.jpg',
      result: 'Web para 2 sedes (Cusco y Tacna) con mejor posicionamiento local'
    },
    {
      id: 'sml-web',
      title: 'Santa María Laura',
      category: 'Colegio Privado',
      scrollUrl: '/assets/portfolio/scrolls/sml-scroll.jpg',
      result: 'Presencia institucional con admisión 2026 activa y blog educativo'
    },
    {
      id: 'hombre-universal',
      title: 'Hombre Universal',
      category: 'Publicación Editorial',
      scrollUrl: '/assets/portfolio/scrolls/hombreuniversal-scroll.jpg',
      result: 'Plataforma editorial premium para difundir pensamiento y filosofía'
    },
    {
      id: 'yachaytambo',
      title: 'Yachay Tambo',
      category: 'Turismo & Cultura',
      scrollUrl: '/assets/portfolio/scrolls/yachaytambo-scroll.jpg',
      result: 'Sitio web para experiencias de turismo y cultura en los Andes'
    }
  ];

  // Diferenciales para showcase interactivo
  diferenciales = [
    {
      title: 'Diseño web a tu medida',
      description: 'Cada sección, color y estructura está pensada estratégicamente para tu marca: identidad visual propia y una experiencia que guía al usuario hacia la conversión.',
      icon: 'palette',
      points: ['Identidad visual propia', 'UX pensado para convertir'],
      image: '/assets/home/por que neoweb/diseño web.jpg'
    },
    {
      title: 'Código real, no plantillas',
      description: 'Construimos tu página desde cero con código personalizado, sin plantillas, sin Wix, sin WordPress. Esto garantiza rendimiento, seguridad y un diseño único para tu negocio.',
      icon: 'code',
      points: ['Sin Wix ni WordPress', 'Mejor rendimiento y seguridad'],
      image: '/assets/home/por que neoweb/codigo real.jpg'
    },
    {
      title: 'Correo empresarial profesional',
      description: 'Configuramos tu correo corporativo con el dominio de tu negocio, para que tu marca se vea más seria y confiable en cada comunicación.',
      icon: 'alternate_email',
      points: ['nombre@tuempresa.com', 'Mayor credibilidad'],
      image: '/assets/home/por que neoweb/correo empresarial.png'
    },
    {
      title: 'Optimización SEO desde la base',
      description: 'Estructuramos el sitio para que los buscadores lo entiendan desde el día uno: metadatos, velocidad y contenido pensado para posicionar.',
      icon: 'travel_explore',
      points: ['Estructura indexable', 'Mejor posicionamiento'],
      image: '/assets/home/por que neoweb/seo.png'
    },
    {
      title: 'Velocidad y rendimiento',
      description: 'Optimizamos cada recurso para que tu página cargue rápido en cualquier dispositivo, mejorando la experiencia y el posicionamiento.',
      icon: 'speed',
      points: ['Carga rápida', 'Optimizado para móvil'],
      image: '/assets/home/por que neoweb/velocidad.png'
    },
    {
      title: 'Soporte y acompañamiento',
      description: 'Te guiamos en todo el proceso: mejoras, recomendaciones, actualizaciones y soporte técnico rápido cuando lo necesites.',
      icon: 'support_agent',
      points: ['Comunicación directa', 'Mejoras continuas'],
      image: '/assets/home/por que neoweb/soporte.jpg'
    }
  ];

  processSteps = [
    {
      title: 'Discovery',
      description: 'Objetivos, alcance y priorización para entender el reto de negocio. Analizo tu mercado y competencia.',
      deliverables: ['Kickoff meeting', 'Brief completo'],
      image: '/assets/home/proceso/discovery.jpg'
    },
    {
      title: 'UX & UI',
      description: 'Wireframes, diseño visual y microcopys orientados a conversión. Cada elemento pensado para generar resultados.',
      deliverables: ['Prototipo navegable', 'Design system'],
      image: '/assets/home/proceso/uxui.jpg'
    },
    {
      title: 'Desarrollo',
      description: 'Código a medida, performance optimizado, SEO técnico y QA continuo. Desarrollo limpio y escalable.',
      deliverables: ['Entregables parciales', 'Code review'],
      image: '/assets/home/proceso/desarrollo.jpg'
    },
    {
      title: 'Lanzamiento',
      description: 'Go-live, optimización, analítica configurada y handoff con soporte cercano. Tu proyecto listo para crecer.',
      deliverables: ['Checklist completo', 'Métricas y reportes'],
      image: '/assets/home/proceso/lanzamiento.jpg'
    }
  ];

  homeFaqs = [
    {
      question: '¿Cuánto cuesta un proyecto?',
      answer: 'Depende del tipo de solución y su alcance. Estas son referencias orientativas:',
      details: [
        'Página web: desde S/ 500',
        'Tienda online: desde S/ 2,500',
        'Software a medida: desde S/ 1,500',
        'Marketing digital: desde S/ 600/mes'
      ]
    },
    {
      question: '¿Cuánto tarda un proyecto?',
      answer: 'Los tiempos varían según el tipo y alcance del proyecto:',
      details: [
        'Landing page: 1 semana',
        'Sitio corporativo: 2 semanas',
        'Tienda online o app: más de 1 mes según alcance'
      ]
    },
    {
      question: '¿Usan WordPress, Wix o plantillas?',
      answer: 'No. Desarrollo cada proyecto desde cero con código personalizado. Eso garantiza mejor rendimiento, seguridad, diseño único y un sitio pensado para tu negocio, no para encajar en una plantilla genérica.'
    },
    {
      question: '¿Dominio y hosting están incluidos?',
      answer: 'En proyectos web (página, tienda o rediseño) incluyo dominio y hosting gratis los primeros 6 meses. Después puedes continuar con un plan de mantenimiento mensual o migrar a tu propio proveedor.'
    },
    {
      question: '¿Incluye soporte?',
      answer: 'Sí. Todos los proyectos incluyen soporte post-entrega y puedes contratar mantenimiento opcional para actualizaciones, mejoras y respuesta prioritaria cuando lo necesites.'
    },
    {
      question: '¿Trabajas remoto?',
      answer: 'Sí. Trabajo de forma remota con clientes en todo el Perú y Latinoamérica, con reuniones por videollamada, seguimiento claro y entregables documentados en cada etapa.'
    }
  ];

  // Servicios con imágenes locales
  services = [
    {
      name: 'Página Web',
      route: '/servicios/pagina-web',
      icon: 'language',
      image: '/assets/services/pagina web.jpg',
      tag: 'Identidad',
      outcome: 'Presencia corporativa confiable',
      description: 'Sitios institucionales a medida, con diseño claro y código optimizado.',
      audience: 'Para empresas que necesitan presencia profesional online'
    },
    {
      name: 'Tienda Online',
      route: '/servicios/tienda-virtual',
      icon: 'shopping_bag',
      image: '/assets/services/tienda online.jpg',
      tag: 'E‑commerce',
      outcome: 'Catálogo listo para vender',
      description: 'E‑commerce con catálogo, carrito y pasarela de pagos integrados.',
      audience: 'Para negocios que quieren vender productos en internet'
    },
    {
      name: 'Marketing Digital',
      route: '/servicios/marketing-digital',
      icon: 'campaign',
      image: '/assets/services/marketing.jpg',
      tag: 'Estrategia',
      outcome: 'Comunicación constante de marca',
      description: 'Estrategia, contenido y redes para hacer crecer tu presencia online.',
      audience: 'Para marcas que quieren crecer en redes y contenido'
    },
    {
      name: 'Rediseño Web',
      route: '/servicios/rediseno-paginas-web',
      icon: 'autorenew',
      image: '/assets/services/rediseño.jpg',
      tag: 'Renovación',
      outcome: 'Imagen renovada y profesional',
      description: 'Modernizamos tu sitio actual con mejor UX, performance y conversión.',
      audience: 'Para sitios actuales que no generan resultados'
    },
    {
      name: 'Apps Móviles',
      route: '/servicios/aplicaciones-moviles',
      icon: 'phone_iphone',
      image: '/assets/services/app movil.jpg',
      tag: 'Producto',
      outcome: 'Experiencias móviles fluidas',
      description: 'Apps nativas e híbridas para iOS y Android con diseño intuitivo.',
      audience: 'Para negocios que necesitan llegar al móvil'
    },
    {
      name: 'Software a Medida',
      route: '/servicios/digitalizacion-procesos',
      icon: 'auto_awesome',
      image: '/assets/services/software a medida.jpg',
      tag: 'Automatización',
      outcome: 'Operación ordenada y automatizada',
      description: 'Software personalizado para automatizar procesos y ganar eficiencia.',
      audience: 'Para equipos que quieren ordenar su operación'
    }
  ];

  formatServiceIndex(index: number): string {
    return (index + 1).toString().padStart(2, '0');
  }

  trackCarouselSlide(_index: number, slide: CarouselSlide): string {
    return slide.key;
  }

  private readonly indicatorGapPx = 8;
  private readonly carouselTransitionMs = 900;
  private readonly carouselCursorOffsetX = 10;
  private readonly carouselCursorOffsetY = 14;

  get indicatorThumbWidth(): string {
    const count = this.services.length;
    return `calc((100% - ${(count - 1) * this.indicatorGapPx}px) / ${count})`;
  }

  get indicatorThumbOffset(): string {
    const index = this.activeServiceIndex;
    const count = this.services.length;
    const gap = this.indicatorGapPx;
    const segment = `(100% - ${(count - 1) * gap}px) / ${count}`;
    return `calc(${index} * (${segment} + ${gap}px))`;
  }

  onSlideClick(slideTrackIndex: number, event: Event) {
    this.clearCarouselCursor();

    if (slideTrackIndex === this.trackIndex) {
      void this.router.navigateByUrl(this.services[this.activeServiceIndex].route);
      return;
    }

    event.preventDefault();
    const slide = this.carouselSlides[slideTrackIndex];
    this.moveToTrackIndex(slideTrackIndex, slide.serviceIndex);
  }

  onSlideHover(slideTrackIndex: number, event: MouseEvent) {
    if (this.carouselCursorHideTimeout) {
      clearTimeout(this.carouselCursorHideTimeout);
      this.carouselCursorHideTimeout = null;
    }

    let label: string;
    if (slideTrackIndex === this.trackIndex - 1) {
      label = 'Anterior';
    } else if (slideTrackIndex === this.trackIndex + 1) {
      label = 'Siguiente';
    } else {
      this.hideCarouselCursor();
      return;
    }

    const wasHidden = !this.carouselCursorShown;
    this.carouselCursorLabel = label;
    this.updateCarouselCursorPosition(event);

    if (wasHidden) {
      this.carouselCursorShown = false;
      requestAnimationFrame(() => {
        if (!this.destroyed && this.carouselCursorLabel === label) {
          this.carouselCursorShown = true;
        }
      });
    } else {
      this.carouselCursorShown = true;
    }
  }

  clearCarouselCursor() {
    this.hideCarouselCursor();
  }

  private hideCarouselCursor() {
    if (!this.carouselCursorLabel && !this.carouselCursorShown) {
      return;
    }

    this.carouselCursorShown = false;

    if (this.carouselCursorHideTimeout) {
      clearTimeout(this.carouselCursorHideTimeout);
    }

    this.carouselCursorHideTimeout = setTimeout(() => {
      if (!this.carouselCursorShown) {
        this.carouselCursorLabel = '';
      }
      this.carouselCursorHideTimeout = null;
    }, 220);
  }

  private updateCarouselCursorPosition(event: MouseEvent) {
    const cursor = this.carouselCursor?.nativeElement;
    if (!cursor) {
      return;
    }

    cursor.style.left = `${event.clientX + this.carouselCursorOffsetX}px`;
    cursor.style.top = `${event.clientY + this.carouselCursorOffsetY}px`;
  }

  private readonly onCarouselMouseMove = (event: MouseEvent) => {
    if (!this.carouselCursorLabel) {
      return;
    }

    this.updateCarouselCursorPosition(event);
  };

  private setupCarouselCursorListeners() {
    const carousel = this.servicesCarousel?.nativeElement;
    if (!carousel) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      carousel.addEventListener('mousemove', this.onCarouselMouseMove, { passive: true });
    });
  }

  private teardownCarouselCursorListeners() {
    const carousel = this.servicesCarousel?.nativeElement;
    carousel?.removeEventListener('mousemove', this.onCarouselMouseMove);
  }

  private syncCarouselTransform() {
    const slideShare = 62;
    const gap = 1.25;
    const centerOffset = (100 - slideShare) / 2;
    this.carouselTransform = `translateX(calc(-${this.trackIndex} * (${slideShare}% + ${gap}rem) + ${centerOffset}%))`;
  }

  private preloadServiceImages() {
    for (const service of this.services) {
      const img = new Image();
      img.decoding = 'async';
      img.src = service.image;
    }
  }

  private portfolioScrollEnabled = false;
  private portfolioActiveCard: HTMLElement | null = null;
  private portfolioStepTimer: ReturnType<typeof setInterval> | null = null;
  private portfolioStepTimeout: ReturnType<typeof setTimeout> | null = null;
  private readonly portfolioCycles = new WeakMap<HTMLElement, { step: number; maxSteps: number; stepPx: number }>();
  private readonly portfolioSectionStepPx = 1080;
  private readonly portfolioStepIntervalMs = 3200;
  private readonly portfolioStepDurationMs = 1100;
  private readonly portfolioStepEasing = 'cubic-bezier(0.22, 1, 0.36, 1)';

  private readonly onPortfolioMouseOver = (event: MouseEvent) => {
    const card = (event.target as Element).closest('.portfolio-card--scroll') as HTMLElement | null;
    if (!card || card === this.portfolioActiveCard) {
      return;
    }

    if (this.portfolioActiveCard) {
      this.stopPortfolioScroll(true, this.portfolioActiveCard);
    }

    this.portfolioActiveCard = card;
    this.startPortfolioScrollCycle(card);
  };

  private readonly onPortfolioMouseOut = (event: MouseEvent) => {
    const card = (event.target as Element).closest('.portfolio-card--scroll') as HTMLElement | null;
    if (!card || card !== this.portfolioActiveCard) {
      return;
    }

    const related = event.relatedTarget as Node | null;
    if (related && card.contains(related)) {
      return;
    }

    this.stopPortfolioScroll(true, card);
    this.portfolioActiveCard = null;
  };

  private getPortfolioStepPx(img: HTMLImageElement, media: HTMLElement): number {
    if (!img.naturalWidth) {
      return this.portfolioSectionStepPx;
    }

    return this.portfolioSectionStepPx * (media.clientWidth / img.naturalWidth);
  }

  private getPortfolioMaxSteps(img: HTMLImageElement, media: HTMLElement, stepPx: number): number {
    const displayedHeight = (img.naturalHeight / img.naturalWidth) * media.clientWidth;
    const maxScroll = Math.max(0, displayedHeight - media.clientHeight);
    return Math.max(0, Math.floor(maxScroll / stepPx));
  }

  private setPortfolioImageY(img: HTMLImageElement, y: number, animate: boolean) {
    img.style.transition = animate
      ? `transform ${this.portfolioStepDurationMs}ms ${this.portfolioStepEasing}`
      : 'none';
    img.style.transform = `translate3d(0, ${y}px, 0)`;
  }

  private startPortfolioScrollCycle(card: HTMLElement) {
    const img = card.querySelector('.portfolio-card-image--scroll') as HTMLImageElement | null;
    const media = card.querySelector('.portfolio-card-media') as HTMLElement | null;
    if (!img || !media) {
      return;
    }

    const begin = () => {
      if (this.destroyed || this.portfolioActiveCard !== card) {
        return;
      }

      if (!img.naturalWidth) {
        return;
      }

      const stepPx = this.getPortfolioStepPx(img, media);
      const maxSteps = this.getPortfolioMaxSteps(img, media, stepPx);
      if (maxSteps <= 0) {
        return;
      }

      this.stopPortfolioScroll(false, card);
      card.classList.add('is-scrolling');
      this.portfolioCycles.set(card, { step: 0, maxSteps, stepPx });
      this.setPortfolioImageY(img, 0, false);

      const advance = () => {
        if (this.destroyed || this.portfolioActiveCard !== card) {
          return;
        }

        const state = this.portfolioCycles.get(card);
        if (!state) {
          return;
        }

        state.step = state.step >= state.maxSteps ? 0 : state.step + 1;
        this.setPortfolioImageY(img, -state.step * state.stepPx, true);
      };

      this.portfolioStepTimeout = setTimeout(() => {
        if (this.destroyed || this.portfolioActiveCard !== card) {
          return;
        }

        advance();
        this.portfolioStepTimer = setInterval(advance, this.portfolioStepIntervalMs);
      }, 700);
    };

    if (img.complete && img.naturalWidth) {
      begin();
    } else {
      img.addEventListener('load', begin, { once: true });
    }
  }

  private stopPortfolioScroll(reset = false, card?: HTMLElement | null) {
    if (this.portfolioStepTimer) {
      clearInterval(this.portfolioStepTimer);
      this.portfolioStepTimer = null;
    }

    if (this.portfolioStepTimeout) {
      clearTimeout(this.portfolioStepTimeout);
      this.portfolioStepTimeout = null;
    }

    const target = card ?? this.portfolioActiveCard;
    if (!target) {
      return;
    }

    target.classList.remove('is-scrolling');

    if (reset) {
      const img = target.querySelector('.portfolio-card-image--scroll') as HTMLImageElement | null;
      const state = this.portfolioCycles.get(target);
      if (state) {
        state.step = 0;
      }

      if (img) {
        this.setPortfolioImageY(img, 0, true);
      }
    }
  }

  private preloadPortfolioScrollImages() {
    for (const project of this.portfolioProjects) {
      const img = new Image();
      img.decoding = 'async';
      img.src = project.scrollUrl;
    }
  }

  private setupPortfolioScrollImages() {
    const grid = this.portfolioGrid?.nativeElement;
    if (!grid) {
      return;
    }

    this.portfolioScrollEnabled = typeof window !== 'undefined'
      && window.matchMedia('(hover: hover) and (pointer: fine)').matches
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.preloadPortfolioScrollImages();

    if (!this.portfolioScrollEnabled) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      grid.addEventListener('mouseover', this.onPortfolioMouseOver);
      grid.addEventListener('mouseout', this.onPortfolioMouseOut);
    });
  }

  private teardownPortfolioScrollListeners() {
    this.stopPortfolioScroll(true);
    this.portfolioActiveCard = null;

    const grid = this.portfolioGrid?.nativeElement;
    if (!grid) {
      return;
    }

    grid.removeEventListener('mouseover', this.onPortfolioMouseOver);
    grid.removeEventListener('mouseout', this.onPortfolioMouseOut);
  }

  onSlideKeydown(slideTrackIndex: number, event: KeyboardEvent) {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    this.onSlideClick(slideTrackIndex, event);
  }

  private moveToTrackIndex(trackIndex: number, serviceIndex: number) {
    if (trackIndex === this.trackIndex && serviceIndex === this.activeServiceIndex) {
      return;
    }

    this.trackIndex = trackIndex;
    this.activeServiceIndex = serviceIndex;
    this.syncCarouselTransform();
    this.triggerCarouselTransition();
    this.scheduleCloneReset();
  }

  private scheduleCloneReset() {
    if (this.carouselResetTimeout) {
      clearTimeout(this.carouselResetTimeout);
    }

    this.carouselResetTimeout = setTimeout(() => {
      if (!this.destroyed) {
        this.realignCarouselTrack();
      }
    }, this.carouselTransitionMs);
  }

  private realignCarouselTrack() {
    const count = this.services.length;
    if (count === 0) {
      return;
    }

    if (this.trackIndex >= count * 2) {
      this.jumpTrackWithoutTransition(this.trackIndex - count);
    } else if (this.trackIndex < count) {
      this.jumpTrackWithoutTransition(this.trackIndex + count);
    }
  }

  private jumpTrackWithoutTransition(trackIndex: number) {
    this.trackTransitionEnabled = false;
    this.trackIndex = trackIndex;
    this.syncCarouselTransform();

    requestAnimationFrame(() => {
      if (this.destroyed) {
        return;
      }

      requestAnimationFrame(() => {
        if (!this.destroyed) {
          this.trackTransitionEnabled = true;
        }
      });
    });
  }

  private buildCarouselSlides() {
    const count = this.services.length;
    if (count === 0) {
      this.carouselSlides = [];
      this.trackIndex = 0;
      return;
    }

    const buildSet = (prefix: string): CarouselSlide[] =>
      this.services.map((service, index) => ({
        service,
        serviceIndex: index,
        key: `${prefix}-${index}`
      }));

    this.carouselSlides = [
      ...buildSet('set-a'),
      ...buildSet('set-b'),
      ...buildSet('set-c')
    ];
    this.trackIndex = count;
    this.activeServiceIndex = 0;
    this.syncCarouselTransform();
  }

  private triggerCarouselTransition() {
    if (this.carouselTransitionTimeout) {
      clearTimeout(this.carouselTransitionTimeout);
    }

    this.carouselTransitioning = true;
    this.carouselTransitionTimeout = setTimeout(() => {
      if (!this.destroyed) {
        this.carouselTransitioning = false;
      }
    }, this.carouselTransitionMs);
  }

  ngOnInit() {
    this.buildCarouselSlides();
  }

  nextService(event?: Event) {
    event?.preventDefault();
    event?.stopPropagation();
    const count = this.services.length;
    if (count === 0) {
      return;
    }

    const nextActive = (this.activeServiceIndex + 1) % count;
    this.moveToTrackIndex(this.trackIndex + 1, nextActive);
  }

  prevService(event?: Event) {
    event?.preventDefault();
    event?.stopPropagation();
    const count = this.services.length;
    if (count === 0) {
      return;
    }

    const nextActive = (this.activeServiceIndex - 1 + count) % count;
    this.moveToTrackIndex(this.trackIndex - 1, nextActive);
  }

  goToService(index: number, event?: Event) {
    event?.preventDefault();
    event?.stopPropagation();

    const count = this.services.length;
    if (count === 0 || index === this.activeServiceIndex) {
      return;
    }

    const current = this.activeServiceIndex;
    const forwardSteps = (index - current + count) % count;
    const backwardSteps = (current - index + count) % count;

    if (forwardSteps <= backwardSteps) {
      this.moveToTrackIndex(this.trackIndex + forwardSteps, index);
    } else {
      this.moveToTrackIndex(this.trackIndex - backwardSteps, index);
    }
  }

  onCarouselKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.nextService();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prevService();
    }
  }

  private scrollTimeout: ReturnType<typeof setTimeout> | null = null;
  private initTimeout: ReturnType<typeof setTimeout> | null = null;
  private carouselTransitionTimeout: ReturnType<typeof setTimeout> | null = null;
  private carouselResetTimeout: ReturnType<typeof setTimeout> | null = null;
  private carouselCursorHideTimeout: ReturnType<typeof setTimeout> | null = null;
  private servicesIntroTimeout: ReturnType<typeof setTimeout> | null = null;
  private portfolioIntroTimeout: ReturnType<typeof setTimeout> | null = null;
  private faqIntroTimeout: ReturnType<typeof setTimeout> | null = null;
  private whyIntroTimeouts: ReturnType<typeof setTimeout>[] = [];
  private destroyed = false;
  private lastScrollTime = 0;
  private readonly scrollThrottle = 100;

  ngAfterViewInit() {
    this.initHeroVideo();
    this.setupCarouselCursorListeners();
    this.setupPortfolioScrollImages();

    this.initTimeout = setTimeout(() => {
      if (!this.destroyed) {
        this.checkScroll();
      }
    }, 50);
  }

  private initHeroVideo() {
    const video = this.heroVideo?.nativeElement;
    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      if (this.destroyed) {
        return;
      }
      video.play().catch(() => {});
    };

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      tryPlay();
      return;
    }

    video.addEventListener('canplay', tryPlay, { once: true });
    video.load();
  }

  private stopHeroVideo() {
    const video = this.heroVideo?.nativeElement;
    if (!video) {
      return;
    }

    video.pause();
    video.removeAttribute('src');
    video.load();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const now = Date.now();
    if (now - this.lastScrollTime < this.scrollThrottle) {
      return;
    }
    this.lastScrollTime = now;

    this.scrollY = window.scrollY;

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    this.scrollTimeout = setTimeout(() => {
      this.checkScroll();
    }, 50);
  }

  // Cache de elementos para no buscar en el DOM repetidamente
  private elementCache: { [key: string]: Element | null } = {};

  checkScroll() {
    if (this.destroyed) {
      return;
    }

    if (!this.whyShowcaseEntered) {
      this.animateOnScroll('why-showcase', () => {
        this.playWhyShowcaseIntro();
      });
    }

    if (!this.servicesVisible) {
      this.animateOnScroll('services-section', () => {
        this.playServicesIntro();
      });
    }

    if (!this.portfolioVisible) {
      this.animateOnScroll('portfolio-section', () => {
        this.playPortfolioIntro();
      });
    }

    if (!this.faqVisible) {
      this.animateOnScroll('faq-section', () => {
        this.playFaqIntro();
      });
    }

    if (!this.ctaVisible) {
      this.animateOnScroll('cta-section', () => {
        this.ctaVisible = true;
      });
    }
  }

  animateOnScroll(elementId: string, callback: () => void) {
    if (!this.elementCache[elementId]) {
      this.elementCache[elementId] = document.getElementById(elementId);
    }

    const element = this.elementCache[elementId];
    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.75;

      if (isVisible) {
        callback();
      }
    }
  }

  private playPortfolioIntro() {
    if (this.portfolioVisible || this.destroyed) {
      return;
    }

    this.portfolioVisible = true;

    const prefersReducedMotion = typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.portfolioIntroDone = true;
      return;
    }

    if (this.portfolioIntroTimeout) {
      clearTimeout(this.portfolioIntroTimeout);
    }

    this.portfolioIntroTimeout = setTimeout(() => {
      if (!this.destroyed) {
        this.portfolioIntroDone = true;
      }
      this.portfolioIntroTimeout = null;
    }, 1800);
  }

  private playFaqIntro() {
    if (this.faqVisible || this.destroyed) {
      return;
    }

    this.faqVisible = true;

    const prefersReducedMotion = typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.faqIntroDone = true;
      return;
    }

    if (this.faqIntroTimeout) {
      clearTimeout(this.faqIntroTimeout);
    }

    this.faqIntroTimeout = setTimeout(() => {
      if (!this.destroyed) {
        this.faqIntroDone = true;
      }
      this.faqIntroTimeout = null;
    }, 1900);
  }

  private playServicesIntro() {
    if (this.servicesVisible || this.destroyed) {
      return;
    }

    this.servicesVisible = true;
    this.preloadServiceImages();

    const prefersReducedMotion = typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.servicesIntroDone = true;
      return;
    }

    if (this.servicesIntroTimeout) {
      clearTimeout(this.servicesIntroTimeout);
    }

    this.servicesIntroTimeout = setTimeout(() => {
      if (!this.destroyed) {
        this.servicesIntroDone = true;
      }
      this.servicesIntroTimeout = null;
    }, 1300);
  }

  private playWhyShowcaseIntro() {
    if (this.whyShowcaseEntered || this.destroyed) {
      return;
    }

    this.whyShowcaseEntered = true;

    const prefersReducedMotion = typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.whyTitleRevealed = true;
      this.whyRevealedListCount = this.diferenciales.length;
      this.whyBgRevealed = true;
      this.whyDetailRevealed = true;
      return;
    }

    this.scheduleWhyIntro(120, () => {
      this.whyTitleRevealed = true;
    });

    const listStart = 520;
    const listStagger = 110;

    this.diferenciales.forEach((_, index) => {
      this.scheduleWhyIntro(listStart + index * listStagger, () => {
        this.whyRevealedListCount = index + 1;
      });
    });

    const bgDelay = listStart + this.diferenciales.length * listStagger + 320;
    this.scheduleWhyIntro(bgDelay, () => {
      this.whyBgRevealed = true;
      this.whyDetailRevealed = true;
    });
  }

  private scheduleWhyIntro(delayMs: number, callback: () => void) {
    const timeoutId = setTimeout(() => {
      if (!this.destroyed) {
        callback();
      }
    }, delayMs);

    this.whyIntroTimeouts.push(timeoutId);
  }

  private clearWhyIntroTimeouts() {
    this.whyIntroTimeouts.forEach(clearTimeout);
    this.whyIntroTimeouts = [];
  }

  setActiveDiferencial(index: number) {
    this.activeDiferencialIndex = index;
  }

  setActiveProcess(index: number) {
    this.activeProcessIndex = index;
  }

  toggleFaq(index: number) {
    this.activeFaqIndex = this.activeFaqIndex === index ? -1 : index;
  }

  onCtaMouseMove(event: MouseEvent) {
    const wrap = event.currentTarget as HTMLElement;
    const rect = wrap.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const maxOffset = window.innerWidth <= 768 ? 12 : 24;
    const deltaX = (event.clientX - centerX) * 0.18;
    const deltaY = (event.clientY - centerY) * 0.18;

    this.ctaMagnetX = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
    this.ctaMagnetY = Math.max(-maxOffset, Math.min(maxOffset, deltaY));
    this.ctaMagnetActive = true;
  }

  onCtaMouseLeave() {
    this.ctaMagnetX = 0;
    this.ctaMagnetY = 0;
    this.ctaMagnetActive = false;
  }

  ngOnDestroy() {
    this.destroyed = true;
    this.teardownCarouselCursorListeners();
    this.teardownPortfolioScrollListeners();
    this.clearWhyIntroTimeouts();

    if (this.servicesIntroTimeout) {
      clearTimeout(this.servicesIntroTimeout);
      this.servicesIntroTimeout = null;
    }

    if (this.portfolioIntroTimeout) {
      clearTimeout(this.portfolioIntroTimeout);
      this.portfolioIntroTimeout = null;
    }

    if (this.faqIntroTimeout) {
      clearTimeout(this.faqIntroTimeout);
      this.faqIntroTimeout = null;
    }

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = null;
    }

    if (this.initTimeout) {
      clearTimeout(this.initTimeout);
      this.initTimeout = null;
    }

    if (this.carouselTransitionTimeout) {
      clearTimeout(this.carouselTransitionTimeout);
      this.carouselTransitionTimeout = null;
    }

    if (this.carouselResetTimeout) {
      clearTimeout(this.carouselResetTimeout);
      this.carouselResetTimeout = null;
    }

    if (this.carouselCursorHideTimeout) {
      clearTimeout(this.carouselCursorHideTimeout);
      this.carouselCursorHideTimeout = null;
    }

    this.stopHeroVideo();
  }
}
