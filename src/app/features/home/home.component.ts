import { Component, OnInit, HostListener, AfterViewInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(50px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', animate('600ms ease-out'))
    ]),
    trigger('slideIn', [
      state('left', style({
        opacity: 0,
        transform: 'translateX(-100px)'
      })),
      state('center', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('left => center', animate('800ms ease-out'))
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private cleanupListeners: (() => void)[] = [];
  
  // URL de Spline 3D
  splineUrl = 'https://prod.spline.design/CfjLk5uQojSgktQq/scene.splinecode';

  // Control de animaciones basadas en scroll
  scrollY = 0;
  heroVisible = 'visible';
  whyWebVisible = 'hidden';
  portfolioVisible = 'hidden';
  aboutVisible = 'hidden';
  promoVisible = 'hidden';

  // Razones por las que necesitas una web (para sección scroll narrativa)
  whyWebReasons = [
    {
      title: '¿Tus clientes te buscan en Internet?',
      subtitle: 'El 70% de los compradores buscan online antes de comprar',
      description: 'Si no estás en Internet, no existes para la mayoría de tus potenciales clientes. Una presencia digital sólida es el primer paso para ser encontrado.',
      icon: 'search',
      img: 'assets/reason-1.png',
      stat: '70%',
      statLabel: 'buscan online primero',
      visible: false
    },
    {
      title: 'Genera confianza instantánea',
      subtitle: 'Sin web, tu negocio parece menos serio',
      description: 'Una página web profesional transmite credibilidad, seriedad y compromiso. Es tu carta de presentación digital disponible 24/7.',
      icon: 'verified',
      img: 'assets/reason-2.png',
      stat: '84%',
      statLabel: 'confían más con web profesional',
      visible: false
    },
    {
      title: 'Tu competencia ya está online',
      subtitle: 'No te quedes atrás en la transformación digital',
      description: 'Mientras tus competidores captan clientes online, tú estás perdiendo oportunidades. El futuro es digital y el momento es ahora.',
      icon: 'trending_up',
      img: 'assets/reason-3.png',
      stat: '95%',
      statLabel: 'de negocios tienen presencia web',
      visible: false
    },
    {
      title: 'Triplica tus contactos comerciales',
      subtitle: 'Una landing bien diseñada convierte visitantes en clientes',
      description: 'Con estrategias de conversión optimizadas, tu web trabajará para ti las 24 horas, generando leads y oportunidades de negocio constantemente.',
      icon: 'rocket_launch',
      img: 'assets/reason-4.png',
      stat: '3x',
      statLabel: 'más contactos potenciales',
      visible: false
    }
  ];

  // Portafolio preview - Proyectos reales
  portfolioProjects = [
    {
      title: 'LICEUM',
      category: 'Tienda Virtual',
      imageUrl: '/assets/portfolio/liceum-inicio.png',
      description: 'Plataforma de cursos médicos con inscripción online y experiencia institucional.',
      result: 'Inscripciones digitales y presencia internacional'
    },
    {
      title: 'OMED',
      category: 'Sitio Web Profesional',
      imageUrl: '/assets/portfolio/omed-inicio.png',
      description: 'Sitio médico profesional para sedes, especialidades y comunicación con pacientes.',
      result: 'Mayor confianza y claridad para pacientes'
    },
    {
      title: 'Gestión Financiera OMED',
      category: 'Digitalización de Procesos',
      imageUrl: '/assets/portfolio/gestion-financiera-omed-login.png',
      description: 'Sistema interno para ordenar la operación financiera y administrativa.',
      result: 'Control operativo en tiempo real'
    }
  ];

  // Estadísticas para la sección About
  stats = [
    { value: '50+', label: 'Proyectos Exitosos', icon: 'check_circle' },
    { value: '100%', label: 'Clientes Satisfechos', icon: 'sentiment_very_satisfied' },
    { value: '24/7', label: 'Soporte Disponible', icon: 'support_agent' },
    { value: '2025', label: 'Nueva Agencia Digital', icon: 'auto_awesome' }
  ];

  // Ofertas de lanzamiento
  launchOffers = [
    {
      title: 'Landing Page Premium',
      originalPrice: 'S/600',
      discountPrice: 'S/400',
      discount: '33%',
      features: ['Diseño personalizado', 'Hosting 1 año', 'Dominio gratis', 'Soporte 3 meses']
    },
    {
      title: 'Sitio Web Profesional',
      originalPrice: 'S/1,500',
      discountPrice: 'S/1,000',
      discount: '33%',
      features: ['Hasta 5 páginas', 'Blog incluido', 'SEO optimizado', 'Soporte 6 meses'],
      featured: true
    },
    {
      title: 'E-commerce Completo',
      originalPrice: 'S/3,000',
      discountPrice: 'S/2,000',
      discount: '33%',
      features: ['Productos ilimitados', 'Pasarela de pagos', 'Panel admin', 'Soporte 12 meses']
    }
  ];

  // Control de carrusel de portafolio
  currentSlide = 0;

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
      description: 'Conocemos cómo compran y qué necesitan los usuarios en el Perú. Creamos soluciones que funcionan con patrones locales de consumo.',
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
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80',
      tag: 'Identidad',
      outcome: 'Presencia corporativa confiable',
      description: 'Sitios institucionales a medida, con diseño claro y código optimizado.'
    },
    {
      name: 'Landing Page',
      route: '/servicios/landing-page',
      icon: 'rocket_launch',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80',
      tag: 'Conversión',
      outcome: 'Campañas con más conversión',
      description: 'Páginas de alto rendimiento pensadas para captar leads y vender.'
    },
    {
      name: 'Tienda Virtual',
      route: '/servicios/tienda-virtual',
      icon: 'shopping_bag',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80',
      tag: 'E‑commerce',
      outcome: 'Catálogo listo para vender',
      description: 'E‑commerce con catálogo, carrito y pasarela de pagos integrados.'
    },
    {
      name: 'Google Ads',
      route: '/servicios/google-ads',
      icon: 'ads_click',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
      tag: 'Performance',
      outcome: 'Tráfico medible y segmentado',
      description: 'Campañas en Google para atraer clientes potenciales con presupuesto claro.'
    },
    {
      name: 'Marketing Digital',
      route: '/servicios/marketing-digital',
      icon: 'campaign',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=900&q=80',
      tag: 'Estrategia',
      outcome: 'Comunicación constante de marca',
      description: 'Estrategia, contenido y redes para hacer crecer tu presencia online.'
    },
    {
      name: 'Rediseño Web',
      route: '/servicios/rediseno-paginas-web',
      icon: 'autorenew',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80',
      tag: 'Renovación',
      outcome: 'Imagen renovada y profesional',
      description: 'Modernizamos tu sitio actual con mejor UX, performance y conversión.'
    },
    {
      name: 'Apps Móviles',
      route: '/servicios/aplicaciones-moviles',
      icon: 'phone_iphone',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
      tag: 'Producto',
      outcome: 'Experiencias móviles fluidas',
      description: 'Apps nativas e híbridas para iOS y Android con diseño intuitivo.'
    },
    {
      name: 'Consultoría SEO',
      route: '/servicios/consultoria-seo',
      icon: 'travel_explore',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      tag: 'Visibilidad',
      outcome: 'Mejor visibilidad orgánica',
      description: 'Optimización técnica y de contenidos para escalar en buscadores.'
    },
    {
      name: 'Digitalización de Procesos',
      route: '/servicios/digitalizacion-procesos',
      icon: 'auto_awesome',
      image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80',
      tag: 'Automatización',
      outcome: 'Operación ordenada y automatizada',
      description: 'Automatizamos procesos internos para ganar tiempo y reducir errores.'
    }
  ];

  ngOnInit() {
    // Ya no necesitamos interval para el carrusel, ahora es CSS puro
    
  }

  ngAfterViewInit() {
    // Trigger inicial de animaciones con un delay más corto
    setTimeout(() => {
      this.checkScroll();
    }, 50);

  }

  // Debounce para el scroll
  private scrollTimeout: any;
  
  // Throttle para limitar la frecuencia de actualización
  private lastScrollTime = 0;
  private readonly scrollThrottle = 100; // ms





  @HostListener('window:scroll', [])
  onScroll() {
    // Throttle: solo ejecutar checkScroll cada X ms
    const now = Date.now();
    if (now - this.lastScrollTime < this.scrollThrottle) {
      return;
    }
    this.lastScrollTime = now;
    
    this.scrollY = window.scrollY;
    
    // Debounce del scroll para mejorar performance
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    this.scrollTimeout = setTimeout(() => {
      this.checkScroll();
    }, 50); // Solo ejecutar checkScroll cada 50ms
  }

  // Cache de elementos para no buscar en el DOM repetidamente
  private elementCache: { [key: string]: Element | null } = {};
  
  checkScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    // Animar elementos basados en scroll
    if (this.whyWebVisible === 'hidden') {
      this.animateOnScroll('why-web-section', () => {
        this.whyWebVisible = 'visible';
        this.animateWhyWebReasons();
      });
    }

    if (this.portfolioVisible === 'hidden') {
      this.animateOnScroll('portfolio-section', () => {
        this.portfolioVisible = 'visible';
      });
    }

    if (this.aboutVisible === 'hidden') {
      this.animateOnScroll('about-section', () => {
        this.aboutVisible = 'visible';
      });
    }

    if (this.promoVisible === 'hidden') {
      this.animateOnScroll('promo-section', () => {
        this.promoVisible = 'visible';
      });
    }

    // Animar diferenciales
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
    // Usar caché para evitar búsquedas repetidas en el DOM
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

  animateWhyWebReasons() {
    this.whyWebReasons.forEach((reason, index) => {
      setTimeout(() => {
        reason.visible = true;
      }, index * 300);
    });
  }

  // Scroll suave a la sección de promociones
  scrollToPromo() {
    const element = document.getElementById('promo-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnDestroy() {
    // Limpiar timeout del scroll
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    // Limpiar Spline 3D y recursos WebGL antes de salir

  }





}
