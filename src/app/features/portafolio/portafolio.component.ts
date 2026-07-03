import { Component, OnInit, OnDestroy, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent implements OnInit, OnDestroy, AfterViewInit {
  // Estados de visibilidad para animaciones de scroll
  sectionsVisible: { [key: string]: string } = {
    'hero': 'visible',
    'project-liceum': 'visible',
    'stats': 'visible'
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.cleanupWebGL();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.setupScrollAnimations();
      }, 100);
    }
  }

  ngOnDestroy() {
    // Cleanup si es necesario
  }

  cleanupWebGL() {
    // Limpiar elementos Spline que puedan estar causando errores WebGL
    const splineElements = document.querySelectorAll('spline-viewer');
    splineElements.forEach(element => {
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.ngZone.run(() => {
            const sectionId = entry.target.getAttribute('data-section-id');
            if (sectionId) {
              this.sectionsVisible[sectionId] = 'visible';
              this.cdr.markForCheck();
            }
          });
        }
      });
    }, observerOptions);
    
    // Observar todas las secciones con data-section-id
    const sections = document.querySelectorAll('[data-section-id]');
    sections.forEach(section => {
      observer.observe(section);
    });
  }

  scrollToProjects() {
    if (isPlatformBrowser(this.platformId)) {
      const firstProject = document.querySelector('[data-section-id="project-liceum"]');
      if (firstProject) {
        firstProject.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Proyectos reales del portafolio
  projects = [
    {
      id: 'liceum',
      title: 'LICEUM',
      category: 'Centro de Investigación Médica',
      imageUrl: 'assets/portfolio/liceum-inicio.png',
      imageUrl2: 'assets/portfolio/liceum-cursos.png',
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
        type: 'Tienda Virtual'
      }
    },
    {
      id: 'omed',
      title: 'OMED',
      category: 'Clínica Especializada',
      imageUrl: 'assets/portfolio/omed-inicio.png',
      imageUrl2: 'assets/portfolio/omed-especialidades-medicas.png',
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
      category: 'Digitalización de Procesos',
      imageUrl: 'assets/portfolio/gestion-financiera-omed-login.png',
      imageUrl2: 'assets/portfolio/gestion-financiera-omed-login.png',
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
        type: 'Digitalización de Procesos'
      }
    },
    {
      id: 'sml-web',
      title: 'Santa María Laura',
      category: 'Colegio Privado · Lima',
      imageUrl: 'assets/portfolio/sml-inicio.png',
      imageUrl2: 'assets/portfolio/sml-educacion-formativa.png',
      description: 'Sitio institucional para el colegio privado Santa María Laura: comunica su propuesta educativa, niveles, infraestructura y proceso de admisión.',
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
      imageUrl2: 'assets/portfolio/sml-portal-login.png',
      description: 'Plataforma educativa integral del colegio Santa María Laura: gestión académica, comunicación profesores‑padres y acceso seguro para la comunidad escolar.',
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
      imageUrl2: 'assets/portfolio/hombre-universal-articulos.png',
      description: 'Publicación digital orientada al descubrimiento del Hombre Trascendental: una síntesis de ciencia, arte, filosofía y educación para personas en búsqueda de sentido y crecimiento interior.',
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

  // Estadísticas reales del portafolio
  stats = [
    {
      number: '6',
      label: 'Proyectos entregados',
      icon: 'rocket_launch',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '4',
      label: 'Clientes reales',
      icon: 'groups',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: 'Multi-país',
      label: 'Alcance (Perú · El Salvador · Bolivia)',
      icon: 'public',
      color: 'from-gray-600 to-gray-800'
    },
    {
      number: 'Full-stack',
      label: 'Front + Back end',
      icon: 'code',
      color: 'from-orange-500 to-red-500'
    }
  ];
}

