import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, ChangeDetectorRef, NgZone, HostBinding, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { initPortafolioSeleccionadoGsapAnimations } from './portafolio-seleccionado-gsap-animations';

interface Project {
  id: string;
  title: string;
  category: string;
  heroColor: string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3?: string;
  galleryImages?: string[];
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
export class PortafolioSeleccionadoComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding('class.gsap-enabled') gsapEnabled = false;

  project: Project | null = null;
  showPage = true;
  relatedProjects: Project[] = [];
  servicePlans: any[] = [];
  sectionVisible: Record<string, boolean> = {};
  ctaVisible = false;
  ctaMagnetX = 0;
  ctaMagnetY = 0;
  ctaMagnetActive = false;

  private routeSub?: Subscription;
  private sectionObserver?: IntersectionObserver;
  private destroyed = false;
  private isFirstProjectLoad = true;
  private gsapCleanup: (() => void) | null = null;

  allProjects: Project[] = [
    {
      id: 'liceum',
      title: 'LICEUM',
      category: 'Centro de Investigación Médica',
      heroColor: '#0B2748',
      imageUrl: 'assets/portfolio/liceum-inicio.png',
      imageUrl2: 'assets/portfolio/liceum-cursos.png',
      imageUrl3: 'assets/portfolio/liceum-curso-seleccionado.png',
      galleryImages: [
        'assets/portfolio/liceum-inicio.png',
        'assets/portfolio/liceum-cursos.png',
        'assets/portfolio/liceum-curso-seleccionado.png',
        'assets/portfolio/liceum-incripcion.png'
      ],
      description: 'Plataforma institucional y comercial para cursos médicos, inscripciones y comunicación académica.',
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
        solution: 'Desarrollé una plataforma web completa con sistema de pagos integrado, permitiendo inscripciones online y mayor alcance internacional.',
        websiteUrl: 'https://www.liceum.pe',
        type: 'Tienda Online'
      }
    },
    {
      id: 'omed',
      title: 'OMED',
      category: 'Clínica Especializada',
      heroColor: '#0A5C63',
      imageUrl: 'assets/portfolio/omed-inicio.png',
      imageUrl2: 'assets/portfolio/omed-especialidades-medicas.png',
      imageUrl3: 'assets/portfolio/omed-sobre-nosotros.png',
      galleryImages: [
        'assets/portfolio/omed-inicio.png',
        'assets/portfolio/omed-especialidades-medicas.png',
        'assets/portfolio/omed-sede-cusco.png',
        'assets/portfolio/omed-sobre-nosotros.png'
      ],
      description: 'Sitio web médico para presentar sedes, especialidades y rutas claras de contacto para pacientes.',
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
      heroColor: '#0B3D45',
      imageUrl: 'assets/portfolio/gestion-financiera-omed-login.png',
      imageUrl2: 'assets/portfolio/gestion-financiera-omed-login.png',
      imageUrl3: 'assets/portfolio/gestion-financiera-omed-login.png',
      galleryImages: [
        'assets/portfolio/gestion-financiera-omed-login.png'
      ],
      description: 'Sistema web interno para la administración financiera, médica y operativa de la Clínica OMED.',
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
        solution: 'Desarrollé un sistema integral con módulos de gestión, dashboard interactivo y reportes automáticos para control total.',
        websiteUrl: '#',
        type: 'Software a Medida'
      }
    },
    {
      id: 'sml-web',
      title: 'Santa María Laura',
      category: 'Colegio Privado · Lima',
      heroColor: '#7A0E2C',
      imageUrl: 'assets/portfolio/sml-inicio.png',
      imageUrl2: 'assets/portfolio/sml-educacion-formativa.png',
      imageUrl3: 'assets/portfolio/sml-infraestructura.png',
      galleryImages: [
        'assets/portfolio/sml-inicio.png',
        'assets/portfolio/sml-educacion-formativa.png',
        'assets/portfolio/sml-infraestructura.png',
        'assets/portfolio/sml-blog.png'
      ],
      description: 'Sitio institucional para el colegio privado Santa María Laura: comunica su propuesta educativa, niveles, infraestructura y proceso de admisión 2026.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'SEO On-Page'],
      technologyImages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
      ],
      features: [
        'Inicio institucional con propuesta de valor',
        'Sección "Institución" con misión y visión',
        'Niveles: Inicial, Primaria y Secundaria',
        'Servicios y propuesta educativa formativa',
        'Galería de infraestructura del colegio',
        'Blog institucional con noticias',
        'Módulo destacado de Admisión 2026',
        'Diseño responsive completo'
      ],
      serviceType: 'pagina-web',
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
      heroColor: '#6B1230',
      imageUrl: 'assets/portfolio/sml-portal-login.png',
      imageUrl2: 'assets/portfolio/sml-portal-login.png',
      imageUrl3: 'assets/portfolio/sml-portal-login.png',
      galleryImages: [
        'assets/portfolio/sml-portal-login.png'
      ],
      description: 'Plataforma educativa integral del colegio Santa María Laura: gestión académica, comunicación profesores‑padres y acceso privado por rol.',
      technologies: ['Angular', 'TypeScript', 'JWT Auth', 'REST API', 'Responsive UI'],
      technologyImages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
      ],
      features: [
        'Inicio de sesión seguro con credenciales del colegio',
        'Gestión académica: notas, asistencia y cursos',
        'Comunicación directa profesores ↔ padres',
        'Datos siempre actualizados en tiempo real',
        'Roles diferenciados (alumno, profesor, padre, admin)',
        'Recuperación de contraseña asistida',
        'Interfaz responsive para móvil y desktop',
        'Base preparada para nuevos módulos'
      ],
      serviceType: 'full-digital',
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
      heroColor: '#1A1840',
      imageUrl: 'assets/portfolio/hombre-universal-inicio.png',
      imageUrl2: 'assets/portfolio/hombre-universal-articulos.png',
      imageUrl3: 'assets/portfolio/hombre-universal-acerca-de.png',
      galleryImages: [
        'assets/portfolio/hombre-universal-inicio.png',
        'assets/portfolio/hombre-universal-acerca-de.png',
        'assets/portfolio/hombre-universal-articulos.png',
        'assets/portfolio/hombre-universal-paramitas.png'
      ],
      description: 'Publicación digital orientada al descubrimiento del Hombre Trascendental: una síntesis de ciencia, arte, filosofía y educación para personas en búsqueda de sentido y crecimiento interior.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'SEO On-Page'],
      technologyImages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
      ],
      features: [
        'Inicio editorial con identidad sobria',
        'Página "Acerca de" con la propuesta del proyecto',
        'Artículos del autor sobre trascendencia',
        'Ensayos y libretos como formatos diferenciados',
        'Acceso de lectores registrados',
        'Tipografía editorial premium',
        'Estructura SEO orientada a contenido',
        'Diseño responsive para lectura en móvil'
      ],
      serviceType: 'pagina-web',
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
        problem: 'El proyecto Hombre Universal necesitaba una plataforma digital seria, sobria y editorial para publicar escritos sobre ciencia, arte, filosofía y espiritualidad, dirigida a personas en búsqueda de trascendencia.',
        solution: 'Construí una publicación digital con tipografía editorial, secciones por formato (artículos, ensayos, libretos), acceso de lectores y una estética sobria coherente con el tono del contenido.',
        websiteUrl: 'https://hombreuniversal.com',
        type: 'Plataforma Editorial'
      }
    },
    {
      id: 'yachaytambo',
      title: 'Yachay Tambo',
      category: 'Retiro Vivencial · Bienestar',
      heroColor: '#2F4A1C',
      imageUrl: 'assets/portfolio/yachaytambo-inicio.png',
      imageUrl2: 'assets/portfolio/yachaytambo-experiencia.png',
      imageUrl3: 'assets/portfolio/yachaytambo-sedes.png',
      galleryImages: [
        'assets/portfolio/yachaytambo-inicio.png',
        'assets/portfolio/yachaytambo-experiencia.png',
        'assets/portfolio/yachaytambo-calendarios.png',
        'assets/portfolio/yachaytambo-sedes.png'
      ],
      description: 'Sitio web para retiros vivenciales “Mente que Sana”: experiencia, sedes en Urubamba y Tacna, calendario, tarifas y reserva.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'SEO On-Page'],
      technologyImages: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
      ],
      features: [
        'Inicio con propuesta del retiro vivencial',
        'Sección de experiencia y programa del retiro',
        'Presentación de 2 sedes: Urubamba y Tacna',
        'Calendario de próximas fechas',
        'Tarifas y llamados a la reserva',
        'Diseño responsive orientado a conversión',
        'Estructura SEO para presencia digital',
        'Identidad visual alineada al concepto andino y bienestar'
      ],
      serviceType: 'pagina-web',
      results: {
        title: 'Presencia Digital para Retiros',
        metrics: [
          { label: 'Retiros', value: '+ Retiros', icon: 'self_improvement' },
          { label: 'Sedes', value: '2 sedes', icon: 'location_on' },
          { label: 'Presencia', value: 'Digital activa', icon: 'public' },
          { label: 'Dominio', value: 'yachaytambo.pe', icon: 'domain' }
        ],
        businessImpact: [
          'Presencia digital profesional para comunicar la propuesta del retiro',
          'Presentación clara de ambas sedes: Urubamba y Tacna',
          'Calendario y tarifas visibles para facilitar la reserva',
          'Base lista para seguir agregando contenido y nuevas cohortes'
        ],
        problem: 'El cliente no sabía cómo tener presencia en la red ni cómo mostrar sus servicios de retiros vivenciales.',
        solution: 'Creé una página web donde puede presentar todos sus retiros en ambas sedes, con experiencia, calendario, tarifas y llamada a la reserva.',
        websiteUrl: 'https://yachaytambo.pe/',
        type: 'Sitio Web · Retiro Vivencial'
      }
    }
  ];

  // Planes por tipo de servicio
  plansByService: any = {
    'landing-page': [
      {
        name: 'LANDING',
        price: 'S/ 700',
        icon: 'star',
        features: [
          'Una página: bajas y está todo (oferta, por qué tú, contacto)',
          'Botón de WhatsApp o formulario para escribirte',
          'Se ve bien en el celular',
          'Nombre de tu web y alojamiento 6 meses',
          'Lista en aproximadamente 1 semana'
        ]
      },
      {
        name: 'SITIO',
        price: 'S/ 1,200',
        icon: 'rocket_launch',
        featured: true,
        features: [
          '5 páginas con menú: Inicio, Nosotros, Servicios, Preguntas y Contacto',
          'WhatsApp y formulario',
          'Se ve bien en el celular',
          'Nombre de tu web y alojamiento 6 meses',
          'Lista en 1 a 2 semanas'
        ]
      },
      {
        name: 'SITIO PRO',
        price: 'S/ 2,000',
        icon: 'diamond',
        features: [
          'Las 5 páginas del Sitio',
          'Hasta 4 páginas extra (un servicio, el equipo, una sede…)',
          'Ves cuánta gente entra a tu web',
          'Lista en 2 a 3 semanas',
          'Un panel para editar tú se cotiza aparte'
        ]
      }
    ],
    'pagina-web': [
      {
        name: 'LANDING',
        price: 'S/ 700',
        icon: 'star',
        features: [
          'Una página: bajas y está todo (oferta, por qué tú, contacto)',
          'Botón de WhatsApp o formulario para escribirte',
          'Se ve bien en el celular',
          'Nombre de tu web y alojamiento 6 meses',
          'Lista en aproximadamente 1 semana'
        ]
      },
      {
        name: 'SITIO',
        price: 'S/ 1,200',
        icon: 'rocket_launch',
        featured: true,
        features: [
          '5 páginas con menú: Inicio, Nosotros, Servicios, Preguntas y Contacto',
          'WhatsApp y formulario',
          'Se ve bien en el celular',
          'Nombre de tu web y alojamiento 6 meses',
          'Lista en 1 a 2 semanas'
        ]
      },
      {
        name: 'SITIO PRO',
        price: 'S/ 2,000',
        icon: 'diamond',
        features: [
          'Las 5 páginas del Sitio',
          'Hasta 4 páginas extra (un servicio, el equipo, una sede…)',
          'Ves cuánta gente entra a tu web',
          'Lista en 2 a 3 semanas',
          'Un panel para editar tú se cotiza aparte'
        ]
      }
    ],
    'tienda-virtual': [
      {
        name: 'EMPRENDE',
        price: 'S/ 2,000',
        icon: 'star',
        features: [
          'Tienda para cobrar: catálogo, carrito y un tipo de pago (Yape o tarjeta)',
          'Tú ves los pedidos; WhatsApp y correo al comprar',
          'Productos simples, sin talla ni color',
          'Subo 20 productos para arrancar',
          'Nombre de tu web 6 meses'
        ]
      },
      {
        name: 'CRECE',
        price: 'S/ 3,000',
        icon: 'rocket_launch',
        featured: true,
        features: [
          'Todo lo de Emprende',
          'Talla, color u otra opción',
          'Cupones y aviso si dejan la compra a medias',
          'Lista para anuncios de Facebook e Instagram'
        ]
      },
      {
        name: 'ESCALA',
        price: 'Desde S/ 4,500',
        icon: 'diamond',
        features: [
          'Todo lo de Crece',
          'Eliges una: un empleado ve pedidos, o cada compra se copia a otro programa',
          'S/ 4,500 es el piso; se cotiza'
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
        name: 'DIARIO',
        price: 'S/ 4,500',
        icon: 'star',
        features: [
          'El equipo registra el trabajo del día y lo consulta',
          'Un reporte de ese trabajo',
          'Sin ingresos ni gastos',
          'Lista en 4 a 6 semanas'
        ]
      },
      {
        name: 'CONTROL',
        price: 'S/ 7,000',
        icon: 'rocket_launch',
        featured: true,
        features: [
          'Todo lo de Diario',
          'Ingresos, gastos y un reporte de las finanzas',
          'Lista en 2 a 3 meses'
        ]
      },
      {
        name: 'AMPLÍA',
        price: 'Desde S/ 9,000',
        icon: 'diamond',
        features: [
          'Todo lo de Control',
          'Eliges una: otra sede, otro módulo, o copiar datos a otro programa',
          'S/ 9,000 es el piso; se cotiza'
        ]
      }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private host: ElementRef<HTMLElement>
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

  getProjectImages(): string[] {
    if (!this.project) return [];
    if (this.project.galleryImages?.length) return this.project.galleryImages;
    const images: string[] = [
      this.project.imageUrl,
      this.project.imageUrl2,
      this.project.imageUrl3
    ].filter(img => img !== undefined && img !== null) as string[];
    return images;
  }

  getHeroColor(): string {
    return this.project?.heroColor ?? '#1f150c';
  }

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.loadProject(params.get('id'));
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.project) {
      if (!this.prefersReducedMotion()) {
        this.gsapEnabled = true;
      }
      setTimeout(() => this.setupScrollAnimations(), 150);
    }
  }

  ngOnDestroy() {
    this.destroyed = true;
    this.routeSub?.unsubscribe();
    this.teardownMotion();
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private teardownMotion() {
    this.sectionObserver?.disconnect();
    this.sectionObserver = undefined;
    if (this.gsapCleanup) {
      this.gsapCleanup();
      this.gsapCleanup = null;
    }
  }

  private loadProject(projectId: string | null) {
    if (!projectId) {
      void this.router.navigate(['/portafolio']);
      return;
    }

    const found = this.allProjects.find(p => p.id === projectId) || null;
    if (!found) {
      void this.router.navigate(['/portafolio']);
      return;
    }

    const shouldRemount = !this.isFirstProjectLoad;
    this.isFirstProjectLoad = false;

    if (shouldRemount && isPlatformBrowser(this.platformId)) {
      this.showPage = false;
      this.teardownMotion();
      window.scrollTo({ top: 0, behavior: 'auto' });
      this.cdr.detectChanges();
    }

    this.project = found;
    this.sectionVisible = {};
    this.ctaVisible = false;
    this.ctaMagnetX = 0;
    this.ctaMagnetY = 0;
    this.ctaMagnetActive = false;

    this.relatedProjects = this.allProjects
      .filter(p => p.id !== projectId && p.serviceType === found.serviceType)
      .slice(0, 3);

    if (this.relatedProjects.length < 3) {
      const otherProjects = this.allProjects
        .filter(p => p.id !== projectId && !this.relatedProjects.find(rp => rp.id === p.id))
        .slice(0, 3 - this.relatedProjects.length);
      this.relatedProjects = [...this.relatedProjects, ...otherProjects];
    }

    const serviceTypeForPlans = found.id === 'omed-financial'
      ? 'digitalizacion-procesos'
      : found.serviceType;
    this.servicePlans = this.plansByService[serviceTypeForPlans] || [];

    if (!shouldRemount) {
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.setupScrollAnimations(), 150);
      }
      return;
    }

    requestAnimationFrame(() => {
      if (this.destroyed) {
        return;
      }

      this.showPage = true;
      this.cdr.detectChanges();

      if (isPlatformBrowser(this.platformId)) {
        if (!this.prefersReducedMotion()) {
          this.gsapEnabled = true;
        }
        setTimeout(() => this.setupScrollAnimations(), 150);
      }
    });
  }

  setupScrollAnimations() {
    if (!isPlatformBrowser(this.platformId) || this.destroyed || !this.project) {
      return;
    }

    this.teardownMotion();

    if (this.prefersReducedMotion()) {
      this.gsapEnabled = false;
      this.revealAllInstant();
      return;
    }

    this.gsapEnabled = true;

    this.ngZone.runOutsideAngular(() => {
      this.gsapCleanup = initPortafolioSeleccionadoGsapAnimations(this.host.nativeElement, {
        onSectionVisible: (sectionId) => {
          this.ngZone.run(() => {
            if (sectionId === 'cta') {
              this.ctaVisible = true;
            } else {
              this.sectionVisible[sectionId] = true;
            }
            this.cdr.markForCheck();
          });
        },
        onCtaComplete: () => {
          this.ngZone.run(() => {
            this.ctaVisible = true;
            this.cdr.markForCheck();
          });
        }
      });
    });
  }

  private revealAllInstant() {
    [
      'overview', 'impact', 'story', 'features', 'business',
      'gallery', 'stack', 'plans', 'related', 'cta'
    ].forEach((id) => {
      this.sectionVisible[id] = true;
    });
    this.ctaVisible = true;
    this.cdr.markForCheck();
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
}

