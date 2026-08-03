import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, Inject, PLATFORM_ID, NgZone, HostBinding } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { initPortafolioGsapAnimations } from './portafolio-gsap-animations';

type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  scrollUrl?: string;
  description: string;
  technologies: string[];
  results: {
    title: string;
    metrics: { label: string; value: string; icon: string }[];
    businessImpact: string[];
    problem: string;
    solution: string;
    websiteUrl: string;
    type: string;
  };
};

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding('class.gsap-enabled') gsapEnabled = false;
  @ViewChild('portfolioGrid') portfolioGrid?: ElementRef<HTMLElement>;

  private readonly pageTitle =
    'Portafolio de Proyectos Web en Perú | Casos Reales | NeoWeb';
  private readonly metaDescription =
    'Portafolio NeoWeb: proyectos web, tiendas online y software a medida en Perú. Casos reales con diseño, desarrollo y resultados medibles. Cotiza tu proyecto.';

  sectionVisible = {
    grid: false,
    stats: false
  };

  gridIntroDone = false;
  ctaVisible = false;
  ctaMagnetX = 0;
  ctaMagnetY = 0;
  ctaMagnetActive = false;

  marqueeCopies = [
    'PROYECTOS · CASOS REALES · PERÚ · NEO WEB · ',
    'PROYECTOS · CASOS REALES · PERÚ · NEO WEB · ',
    'PROYECTOS · CASOS REALES · PERÚ · NEO WEB · ',
    'PROYECTOS · CASOS REALES · PERÚ · NEO WEB · '
  ];

  projects: PortfolioProject[] = [
    {
      id: 'liceum',
      title: 'LICEUM',
      category: 'Centro de Investigación Médica',
      imageUrl: 'assets/portfolio/liceum-inicio.png',
      scrollUrl: '/assets/portfolio/scrolls/liceum-scroll.jpg',
      description: 'Plataforma institucional y comercial para cursos médicos, inscripciones y comunicación académica.',
      technologies: ['Angular 19', 'TypeScript', 'Angular Material', 'FastAPI', 'Python', 'MySQL', 'Izipay API'],
      results: {
        title: 'Transformación Digital en Medicina',
        metrics: [
          { label: 'Aumento en Consultas', value: '+100%', icon: 'trending_up' },
          { label: 'Alcance Internacional', value: 'Multi-país', icon: 'public' },
          { label: 'Inscripciones Online', value: '100%', icon: 'online_prediction' },
          { label: 'Dominio Profesional', value: 'liceum.pe', icon: 'domain' }
        ],
        businessImpact: [
          'Digitalización completa del proceso de inscripción',
          'Mayor alcance internacional (El Salvador, Bolivia)',
          'Fortalecimiento institucional como centro de referencia',
          'Optimización del flujo administrativo con automatización'
        ],
        problem: 'LICEUM necesitaba presencia digital profesional para promocionar sus cursos de cirugía mínimamente invasiva y facilitar las inscripciones online.',
        solution: 'Desarrollé una plataforma web completa con sistema de pagos integrado, permitiendo inscripciones online y mayor alcance internacional.',
        websiteUrl: 'https://www.liceum.pe',
        type: 'Tienda Online'
      }
    },
    {
      id: 'omed',
      title: 'OMED',
      category: 'Clínica Especializada',
      imageUrl: 'assets/portfolio/omed-inicio.png',
      scrollUrl: '/assets/portfolio/scrolls/omed-scroll.jpg',
      description: 'Sitio web médico para presentar sedes, especialidades y rutas claras de contacto para pacientes.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Angular Material', 'SEO On-Page'],
      results: {
        title: 'Presencia Digital Profesional',
        metrics: [
          { label: 'Visibilidad Google', value: 'Mejorada', icon: 'search' },
          { label: 'Posicionamiento Local', value: 'Cusco/Tacna', icon: 'location_on' },
          { label: 'Vistas del Sitio', value: '15+', icon: 'visibility' },
          { label: 'Web Médica', value: 'OMED', icon: 'domain' }
        ],
        businessImpact: [
          'Mayor visibilidad en Google y mejor posicionamiento local',
          'Refuerzo de imagen institucional con diseño moderno y confiable',
          'Mayor captación de pacientes con canales de contacto accesibles',
          'Transparencia y confianza al mostrar perfiles del staff médico'
        ],
        problem: 'Oncomed necesitaba modernizar su presencia digital y mejorar la comunicación con pacientes mediante una interfaz profesional.',
        solution: 'Desarrollé un sitio web moderno, optimizado para buscadores y responsive, consolidando la presencia digital profesional.',
        websiteUrl: '#',
        type: 'Sitio Web Profesional'
      }
    },
    {
      id: 'omed-financial',
      title: 'Gestión Financiera OMED',
      category: 'Software a Medida',
      imageUrl: 'assets/portfolio/gestion-financiera-omed-login.png',
      description: 'Sistema web interno para la administración financiera, médica y operativa de la Clínica OMED.',
      technologies: ['Angular 19', 'TypeScript', 'RxJS', 'Chart.js', 'Angular Material', 'REST API', 'JWT Auth', 'MySQL', 'jsPDF', 'xlsx'],
      results: {
        title: 'Automatización Total de Procesos',
        metrics: [
          { label: 'Procesos Automatizados', value: '100%', icon: 'auto_awesome' },
          { label: 'Sedes Conectadas', value: 'Cusco/Tacna', icon: 'business' },
          { label: 'Módulos Integrados', value: '8+', icon: 'view_module' },
          { label: 'Control Financiero', value: 'Tiempo Real', icon: 'account_balance' }
        ],
        businessImpact: [
          'Automatización total de procesos internos eliminando registros manuales',
          'Control de caja chica y flujo de efectivo en tiempo real',
          'Gestión de pacientes unificada con seguimiento completo',
          'Dashboard con gráficos avanzados y reportes inteligentes'
        ],
        problem: 'La Clínica OMED necesitaba centralizar la administración financiera, médica y operativa de sus sedes eliminando procesos manuales.',
        solution: 'Desarrollé un sistema integral con módulos de gestión, dashboard interactivo y reportes automáticos para control total.',
        websiteUrl: '#',
        type: 'Software a Medida'
      }
    },
    {
      id: 'sml-web',
      title: 'Santa María Laura',
      category: 'Colegio Privado · Lima',
      imageUrl: 'assets/portfolio/sml-inicio.png',
      scrollUrl: '/assets/portfolio/scrolls/sml-scroll.jpg',
      description: 'Sitio institucional para comunicar propuesta educativa, niveles, infraestructura y proceso de admisión.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'SEO On-Page'],
      results: {
        title: 'Imagen Educativa Profesional',
        metrics: [
          { label: 'Niveles educativos', value: 'Inicial · Primaria · Secundaria', icon: 'school' },
          { label: 'Admisión 2026', value: 'Activa', icon: 'how_to_reg' },
          { label: 'Contenido editorial', value: 'Blog institucional', icon: 'article' },
          { label: 'Experiencia', value: 'Responsive', icon: 'devices' }
        ],
        businessImpact: [
          'Presentación clara de la propuesta educativa "sólida, humana y de excelencia"',
          'Información ordenada de niveles, infraestructura y servicios',
          'Canal directo para padres interesados en la admisión 2026',
          'Refuerzo de la imagen institucional como colegio de referencia'
        ],
        problem: 'Santa María Laura necesitaba una presencia digital profesional para mostrar su propuesta educativa y captar familias interesadas en el proceso de admisión.',
        solution: 'Diseñé una web institucional con jerarquía clara, secciones por nivel, blog y un módulo destacado de admisión 2026.',
        websiteUrl: 'https://www.santamarialaura.edu.pe',
        type: 'Sitio Web Institucional'
      }
    },
    {
      id: 'sml-portal',
      title: 'Portal SML',
      category: 'Plataforma Educativa Interna',
      imageUrl: 'assets/portfolio/sml-portal-login.png',
      description: 'Plataforma educativa integral: gestión académica, comunicación profesores-padres y acceso seguro.',
      technologies: ['Angular', 'TypeScript', 'JWT Auth', 'REST API', 'Responsive UI'],
      results: {
        title: 'Plataforma Educativa Integral',
        metrics: [
          { label: 'Gestión académica', value: 'Notas · Asistencia · Cursos', icon: 'menu_book' },
          { label: 'Comunicación', value: 'Profesores ↔ Padres', icon: 'forum' },
          { label: 'Acceso', value: 'Privado por rol', icon: 'lock' },
          { label: 'Datos', value: 'Tiempo real', icon: 'bolt' }
        ],
        businessImpact: [
          'Centraliza notas, asistencia y cursos en un solo lugar',
          'Comunicación directa entre profesores y padres al instante',
          'Información siempre actualizada en tiempo real',
          'Credenciales gestionadas por administración del colegio'
        ],
        problem: 'El colegio necesitaba ordenar la información académica y abrir un canal de comunicación directo con padres y alumnos sin depender de canales informales.',
        solution: 'Implementé un portal privado con autenticación, módulos de gestión académica y comunicación, accesible para toda la comunidad escolar.',
        websiteUrl: '#',
        type: 'Plataforma Educativa'
      }
    },
    {
      id: 'hombre-universal',
      title: 'Hombre Universal',
      category: 'Publicación Editorial · Cultura',
      imageUrl: 'assets/portfolio/hombre-universal-inicio.png',
      scrollUrl: '/assets/portfolio/scrolls/hombreuniversal-scroll.jpg',
      description: 'Publicación digital de ciencia, arte, filosofía y educación para lectores en búsqueda de sentido.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'SEO On-Page'],
      results: {
        title: 'Plataforma Editorial de Pensamiento',
        metrics: [
          { label: 'Ejes', value: 'Ciencia · Arte · Filosofía', icon: 'auto_stories' },
          { label: 'Formatos', value: 'Artículos · Ensayos · Libretos', icon: 'article' },
          { label: 'Acceso', value: 'Lectores registrados', icon: 'login' },
          { label: 'Identidad', value: 'Editorial premium', icon: 'workspace_premium' }
        ],
        businessImpact: [
          'Espacio digital para que el autor publique sus escritos sobre trascendencia',
          'Audiencia segmentada de lectores en búsqueda de sentido y crecimiento',
          'Identidad editorial sobria que transmite profundidad y autoridad',
          'Base preparada para suscripciones, comentarios y comunidad'
        ],
        problem: 'El proyecto Hombre Universal necesitaba una plataforma digital seria, sobria y editorial para publicar escritos del autor sobre ciencia, arte, filosofía y espiritualidad, dirigida a personas en búsqueda de trascendencia.',
        solution: 'Construí una publicación digital con tipografía editorial, secciones por formato (artículos, ensayos, libretos), acceso de lectores y una estética sobria coherente con el tono del contenido.',
        websiteUrl: 'https://hombreuniversal.com',
        type: 'Plataforma Editorial'
      }
    }
  ];

  stats = [
    { number: '6', label: 'Proyectos entregados', icon: 'rocket_launch' },
    { number: '4', label: 'Clientes reales', icon: 'groups' },
    { number: 'Multi-país', label: 'Alcance (Perú · El Salvador · Bolivia)', icon: 'public' },
    { number: 'Full-stack', label: 'Front + Back end', icon: 'code' }
  ];

  private sectionObserver?: IntersectionObserver;
  private gridIntroTimeout: ReturnType<typeof setTimeout> | null = null;
  private gsapCleanup: (() => void) | null = null;
  private portfolioActiveCard: HTMLElement | null = null;
  private portfolioStepTimer: ReturnType<typeof setInterval> | null = null;
  private portfolioStepTimeout: ReturnType<typeof setTimeout> | null = null;
  private readonly portfolioCycles = new WeakMap<HTMLElement, { step: number; maxSteps: number; stepPx: number }>();
  private readonly portfolioCardEnterHandlers = new WeakMap<HTMLElement, () => void>();
  private readonly portfolioCardLeaveHandlers = new WeakMap<HTMLElement, () => void>();
  private readonly portfolioSectionStepPx = 1080;
  private readonly portfolioStepIntervalMs = 3200;
  private readonly portfolioStepDurationMs = 1100;
  private readonly portfolioStepEasing = 'cubic-bezier(0.22, 1, 0.36, 1)';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone,
    private host: ElementRef<HTMLElement>,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this.meta.updateTag({ name: 'description', content: this.metaDescription });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.metaDescription });
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.setupPortfolioScrollImages();

    if (this.prefersReducedMotion()) {
      this.revealAllInstant();
      return;
    }

    this.gsapEnabled = true;
    this.ngZone.runOutsideAngular(() => {
      this.gsapCleanup = initPortafolioGsapAnimations(this.host.nativeElement, {
        onGridComplete: () => this.ngZone.run(() => {
          this.sectionVisible.grid = true;
          this.gridIntroDone = true;
        }),
        onStatsComplete: () => this.ngZone.run(() => {
          this.sectionVisible.stats = true;
        }),
        onCtaComplete: () => this.ngZone.run(() => {
          this.ctaVisible = true;
        })
      });
    });
  }

  ngOnDestroy() {
    this.sectionObserver?.disconnect();
    this.teardownPortfolioScrollListeners();

    if (this.gsapCleanup) {
      this.gsapCleanup();
      this.gsapCleanup = null;
    }

    if (this.gridIntroTimeout) {
      clearTimeout(this.gridIntroTimeout);
    }
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private revealAllInstant() {
    this.sectionVisible.grid = true;
    this.sectionVisible.stats = true;
    this.gridIntroDone = true;
    this.ctaVisible = true;
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
      if (this.portfolioActiveCard !== card) {
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
        if (this.portfolioActiveCard !== card) {
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
        if (this.portfolioActiveCard !== card) {
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
    for (const project of this.projects) {
      if (!project.scrollUrl) {
        continue;
      }

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

    const portfolioScrollEnabled = window.matchMedia('(hover: hover) and (pointer: fine)').matches
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.preloadPortfolioScrollImages();

    if (!portfolioScrollEnabled) {
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
}
