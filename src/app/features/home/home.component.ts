import { Component, OnInit, HostListener, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) {}

  scrollY = 0;
  activeServiceIndex = 0;
  trackIndex = 1;
  trackTransitionEnabled = true;
  servicesVisible = false;
  carouselTransitioning = false;
  carouselCursorLabel = '';
  carouselCursorShown = false;
  carouselCursorX = 0;
  carouselCursorY = 0;
  carouselSlides: CarouselSlide[] = [];

  // Portafolio preview - Proyectos reales
  portfolioProjects = [
    {
      title: 'LICEUM',
      category: 'Tienda Virtual',
      imageUrl: '/assets/portfolio/liceum-inicio.png',
      description: 'Plataforma de cursos médicos con inscripción online y experiencia institucional.',
      result: 'Inscripciones online con pago integrado y alcance en El Salvador y Bolivia'
    },
    {
      title: 'OMED',
      category: 'Sitio Web Profesional',
      imageUrl: '/assets/portfolio/omed-inicio.png',
      description: 'Sitio médico profesional para sedes, especialidades y comunicación con pacientes.',
      result: 'Web para 2 sedes (Cusco y Tacna) con mejor posicionamiento local'
    },
    {
      title: 'Gestión Financiera OMED',
      category: 'Digitalización de Procesos',
      imageUrl: '/assets/portfolio/gestion-financiera-omed-login.png',
      description: 'Sistema interno para ordenar la operación financiera y administrativa.',
      result: 'Sistema con 8+ módulos y control financiero en tiempo real'
    }
  ];

  // Diferenciales para scroll experience
  diferenciales = [
    {
      title: 'Desarrollo 100% con código real',
      description: 'Construimos tu página desde cero con código personalizado, sin plantillas, sin Wix, sin WordPress. Esto garantiza rendimiento, seguridad y un diseño único para tu negocio.',
      icon: 'code',
      points: ['Arquitectura limpia', 'Mejor rendimiento'],
      image: '/assets/home/codigo.png',
      position: 'left',
      visible: false
    },
    {
      title: 'Diseños que convierten en ventas',
      description: 'Cada sección, color y estructura está pensada estratégicamente para generar clientes, aumentar leads y mejorar tu presencia digital.',
      icon: 'trending_up',
      points: ['Jerarquía comercial', 'CTAs claros'],
      image: '/assets/home/disenos.png',
      position: 'right',
      visible: false
    },
    {
      title: 'Adaptados al mercado peruano',
      description: 'Conozco cómo compran y qué necesitan los usuarios en el Perú. Creo soluciones que funcionan con patrones locales de consumo.',
      icon: 'location_on',
      points: ['Copy local', 'Confianza inmediata'],
      image: '/assets/home/peru.png',
      position: 'left',
      visible: false
    },
    {
      title: 'Acompañamiento y soporte directo',
      description: 'Te guiamos en todo el proceso: mejoras, recomendaciones, actualizaciones y soporte técnico rápido cuando lo necesites.',
      icon: 'support_agent',
      points: ['Comunicación directa', 'Mejoras continuas'],
      image: '/assets/home/soporte.png',
      position: 'right',
      visible: false
    }
  ];

  // Servicios con fotos reales (Unsplash, curadas para combinar con la marca)
  services = [
    {
      name: 'Página Web',
      route: '/servicios/pagina-web',
      icon: 'language',
      image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1400&auto=format&fit=crop&q=75&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhZ2luYSUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D',
      tag: 'Identidad',
      outcome: 'Presencia corporativa confiable',
      description: 'Sitios institucionales a medida, con diseño claro y código optimizado.',
      audience: 'Para empresas que necesitan presencia profesional online'
    },
    {
      name: 'Tienda Virtual',
      route: '/servicios/tienda-virtual',
      icon: 'shopping_bag',
      image: 'https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=1400&auto=format&fit=crop&q=75&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww',
      tag: 'E‑commerce',
      outcome: 'Catálogo listo para vender',
      description: 'E‑commerce con catálogo, carrito y pasarela de pagos integrados.',
      audience: 'Para negocios que quieren vender productos en internet'
    },
    {
      name: 'Google Ads',
      route: '/servicios/google-ads',
      icon: 'ads_click',
      image: 'https://plus.unsplash.com/premium_photo-1685208166965-d04149118ca5?w=1400&auto=format&fit=crop&q=75&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwYWRzfGVufDB8fDB8fHww',
      tag: 'Performance',
      outcome: 'Tráfico medible y segmentado',
      description: 'Campañas en Google para atraer clientes potenciales con presupuesto claro.',
      audience: 'Para quienes buscan clientes con publicidad medible'
    },
    {
      name: 'Marketing Digital',
      route: '/servicios/marketing-digital',
      icon: 'campaign',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1400&auto=format&fit=crop&q=75&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8fDA%3D',
      tag: 'Estrategia',
      outcome: 'Comunicación constante de marca',
      description: 'Estrategia, contenido y redes para hacer crecer tu presencia online.',
      audience: 'Para marcas que quieren crecer en redes y contenido'
    },
    {
      name: 'Rediseño Web',
      route: '/servicios/rediseno-paginas-web',
      icon: 'autorenew',
      image: 'https://images.unsplash.com/photo-1657812159077-90649115008c?w=1400&auto=format&fit=crop&q=75&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVkaXNlJUMzJUIxbyUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D',
      tag: 'Renovación',
      outcome: 'Imagen renovada y profesional',
      description: 'Modernizamos tu sitio actual con mejor UX, performance y conversión.',
      audience: 'Para sitios actuales que no generan resultados'
    },
    {
      name: 'Apps Móviles',
      route: '/servicios/aplicaciones-moviles',
      icon: 'phone_iphone',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=1400&auto=format&fit=crop&q=75&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwcHMlMjBtb3ZpbGVzJTIwZGVzYXJyb2xsb3xlbnwwfHwwfHx8MA%3D%3D',
      tag: 'Producto',
      outcome: 'Experiencias móviles fluidas',
      description: 'Apps nativas e híbridas para iOS y Android con diseño intuitivo.',
      audience: 'Para negocios que necesitan llegar al móvil'
    },
    {
      name: 'Consultoría SEO',
      route: '/servicios/consultoria-seo',
      icon: 'travel_explore',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1400&auto=format&fit=crop&q=75&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'Visibilidad',
      outcome: 'Mejor visibilidad orgánica',
      description: 'Optimización técnica y de contenidos para escalar en buscadores.',
      audience: 'Para quienes quieren más tráfico orgánico'
    },
    {
      name: 'Digitalización de Procesos',
      route: '/servicios/digitalizacion-procesos',
      icon: 'auto_awesome',
      image: 'https://plus.unsplash.com/premium_photo-1661443822504-0e382dbc1e48?w=1400&auto=format&fit=crop&q=75&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRpZ2l0YWxpemFjaW9uJTIwZGUlMjBwcm9jZXNvc3xlbnwwfHwwfHx8MA%3D%3D',
      tag: 'Automatización',
      outcome: 'Operación ordenada y automatizada',
      description: 'Automatizamos procesos internos para ganar tiempo y reducir errores.',
      audience: 'Para equipos que quieren ordenar su operación'
    }
  ];

  get carouselTransform(): string {
    const slideShare = 62;
    const gap = 1.25;
    const centerOffset = (100 - slideShare) / 2;
    return `translateX(calc(-${this.trackIndex} * (${slideShare}% + ${gap}rem) + ${centerOffset}%))`;
  }

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

  onSlideHoverMove(event: MouseEvent) {
    if (this.carouselCursorLabel) {
      this.updateCarouselCursorPosition(event);
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
    this.carouselCursorX = event.clientX + this.carouselCursorOffsetX;
    this.carouselCursorY = event.clientY + this.carouselCursorOffsetY;
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
  private destroyed = false;
  private lastScrollTime = 0;
  private readonly scrollThrottle = 100;

  ngAfterViewInit() {
    this.initHeroVideo();

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

    this.diferenciales.forEach((diferencial, index) => {
      if (!diferencial.visible) {
        const elementId = `diferencial-${index}`;
        this.animateOnScroll(elementId, () => {
          diferencial.visible = true;
        });
      }
    });

    if (!this.servicesVisible) {
      this.animateOnScroll('services-section', () => {
        this.servicesVisible = true;
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

  ngOnDestroy() {
    this.destroyed = true;

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
