import { Component, OnInit, HostListener, AfterViewInit, OnDestroy, ViewChild, ElementRef, NgZone, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { initHomeGsapAnimations } from './home-gsap-animations';

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
  @HostBinding('class.gsap-enabled') gsapEnabled = false;

  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;
  @ViewChild('servicesCarousel') servicesCarousel?: ElementRef<HTMLElement>;
  @ViewChild('carouselCursor') carouselCursor?: ElementRef<HTMLElement>;
  @ViewChild('portfolioGrid') portfolioGrid?: ElementRef<HTMLElement>;
  @ViewChild('whyStory') whyStory?: ElementRef<HTMLElement>;
  @ViewChild('processStory') processStory?: ElementRef<HTMLElement>;

  private readonly pageTitle =
    'Agencia Digital en Perú | Desarrollo Web y Marketing Digital | NeoWeb';
  private readonly metaDescription =
    'Agencia digital en Perú: desarrollo web a medida, tiendas online, apps y marketing digital. Sitios rápidos, optimizados para SEO y pensados para vender más. Cotiza con NeoWeb.';

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private host: ElementRef<HTMLElement>,
    private title: Title,
    private meta: Meta
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
  whyCopyNonce = 0;
  processCopyNonce = 0;
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
      scrollUrl: '/assets/portfolio/scrolls/omed-scroll.webp',
      result: 'Web para 2 sedes (Cusco y Tacna) con mejor posicionamiento local'
    },
    {
      id: 'sml-web',
      title: 'Santa María Laura',
      category: 'Colegio Privado',
      scrollUrl: '/assets/portfolio/scrolls/sml-scroll.webp',
      result: 'Presencia institucional con admisión 2026 activa y blog educativo'
    },
    {
      id: 'hombre-universal',
      title: 'Hombre Universal',
      category: 'Publicación Editorial',
      scrollUrl: '/assets/portfolio/scrolls/hombreuniversal-scroll.webp',
      result: 'Plataforma editorial premium para difundir pensamiento y filosofía'
    },
    {
      id: 'yachaytambo',
      title: 'Yachay Tambo',
      category: 'Retiro Vivencial',
      scrollUrl: '/assets/portfolio/scrolls/yachaytambo-scroll.webp',
      result: 'Presencia digital para retiros en Urubamba y Tacna'
    }
  ];

  // Diferenciales para showcase interactivo
  diferenciales = [
    {
      title: 'Diseño web a tu medida',
      description: 'Cada sección, color y estructura está pensada estratégicamente para tu marca: identidad visual propia y una experiencia que guía al usuario hacia la conversión.',
      icon: 'palette',
      points: ['Identidad visual propia', 'UX pensado para convertir'],
      image: '/assets/home/por que neoweb/diseño web.webp'
    },
    {
      title: 'Código real, no plantillas',
      description: 'Construimos tu página desde cero con código personalizado, sin plantillas, sin Wix, sin WordPress. Esto garantiza rendimiento, seguridad y un diseño único para tu negocio.',
      icon: 'code',
      points: ['Sin Wix ni WordPress', 'Mejor rendimiento y seguridad'],
      image: '/assets/home/por que neoweb/codigo real.webp'
    },
    {
      title: 'Correo empresarial profesional',
      description: 'Configuramos tu correo corporativo con el dominio de tu negocio, para que tu marca se vea más seria y confiable en cada comunicación.',
      icon: 'alternate_email',
      points: ['nombre@tuempresa.com', 'Mayor credibilidad'],
      image: '/assets/home/por que neoweb/correo empresarial.webp'
    },
    {
      title: 'Optimización SEO desde la base',
      description: 'Estructuramos el sitio para que los buscadores lo entiendan desde el día uno: metadatos, velocidad y contenido pensado para posicionar.',
      icon: 'travel_explore',
      points: ['Estructura indexable', 'Mejor posicionamiento'],
      image: '/assets/home/por que neoweb/seo.webp'
    },
    {
      title: 'Velocidad y rendimiento',
      description: 'Optimizamos cada recurso para que tu página cargue rápido en cualquier dispositivo, mejorando la experiencia y el posicionamiento.',
      icon: 'speed',
      points: ['Carga rápida', 'Optimizado para móvil'],
      image: '/assets/home/por que neoweb/velocidad.webp'
    },
    {
      title: 'Soporte y acompañamiento',
      description: 'Te guiamos en todo el proceso: mejoras, recomendaciones, actualizaciones y soporte técnico rápido cuando lo necesites.',
      icon: 'support_agent',
      points: ['Comunicación directa', 'Mejoras continuas'],
      image: '/assets/home/por que neoweb/soporte.webp'
    }
  ];

  processSteps = [
    {
      title: 'Discovery',
      description: 'Objetivos, alcance y priorización para entender el reto de negocio. Analizo tu mercado y competencia.',
      deliverables: ['Kickoff meeting', 'Brief completo'],
      image: '/assets/home/proceso/discovery.webp'
    },
    {
      title: 'UX & UI',
      description: 'Wireframes, diseño visual y microcopys orientados a conversión. Cada elemento pensado para generar resultados.',
      deliverables: ['Prototipo navegable', 'Design system'],
      image: '/assets/home/proceso/uxui.webp'
    },
    {
      title: 'Desarrollo',
      description: 'Código a medida, performance optimizado, SEO técnico y QA continuo. Desarrollo limpio y escalable.',
      deliverables: ['Entregables parciales', 'Code review'],
      image: '/assets/home/proceso/desarrollo.webp'
    },
    {
      title: 'Lanzamiento',
      description: 'Go-live, optimización, analítica configurada y handoff con soporte cercano. Tu proyecto listo para crecer.',
      deliverables: ['Checklist completo', 'Métricas y reportes'],
      image: '/assets/home/proceso/lanzamiento.webp'
    }
  ];

  homeFaqs = [
    {
      question: '¿Cuánto cuesta un proyecto?',
      answer: 'Depende de qué te entrego, no de “más grande”. Referencias:',
      details: [
        'Página web: desde S/ 600 (Landing)',
        'Rediseño web: desde S/ 600 (Actualiza)',
        'Tienda online: desde S/ 2,000 (Emprende)',
        'App móvil: desde S/ 2,500 (Lanzamiento)',
        'Software a medida: desde S/ 2,000 (Diario)',
        'Marketing digital: desde S/ 500/mes'
      ]
    },
    {
      question: '¿Qué diferencia hay entre los planes de páginas web?',
      answer: 'Cada uno te entrega una web distinta. No es la misma un poco más grande:',
      details: [
        'Landing (S/ 600): una sola página. Quien abre el link baja y te escribe. Para un anuncio o WhatsApp.',
        'Sitio (S/ 1,000): 5 páginas con menú (Inicio, Nosotros, Servicios, Preguntas, Contacto).',
        'Sitio Pro (S/ 1,500): el Sitio más hasta 4 páginas extra (un servicio, el equipo, una sede…) y ves cuánta gente entra.'
      ]
    },
    {
      question: '¿Qué diferencia hay entre los planes de rediseño web?',
      answer: 'Cada uno hace un trabajo distinto con la web que ya tienes. Si no tienes web, el servicio es Páginas web:',
      details: [
        'Actualiza (S/ 600): misma web, cara nueva. Conservas páginas y textos.',
        'Evoluciona (S/ 1,000): eso, y además cambio qué ven primero para que te escriban.',
        'Transforma (S/ 1,500): la armo de nuevo, paso textos y fotos, y conservo tu dirección.'
      ]
    },
    {
      question: '¿Qué diferencia hay entre los planes de marketing?',
      answer: 'Cada plan hace un trabajo distinto. No es la misma gestión con más publicaciones:',
      details: [
        'Start (S/ 500/mes): presencia en Facebook e Instagram. No incluye anuncios.',
        'Pro (S/ 900/mes): contenido con objetivo de consultas o visitas a tu web. Sin pauta.',
        'Premium (S/ 1,400/mes): lo de Pro más gestión de Meta Ads. La pauta la inviertes tú.'
      ]
    },
    {
      question: '¿Qué diferencia hay entre los planes de tienda online?',
      answer: 'Cada uno hace un trabajo distinto. No es “más productos”:',
      details: [
        'Emprende (S/ 2,000): el cliente paga y tú ves el pedido. Productos simples, sin talla ni color.',
        'Crece (S/ 3,000): talla o color, cupones, aviso si dejan la compra, y lista para anuncios de Facebook e Instagram.',
        'Escala (desde S/ 4,500): un empleado también ve pedidos, o cada compra se copia a un programa que ya usas. Se cotiza.'
      ]
    },
    {
      question: '¿Qué diferencia hay entre los planes de apps móviles?',
      answer: 'Cada uno hace un trabajo distinto. No es “más pantallas”:',
      details: [
        'Lanzamiento (S/ 2,500): sin cuentas, solo Android. Ven lo que ofreces y te escriben por WhatsApp.',
        'Crecimiento (S/ 4,500): se registran y les llega un aviso. Solo Android.',
        'Escala (desde S/ 6,500): una extra cotizada: iPhone, cobrar, un empleado, o copiar datos a otro programa.'
      ]
    },
    {
      question: '¿Qué diferencia hay entre los planes de software a medida?',
      answer: 'Es el mismo sistema, en tres fases. No es “más pantallas”:',
      details: [
        'Diario (S/ 2,000): el equipo registra el trabajo del día y lo consulta. Sin ingresos ni gastos.',
        'Control (S/ 3,500): eso, más ingresos, gastos y un reporte de las finanzas.',
        'Amplía (desde S/ 5,000): una extra cotizada: otra sede, otro módulo, o copiar datos a otro programa.'
      ]
    },
    {
      question: '¿Cuánto tarda un proyecto?',
      answer: 'Los tiempos varían según el plan:',
      details: [
        'Landing o Actualiza: 1 semana',
        'Sitio, Sitio Pro, Evoluciona o Transforma: 1 a 3 semanas',
        'Tienda online: más de 1 mes según alcance',
        'App Lanzamiento: 3 a 4 semanas',
        'App Crecimiento o Escala: 2 a 3 meses',
        'Software Diario: 4 a 6 semanas',
        'Software Control o Amplía: 2 a 3 meses'
      ]
    },
    {
      question: '¿Usas WordPress, Wix o plantillas?',
      answer: 'No. Lo programo desde cero, a la medida de tu negocio. No uso plantillas de Wix ni WordPress.'
    },
    {
      question: '¿El nombre de la web y el alojamiento van incluidos?',
      answer: 'En página, tienda o rediseño va el nombre de tu web y el alojamiento los primeros 6 meses. Después puedes seguir con un mantenimiento mensual o pasarlo a tu propio proveedor.'
    },
    {
      question: '¿Incluye soporte?',
      answer: 'Sí. Después de publicar te ayudo con fallas y ajustes chicos que entren en el plan. Un mantenimiento mensual para cambios y prioridad se contrata aparte.'
    },
    {
      question: '¿Trabajas remoto?',
      answer: 'Sí. Trabajo remoto con clientes en todo el Perú. Nos vemos por videollamada y te voy entregando cada etapa por escrito.'
    }
  ];

  // Servicios con imágenes locales
  services = [
    {
      name: 'Página Web',
      route: '/servicios/pagina-web',
      icon: 'language',
      image: '/assets/services/pagina web.webp',
      tag: 'Web',
      outcome: 'Una página, un sitio, o páginas por servicio',
      description: 'Landing: una página para que te escriban. Sitio: 5 páginas con menú. Sitio Pro: además, páginas sueltas para tus servicios.',
      audience: 'Para quien quiere saber exactamente qué va a recibir'
    },
    {
      name: 'Tienda Online',
      route: '/servicios/tienda-virtual',
      icon: 'shopping_bag',
      image: '/assets/services/tienda online.webp',
      tag: 'Tienda',
      outcome: 'Empezar a vender, vender más o con equipo',
      description: 'Emprende: cobrar. Crece: talla, cupones y anuncios. Escala: un empleado ve pedidos, o se copian a otro programa.',
      audience: 'Para quien quiere saber qué plan de tienda le toca'
    },
    {
      name: 'Marketing Digital',
      route: '/servicios/marketing-digital',
      icon: 'campaign',
      image: '/assets/services/marketing.webp',
      tag: 'Redes',
      outcome: 'Contenido con un objetivo claro',
      description: 'Presencia en redes, contenido hacia tu web o captación con Meta Ads. Elige el trabajo, no la cantidad de posts.',
      audience: 'Para negocios que quieren saber qué plan les toca'
    },
    {
      name: 'Rediseño Web',
      route: '/servicios/rediseno-paginas-web',
      icon: 'autorenew',
      image: '/assets/services/rediseño.webp',
      tag: 'Renovación',
      outcome: 'Cara nueva, otro camino o hacerla de nuevo',
      description: 'Actualiza: se ve nueva. Evoluciona: además te escriben. Transforma: la armo de nuevo y muevo lo que sirve.',
      audience: 'Para quien ya tiene web y no sabe qué plan le toca'
    },
    {
      name: 'Apps Móviles',
      route: '/servicios/aplicaciones-moviles',
      icon: 'phone_iphone',
      image: '/assets/services/app movil.webp',
      tag: 'Producto',
      outcome: 'Sin cuentas, con usuarios o una extra',
      description: 'Lanzamiento: Android y WhatsApp. Crecimiento: cuentas en Android. Escala: iPhone, cobrar, un empleado u otro programa, cotizado.',
      audience: 'Para quien quiere saber qué app le toca'
    },
    {
      name: 'Software a Medida',
      route: '/servicios/digitalizacion-procesos',
      icon: 'auto_awesome',
      image: '/assets/services/software a medida.webp',
      tag: 'Automatización',
      outcome: 'El día a día, las finanzas o se cotiza',
      description: 'Diario: el equipo registra el trabajo. Control: eso y ves ingresos y gastos. Amplía: otra sede, módulo o programa, cotizado.',
      audience: 'Para quien quiere un sistema interno, no una web'
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
    const isCompact = typeof window !== 'undefined'
      && window.matchMedia('(max-width: 768px)').matches;
    const slideShare = isCompact ? 84 : 62;
    const gap = 1.25;
    const centerOffset = (100 - slideShare) / 2;
    this.carouselTransform = `translateX(calc(-${this.trackIndex} * (${slideShare}% + ${gap}rem) + ${centerOffset}%))`;
  }

  isCarouselImageReady(index: number): boolean {
    return Math.abs(index - this.trackIndex) <= 2;
  }

  isStoryLayerReady(index: number, active: number): boolean {
    return Math.abs(index - active) <= 1;
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

  private readonly portfolioCardEnterHandlers = new WeakMap<HTMLElement, () => void>();
  private readonly portfolioCardLeaveHandlers = new WeakMap<HTMLElement, () => void>();

  private bindPortfolioCard(card: HTMLElement) {
    if (this.portfolioCardEnterHandlers.has(card)) {
      return;
    }

    const onEnter = () => {
      if (this.portfolioActiveCard && this.portfolioActiveCard !== card) {
        this.stopPortfolioScroll(true, this.portfolioActiveCard);
      }

      this.portfolioActiveCard = card;
      this.startPortfolioScrollCycle(card);
    };

    const onLeave = () => {
      if (this.portfolioActiveCard !== card) {
        return;
      }

      this.stopPortfolioScroll(true, card);
      this.portfolioActiveCard = null;
    };

    this.portfolioCardEnterHandlers.set(card, onEnter);
    this.portfolioCardLeaveHandlers.set(card, onLeave);
    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mouseleave', onLeave);
  }

  private unbindPortfolioCards() {
    const grid = this.portfolioGrid?.nativeElement;
    if (!grid) {
      return;
    }

    grid.querySelectorAll('.portfolio-card--scroll').forEach((node) => {
      const card = node as HTMLElement;
      const onEnter = this.portfolioCardEnterHandlers.get(card);
      const onLeave = this.portfolioCardLeaveHandlers.get(card);

      if (onEnter) {
        card.removeEventListener('mouseenter', onEnter);
      }

      if (onLeave) {
        card.removeEventListener('mouseleave', onLeave);
      }
    });

  }

  private getPortfolioStepPx(img: HTMLImageElement, media: HTMLElement): number {
    if (!img.naturalWidth) {
      return this.portfolioSectionStepPx;
    }

    return this.portfolioSectionStepPx * (media.clientWidth / img.naturalWidth);
  }

  private getPortfolioMaxSteps(img: HTMLImageElement, media: HTMLElement, stepPx: number): number {
    const displayedHeight = (img.naturalHeight / img.naturalWidth) * media.clientWidth;
    const maxScroll = Math.max(0, displayedHeight - media.clientHeight);
    if (maxScroll <= 0 || stepPx <= 0) {
      return 0;
    }

    return Math.max(1, Math.floor(maxScroll / stepPx));
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
      grid.querySelectorAll('.portfolio-card--scroll').forEach((node) => {
        this.bindPortfolioCard(node as HTMLElement);
      });
    });
  }

  private teardownPortfolioScrollListeners() {
    this.stopPortfolioScroll(true);
    this.portfolioActiveCard = null;
    this.unbindPortfolioCards();
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
    this.title.setTitle(this.pageTitle);
    this.meta.updateTag({ name: 'description', content: this.metaDescription });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.metaDescription });
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
  private gsapCleanup: (() => void) | null = null;
  private whyScrollUnbind: (() => void) | null = null;
  private processScrollUnbind: (() => void) | null = null;
  private ctaMagnetRect: DOMRect | null = null;
  private storyRangeByEl = new WeakMap<HTMLElement, number>();
  private storyScrollRaf = 0;

  ngAfterViewInit() {
    this.initHeroVideo();
    this.setupCarouselCursorListeners();
    this.setupPortfolioScrollImages();

    if (!this.prefersReducedMotion()) {
      // Desactiva keyframes CSS antes de montar timelines GSAP
      this.gsapEnabled = true;
    }

    this.initTimeout = setTimeout(() => {
      if (this.destroyed) {
        return;
      }
      this.initMotionSystem();
    }, 50);
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private initMotionSystem() {
    if (this.prefersReducedMotion()) {
      this.gsapEnabled = false;
      this.revealAllSectionsInstant();
      return;
    }

    this.gsapEnabled = true;

    this.ngZone.runOutsideAngular(() => {
      this.gsapCleanup = initHomeGsapAnimations(this.host.nativeElement, {
        onServicesStart: () => this.ngZone.run(() => {
          this.servicesVisible = true;
        }),
        onServicesComplete: () => this.ngZone.run(() => {
          this.servicesIntroDone = true;
        }),
        onWhyComplete: () => this.ngZone.run(() => this.markWhyIntroDone()),
        onPortfolioComplete: () => this.ngZone.run(() => this.markPortfolioIntroDone()),
        onFaqComplete: () => this.ngZone.run(() => this.markFaqIntroDone()),
        onCtaComplete: () => this.ngZone.run(() => {
          this.ctaVisible = true;
        })
      });
    });

    this.bindHomeStoryScroll();
    if (this.isCompactHome()) {
      this.markWhyIntroDone();
    }
  }

  private revealAllSectionsInstant() {
    this.servicesVisible = true;
    this.servicesIntroDone = true;
    this.whyShowcaseEntered = true;
    this.whyTitleRevealed = true;
    this.whyRevealedListCount = this.diferenciales.length;
    this.whyBgRevealed = true;
    this.whyDetailRevealed = true;
    this.portfolioVisible = true;
    this.portfolioIntroDone = true;
    this.faqVisible = true;
    this.faqIntroDone = true;
    this.ctaVisible = true;
    this.bindHomeStoryScroll();
  }

  private markServicesIntroDone() {
    this.servicesVisible = true;
    this.servicesIntroDone = true;
  }

  private markWhyIntroDone() {
    this.whyShowcaseEntered = true;
    this.whyTitleRevealed = true;
    this.whyRevealedListCount = this.diferenciales.length;
    this.whyBgRevealed = true;
    this.whyDetailRevealed = true;
  }

  private markPortfolioIntroDone() {
    this.portfolioVisible = true;
    this.portfolioIntroDone = true;
  }

  private markFaqIntroDone() {
    this.faqVisible = true;
    this.faqIntroDone = true;
  }

  private initHeroVideo() {
    const video = this.heroVideo?.nativeElement;
    if (!video || !this.shouldLoadHeroVideo()) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.src = '/assets/home/hero.mp4';

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

  private shouldLoadHeroVideo(): boolean {
    if (typeof window === 'undefined' || this.prefersReducedMotion()) {
      return false;
    }

    if (window.matchMedia('(max-width: 768px)').matches) {
      return false;
    }

    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;

    if (connection?.saveData) {
      return false;
    }

    return true;
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
    if (this.destroyed || this.gsapEnabled) {
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

  @HostListener('window:resize')
  onResize() {
    if (this.destroyed) {
      return;
    }
    this.storyRangeByEl = new WeakMap();
    this.ctaMagnetRect = null;
    this.syncCarouselTransform();
    this.bindHomeStoryScroll();
  }

  private isCompactHome(): boolean {
    return typeof window !== 'undefined'
      && window.matchMedia('(max-width: 768px)').matches;
  }

  storyImage(path: string): string {
    return `url("${encodeURI(path)}")`;
  }

  private bindHomeStoryScroll() {
    this.unbindHomeStoryScroll();
    if (this.destroyed || !this.isCompactHome()) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      const onScroll = () => {
        if (this.storyScrollRaf) {
          return;
        }
        this.storyScrollRaf = requestAnimationFrame(() => {
          this.storyScrollRaf = 0;
          this.syncStoryIndex(
            this.whyStory?.nativeElement,
            this.diferenciales.length,
            'activeDiferencialIndex',
            'whyCopyNonce'
          );
          this.syncStoryIndex(
            this.processStory?.nativeElement,
            this.processSteps.length,
            'activeProcessIndex',
            'processCopyNonce'
          );
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      this.whyScrollUnbind = () => {
        window.removeEventListener('scroll', onScroll);
        if (this.storyScrollRaf) {
          cancelAnimationFrame(this.storyScrollRaf);
          this.storyScrollRaf = 0;
        }
      };
      onScroll();
    });
  }

  private unbindHomeStoryScroll() {
    this.whyScrollUnbind?.();
    this.whyScrollUnbind = null;
    this.processScrollUnbind?.();
    this.processScrollUnbind = null;
  }

  private syncStoryIndex(
    el: HTMLElement | undefined,
    steps: number,
    indexKey: 'activeDiferencialIndex' | 'activeProcessIndex',
    nonceKey: 'whyCopyNonce' | 'processCopyNonce'
  ) {
    if (!el || steps < 1) {
      return;
    }

    const spacer = el.querySelector('.pin-spacer') as HTMLElement | null;
    const track = spacer ?? el;
    let range = this.storyRangeByEl.get(track);
    if (range == null) {
      range = track.offsetHeight - window.innerHeight;
      this.storyRangeByEl.set(track, range);
    }
    if (range <= 0) {
      return;
    }

    const t = Math.min(1, Math.max(0, -track.getBoundingClientRect().top / range));
    const raw = t * steps;
    const next = Math.min(steps - 1, Math.floor(raw + 1e-4));
    const stepProgress = Math.min(1, Math.max(0, raw - next));
    el.style.setProperty('--story-step-p', stepProgress.toFixed(4));

    if (next === this[indexKey]) {
      return;
    }

    this.ngZone.run(() => {
      this[indexKey] = next;
      this[nonceKey] += 1;
    });
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
    if (!this.ctaMagnetRect) {
      this.ctaMagnetRect = wrap.getBoundingClientRect();
    }
    const rect = this.ctaMagnetRect;
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
    this.ctaMagnetRect = null;
    this.ctaMagnetX = 0;
    this.ctaMagnetY = 0;
    this.ctaMagnetActive = false;
  }

  ngOnDestroy() {
    this.destroyed = true;
    this.teardownCarouselCursorListeners();
    this.teardownPortfolioScrollListeners();
    this.clearWhyIntroTimeouts();
    this.unbindHomeStoryScroll();

    if (this.gsapCleanup) {
      this.gsapCleanup();
      this.gsapCleanup = null;
    }

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
