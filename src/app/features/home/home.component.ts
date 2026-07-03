import { Component, OnInit, HostListener, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;

  scrollY = 0;
  activeServiceIndex = 0;

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
    const slideShare = 78;
    const gap = 1.25;
    const centerOffset = (100 - slideShare) / 2;
    return `translateX(calc(-${this.activeServiceIndex} * (${slideShare}% + ${gap}rem) + ${centerOffset}%))`;
  }

  ngOnInit() {}

  nextService(event?: Event) {
    event?.preventDefault();
    event?.stopPropagation();
    this.activeServiceIndex = (this.activeServiceIndex + 1) % this.services.length;
  }

  prevService(event?: Event) {
    event?.preventDefault();
    event?.stopPropagation();
    this.activeServiceIndex =
      (this.activeServiceIndex - 1 + this.services.length) % this.services.length;
  }

  goToService(index: number, event?: Event) {
    event?.preventDefault();
    event?.stopPropagation();
    this.activeServiceIndex = index;
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



    this.stopHeroVideo();
  }
}
