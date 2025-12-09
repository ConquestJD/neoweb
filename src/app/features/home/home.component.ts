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

  // Portafolio preview (carrusel) - Proyectos reales
  portfolioProjects = [
    {
      title: 'Liceum',
      category: 'Sitio Web Profesional',
      imageUrl: '/assets/liceum-1.png',
      description: 'Sitio web institucional para centro de investigación y entrenamiento en cirugía endoscópica, laparoscópica y robótica',
      result: 'Presencia digital profesional'
    },
    {
      title: 'Oncomed',
      category: 'Sitio Web Profesional + 15 vistas',
      imageUrl: '/assets/omed-1.png',
      description: 'Sitio web oficial de la Clínica Oncomed, centro médico especializado en tratamientos oncológicos',
      result: 'Presencia digital profesional'
    },
    {
      title: 'Sistema de Gestión Financiera OMED',
      category: 'Full Digital Personalizado',
      imageUrl: '/assets/gomed-1.png',
      description: 'Sistema web completo para la administración financiera, médica y operativa de la Clínica OMED',
      result: 'Automatización total de procesos'
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
      image: '/assets/reason-1.png',
      position: 'left',
      visible: false
    },
    {
      title: 'Diseños que convierten en ventas',
      description: 'Cada sección, color y estructura está pensada estratégicamente para generar clientes, aumentar leads y mejorar tu presencia digital.',
      image: '/assets/reason-2.png',
      position: 'right',
      visible: false
    },
    {
      title: 'Adaptados al mercado peruano',
      description: 'Conocemos cómo compran y qué necesitan los usuarios en el Perú. Creamos soluciones que funcionan con patrones locales de consumo.',
      image: '/assets/reason-3.png',
      position: 'left',
      visible: false
    },
    {
      title: 'Acompañamiento y soporte directo',
      description: 'Te guiamos en todo el proceso: mejoras, recomendaciones, actualizaciones y soporte técnico rápido cuando lo necesites.',
      image: '/assets/reason-4.png',
      position: 'right',
      visible: false
    }
  ];

  // Servicios disponibles
  services = [
    { 
      name: 'Página Web', 
      route: '/servicios/pagina-web', 
      icon: 'language',
      description: 'Sitios web profesionales diseñados para tu negocio con diseño moderno y optimizado.'
    },
    { 
      name: 'Landing Page', 
      route: '/servicios/landing-page', 
      icon: 'rocket_launch',
      description: 'Páginas de alto rendimiento diseñadas para convertir visitantes en clientes.'
    },
    { 
      name: 'Tienda Virtual', 
      route: '/servicios/tienda-virtual', 
      icon: 'shopping_cart',
      description: 'E-commerce completo con catálogo optimizado y pasarelas de pago seguras.'
    },
    { 
      name: 'Google Ads', 
      route: '/servicios/google-ads', 
      icon: 'ads_click',
      description: 'Campañas publicitarias en Google para atraer clientes potenciales.'
    },
    { 
      name: 'Marketing Digital', 
      route: '/servicios/marketing-digital', 
      icon: 'campaign',
      description: 'Estrategias digitales integrales para hacer crecer tu presencia online.'
    },
    { 
      name: 'Rediseño de Páginas Web', 
      route: '/servicios/rediseno-paginas-web', 
      icon: 'refresh',
      description: 'Moderniza y optimiza tu sitio web existente con las últimas tendencias.'
    },
    { 
      name: 'Aplicaciones Móviles', 
      route: '/servicios/aplicaciones-moviles', 
      icon: 'phone_android',
      description: 'Apps nativas e híbridas para iOS y Android con diseño intuitivo.'
    },
    { 
      name: 'Consultoría SEO', 
      route: '/servicios/consultoria-seo', 
      icon: 'search',
      description: 'Optimización para motores de búsqueda y posicionamiento orgánico.'
    },
    { 
      name: 'Digitalización de Procesos', 
      route: '/servicios/digitalizacion-procesos', 
      icon: 'auto_awesome',
      description: 'Automatiza y digitaliza los procesos de tu empresa con soluciones personalizadas.'
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
