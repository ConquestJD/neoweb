import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3?: string;
  description: string;
  technologies: string[];
  technologyImages?: string[];
  features: string[];
  serviceType: 'landing-page' | 'pagina-web' | 'tienda-virtual' | 'full-digital' | 'digitalizacion-procesos';
  results: {
    title: string;
    metrics: Array<{ label: string; value: string; icon: string }>;
    businessImpact: string[];
    problem: string;
    solution: string;
    websiteUrl: string;
    type: string;
  };
}

@Component({
  selector: 'app-portafolio-seleccionado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portafolio-seleccionado.component.html',
  styleUrl: './portafolio-seleccionado.component.css'
})
export class PortafolioSeleccionadoComponent implements OnInit {
  project: Project | null = null;
  relatedProjects: Project[] = [];
  servicePlans: any[] = [];
  
  allProjects: Project[] = [
    {
      id: 'liceum',
      title: 'LICEUM',
      category: 'Centro de Investigación Médica',
      imageUrl: 'assets/portfolio/liceum-portfolio.png',
      imageUrl2: 'assets/liceum-2.png',
      imageUrl3: 'assets/liceum-1.png',
      description: 'Sitio web institucional para centro de investigación y entrenamiento en cirugía endoscópica, laparoscópica y robótica',
      technologies: ['Angular 19', 'TypeScript', 'Angular Material', 'FastAPI', 'Python', 'MySQL', 'Izipay API'],
      technologyImages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
      ],
      features: [
        'Sistema de inscripciones online',
        'Pasarela de pagos integrada',
        'Panel administrativo completo',
        'Gestión de cursos y eventos',
        'Multi-idioma (Español/Inglés)',
        'Optimización SEO avanzada',
        'Diseño responsive completo',
        'Integración con redes sociales'
      ],
      serviceType: 'tienda-virtual',
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
        solution: 'NeoWeb desarrolló una plataforma web completa con sistema de pagos integrado, permitiendo inscripciones online y mayor alcance internacional.',
        websiteUrl: 'https://www.liceum.pe',
        type: 'Tienda Virtual'
      }
    },
    {
      id: 'oncomed',
      title: 'Oncomed',
      category: 'Clínica Oncológica',
      imageUrl: 'assets/portfolio/oncomed-portfolio.png',
      imageUrl2: 'assets/omed-2.png',
      imageUrl3: 'assets/omed-1.png',
      description: 'Sitio web oficial de la Clínica Oncomed, centro médico especializado en tratamientos oncológicos',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Angular Material', 'SEO On-Page'],
      technologyImages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
      ],
      features: [
        '15+ páginas personalizadas',
        'Diseño moderno y profesional',
        'Optimización SEO completa',
        'Formularios de contacto avanzados',
        'Galería de imágenes',
        'Perfiles del equipo médico',
        'Información de servicios detallada',
        'Diseño responsive'
      ],
      serviceType: 'pagina-web',
      results: {
        title: 'Presencia Digital Profesional',
        metrics: [
          { label: 'Visibilidad Google', value: 'Mejorada', icon: 'search' },
          { label: 'Posicionamiento Local', value: 'Cusco/Tacna', icon: 'location_on' },
          { label: 'Vistas del Sitio', value: '15+', icon: 'visibility' },
          { label: 'Dominio', value: 'oncomed.pe', icon: 'domain' }
        ],
        businessImpact: [
          'Mayor visibilidad en Google y mejor posicionamiento local',
          'Refuerzo de imagen institucional con diseño moderno y confiable',
          'Mayor captación de pacientes con canales de contacto accesibles',
          'Transparencia y confianza al mostrar perfiles del staff médico'
        ],
        problem: 'Oncomed necesitaba modernizar su presencia digital y mejorar la comunicación con pacientes mediante una interfaz profesional.',
        solution: 'NeoWeb desarrolló un sitio web moderno, optimizado para buscadores y responsive, consolidando la presencia digital profesional.',
        websiteUrl: 'https://oncomed.pe',
        type: 'Sitio Web Profesional'
      }
    },
    {
      id: 'omed-financial',
      title: 'Sistema de Gestión Financiera OMED',
      category: 'Digitalización de Procesos',
      imageUrl: 'assets/portfolio/gestion-omed-portfolio.png',
      imageUrl2: 'assets/gomed-2.png',
      imageUrl3: 'assets/gomed-1.png',
      description: 'Sistema web completo para la administración financiera, médica y operativa de la Clínica OMED',
      technologies: ['Angular 19', 'TypeScript', 'RxJS', 'Chart.js', 'Angular Material', 'REST API', 'JWT Auth', 'MySQL', 'jsPDF', 'xlsx'],
      technologyImages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
      ],
      features: [
        'Dashboard interactivo con gráficos',
        'Gestión financiera completa',
        'Control de caja chica',
        'Gestión de pacientes',
        'Reportes automáticos',
        'Múltiples sedes conectadas',
        'Sistema de autenticación seguro',
        'Exportación de reportes (PDF/Excel)'
      ],
      serviceType: 'digitalizacion-procesos',
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
        solution: 'NeoWeb desarrolló un sistema integral con módulos de gestión, dashboard interactivo y reportes automáticos para control total.',
        websiteUrl: '#',
        type: 'Digitalización de Procesos'
      }
    }
  ];

  // Planes por tipo de servicio
  plansByService: any = {
    'landing-page': [
      {
        name: 'START',
        price: 'S/ 500',
        icon: 'star',
        features: [
          '3-4 bloques: Hero, Beneficios, Servicios/Características, CTA',
          'Diseño moderno',
          'WhatsApp integrado',
          'SEO básico',
          'Hosting + dominio 1 año'
        ]
      },
      {
        name: 'PRO',
        price: 'S/ 800',
        icon: 'rocket_launch',
        featured: true,
        features: [
          '6-7 bloques: Hero, Beneficios, Cómo Funciona, Planes/Servicios, Testimonios, FAQ, CTA final',
          'Copywriting optimizado',
          'Formulario avanzado',
          'Integración con CRM / Email marketing',
          'Animaciones suaves',
          'Google Analytics'
        ]
      },
      {
        name: 'PREMIUM',
        price: 'S/ 1,200',
        icon: 'diamond',
        features: [
          '8-10 bloques: Hero premium, Valor diferencial, Solución, Beneficios, Video/Demo, Planes, Testimonios, Casos de éxito, FAQ, CTA final',
          'Diseño totalmente personalizado',
          'Animaciones avanzadas',
          'SEO completo',
          'Optimizada para campañas masivas',
          'Automatizaciones (email + etiquetas)'
        ]
      }
    ],
    'pagina-web': [
      {
        name: 'START',
        price: 'S/ 1,200',
        icon: 'star',
        features: [
          '6 secciones: Inicio, Nosotros, Servicios, Beneficios, FAQ, Contacto',
          'Diseño moderno',
          'Responsive completo',
          'Formulario + WhatsApp',
          'SEO básico (título, descripción, etiquetas)',
          'Certificado SSL',
          'Hosting + dominio 1 año',
          'Entrega: 1 semana'
        ]
      },
      {
        name: 'PRO',
        price: 'S/ 1,800',
        icon: 'rocket_launch',
        featured: true,
        features: [
          '8-10 secciones: Inicio, Nosotros, Equipo, Servicios, Detalle de Servicios, Proyectos, Testimonios, Blog (activado), FAQ, Contacto',
          'Diseño personalizado',
          'Animaciones suaves (fade, slide, hover)',
          'Google Analytics + Tag Manager',
          'SEO on-page básico',
          'Optimización de velocidad ligera',
          'Hosting + dominio 1 año',
          'Entrega: 1-2 semanas'
        ]
      },
      {
        name: 'PREMIUM',
        price: 'S/ 2,500',
        icon: 'diamond',
        features: [
          '12-15 secciones: Hero avanzado, Inicio, Nosotros, Historia, Equipo, Servicios, Detalle de Servicios, Portafolio filtrable, Proyectos, Testimonios, Blog, FAQ, CTA personalizados, Contacto',
          'Diseño UI/UX avanzado',
          'Animaciones profesionales (scroll, parallax, microinteracciones)',
          'Integraciones API básicas (CRM, correos, etc.)',
          'SEO completo',
          'Optimización de velocidad PRO',
          'Hosting + dominio 1 año',
          'Entrega: 2-3 semanas'
        ]
      }
    ],
    'tienda-virtual': [
      {
        name: 'START',
        price: 'S/ 2,500',
        icon: 'star',
        features: [
          'Hasta 50 productos',
          'Secciones: Inicio, Tienda, Categorías simples, Producto, Carrito, Checkout, Contacto',
          'Métodos de pago básicos',
          'Diseño moderno',
          'Inventario básico',
          'SEO simple'
        ]
      },
      {
        name: 'PRO',
        price: 'S/ 3,500',
        icon: 'rocket_launch',
        featured: true,
        features: [
          'Hasta 300 productos',
          'Secciones: Inicio, Tienda avanzada, Categorías profesionales, Producto completo, Cuenta usuario, Políticas, Blog',
          'Variantes y filtros',
          'Cupones y reportes',
          'SEO optimizado',
          'Integración con WhatsApp'
        ]
      },
      {
        name: 'PREMIUM',
        price: 'S/ 5,000 - S/ 8,000',
        icon: 'diamond',
        features: [
          'Productos ilimitados',
          'Panel administrativo personalizado',
          'Diseño UI/UX a medida',
          'Automatizaciones (correos, estados, alertas)',
          'Integraciones API externas',
          'SEO completo',
          'Optimización de rendimiento'
        ]
      }
    ],
    'full-digital': [
      {
        name: 'PERSONALIZADO',
        price: 'Cotización',
        icon: 'auto_awesome',
        features: [
          'Solución digital completa a medida',
          'Análisis de necesidades',
          'Diseño UI/UX personalizado',
          'Desarrollo full-stack',
          'Integraciones avanzadas',
          'Panel administrativo completo',
          'Soporte técnico extendido',
          'Actualizaciones continuas'
        ]
      }
    ],
    'digitalizacion-procesos': [
      {
        name: 'START',
        price: 'S/ 1,500',
        icon: 'star',
        features: [
          '1 proceso digitalizado',
          'Formularios / flujos básicos'
        ]
      },
      {
        name: 'PRO',
        price: 'S/ 4,000',
        icon: 'rocket_launch',
        featured: true,
        features: [
          '3-5 procesos',
          'Panel admin',
          'Roles y permisos',
          'Integraciones'
        ]
      },
      {
        name: 'PREMIUM',
        price: 'S/ 8,000 - S/ 20,000',
        icon: 'diamond',
        features: [
          'Sistema interno completo',
          'Automatizaciones avanzadas',
          'Dashboard BI',
          'Capacitación'
        ]
      }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  formatNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }

  getFeatureIcon(featureText: string): string {
    const text = featureText.toLowerCase();
    
    // Mapeo de palabras clave a iconos
    const iconMap: { [key: string]: string } = {
      // Pagos y transacciones
      'pago': 'payment',
      'pasarela': 'payment',
      'transacción': 'payment',
      'checkout': 'shopping_cart',
      'carrito': 'shopping_cart',
      'compra': 'shopping_cart',
      
      // Inscripciones y registros
      'inscripción': 'how_to_reg',
      'inscripciones': 'how_to_reg',
      'registro': 'app_registration',
      'registros': 'app_registration',
      
      // Panel y administración
      'panel': 'dashboard',
      'administrativo': 'admin_panel_settings',
      'administración': 'admin_panel_settings',
      'gestión': 'manage_accounts',
      'control': 'settings',
      
      // Cursos y eventos
      'curso': 'school',
      'cursos': 'school',
      'evento': 'event',
      'eventos': 'event',
      'capacitación': 'menu_book',
      
      // Idiomas y localización
      'idioma': 'language',
      'multi-idioma': 'language',
      'español': 'language',
      'inglés': 'language',
      'localización': 'public',
      
      // SEO y optimización
      'seo': 'search',
      'optimización': 'trending_up',
      'posicionamiento': 'trending_up',
      'buscador': 'search',
      'google': 'search',
      
      // Diseño y UI
      'diseño': 'palette',
      'responsive': 'devices',
      'interfaz': 'palette',
      'ui': 'palette',
      'ux': 'design_services',
      'moderno': 'auto_awesome',
      
      // Redes sociales
      'redes sociales': 'share',
      'social': 'share',
      'facebook': 'share',
      'instagram': 'share',
      'twitter': 'share',
      
      // Páginas y secciones
      'página': 'description',
      'páginas': 'description',
      'sección': 'view_module',
      'secciones': 'view_module',
      
      // Formularios
      'formulario': 'description',
      'formularios': 'description',
      'contacto': 'mail',
      
      // Galería y medios
      'galería': 'photo_library',
      'imagen': 'image',
      'imágenes': 'image',
      'video': 'videocam',
      'foto': 'photo',
      
      // Equipo y perfiles
      'equipo': 'people',
      'perfil': 'person',
      'perfiles': 'people',
      'médico': 'medical_services',
      'staff': 'people',
      
      // Servicios
      'servicio': 'room_service',
      'servicios': 'room_service',
      'información': 'info',
      
      // Dashboard y gráficos
      'dashboard': 'dashboard',
      'gráfico': 'bar_chart',
      'gráficos': 'bar_chart',
      'reporte': 'assessment',
      'reportes': 'assessment',
      'métrica': 'analytics',
      'métricas': 'analytics',
      
      // Financiero
      'financiero': 'account_balance',
      'financiera': 'account_balance',
      'caja': 'account_balance_wallet',
      'efectivo': 'payments',
      
      // Pacientes
      'paciente': 'personal_injury',
      'pacientes': 'personal_injury',
      'historial': 'history',
      
      // Sede y ubicación
      'sede': 'business',
      'sedes': 'business',
      'ubicación': 'location_on',
      'local': 'location_on',
      
      // Autenticación y seguridad
      'autenticación': 'lock',
      'seguro': 'security',
      'seguridad': 'security',
      'login': 'login',
      
      // Exportación
      'exportación': 'file_download',
      'exportar': 'file_download',
      'pdf': 'picture_as_pdf',
      'excel': 'table_chart',
      
      // Automatización
      'automatización': 'auto_awesome',
      'automático': 'auto_awesome',
      'automatizado': 'auto_awesome',
      
      // Integración
      'integración': 'link',
      'integrado': 'link',
      'api': 'api',
      
      // Sistema
      'sistema': 'settings',
      'módulo': 'view_module',
      'módulos': 'view_module',
      
      // Blog
      'blog': 'article',
      'noticia': 'article',
      'publicación': 'article',
      
      // Testimonios
      'testimonio': 'format_quote',
      'testimonios': 'format_quote',
      'reseña': 'rate_review',
      
      // FAQ
      'faq': 'help',
      'pregunta': 'help',
      'preguntas': 'help',
      
      // WhatsApp
      'whatsapp': 'chat',
      'chat': 'chat',
      'mensaje': 'message',
      
      // Velocidad y rendimiento
      'velocidad': 'speed',
      'rendimiento': 'speed',
      'optimizado': 'flash_on',
      'rápido': 'bolt',
      
      // Hosting y dominio
      'hosting': 'cloud',
      'dominio': 'domain',
      'ssl': 'lock',
      
      // Analytics
      'analytics': 'analytics',
      'google analytics': 'analytics',
      'estadística': 'bar_chart',
    };
    
    // Buscar coincidencias en el texto
    for (const [keyword, icon] of Object.entries(iconMap)) {
      if (text.includes(keyword)) {
        return icon;
      }
    }
    
    // Iconos por defecto si no hay coincidencia
    const defaultIcons = [
      'auto_awesome',
      'star',
      'rocket_launch',
      'bolt',
      'workspace_premium'
    ];
    
    // Usar un hash simple del texto para seleccionar un icono por defecto
    const hash = featureText.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return defaultIcons[hash % defaultIcons.length];
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('id');
      if (projectId) {
        this.project = this.allProjects.find(p => p.id === projectId) || null;
        if (!this.project) {
          this.router.navigate(['/portafolio']);
        } else {
          // Cargar proyectos relacionados (excluyendo el actual)
          this.relatedProjects = this.allProjects
            .filter(p => p.id !== projectId && p.serviceType === this.project!.serviceType)
            .slice(0, 3);
          
          // Si no hay suficientes del mismo tipo, agregar otros
          if (this.relatedProjects.length < 3) {
            const otherProjects = this.allProjects
              .filter(p => p.id !== projectId && !this.relatedProjects.find(rp => rp.id === p.id))
              .slice(0, 3 - this.relatedProjects.length);
            this.relatedProjects = [...this.relatedProjects, ...otherProjects];
          }
          
          // Cargar planes del servicio
          // Caso especial: Sistema de Gestión Financiera OMED usa planes de digitalización de procesos
          const serviceTypeForPlans = this.project.id === 'omed-financial' 
            ? 'digitalizacion-procesos' 
            : this.project.serviceType;
          this.servicePlans = this.plansByService[serviceTypeForPlans] || [];
        }
      } else {
        this.router.navigate(['/portafolio']);
      }
      window.scrollTo(0, 0);
    });
  }
}

