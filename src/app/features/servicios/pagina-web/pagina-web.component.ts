import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagina-web',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pagina-web.component.html',
  styleUrl: '../servicios-shared.component.css'
})
export class PaginaWebComponent implements OnInit, AfterViewInit {
  sectionsVisible: { [key: string]: string } = {};

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

  cleanupWebGL() {
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
    
    const sections = document.querySelectorAll('[data-section-id]');
    sections.forEach(section => observer.observe(section));
  }

  features = [
    {
      icon: 'speed',
      title: 'Carga Ultra Rápida',
      description: 'Optimizada para velocidad, tu sitio carga en menos de 2 segundos'
    },
    {
      icon: 'devices',
      title: '100% Responsive',
      description: 'Se adapta perfectamente a móviles, tablets y escritorio'
    },
    {
      icon: 'search',
      title: 'SEO Optimizado',
      description: 'Aparece en los primeros resultados de Google'
    },
    {
      icon: 'security',
      title: 'Seguridad Garantizada',
      description: 'Certificado SSL y protección contra ataques'
    },
    {
      icon: 'analytics',
      title: 'Analytics Integrado',
      description: 'Conoce el comportamiento de tus visitantes'
    },
    {
      icon: 'support_agent',
      title: 'Soporte Continuo',
      description: 'Asistencia técnica cuando la necesites'
    }
  ];

  methodology = [
    {
      step: '01',
      title: 'Análisis y Planificación',
      description: 'Analizamos tu negocio, objetivos y competencia para crear una estrategia digital personalizada',
      icon: 'assessment'
    },
    {
      step: '02',
      title: 'Diseño y Prototipado',
      description: 'Creamos diseños modernos y funcionales que reflejan la identidad de tu marca',
      icon: 'palette'
    },
    {
      step: '03',
      title: 'Desarrollo Full Code',
      description: 'Desarrollamos tu sitio web desde cero con código limpio, optimizado y escalable',
      icon: 'code'
    },
    {
      step: '04',
      title: 'Optimización y Testing',
      description: 'Probamos en todos los dispositivos y optimizamos velocidad, SEO y experiencia de usuario',
      icon: 'speed'
    },
    {
      step: '05',
      title: 'Lanzamiento y Soporte',
      description: 'Publicamos tu sitio web y te brindamos soporte continuo para asegurar su éxito',
      icon: 'launch'
    }
  ];

  fullCodeBenefits = [
    {
      icon: 'code',
      title: 'Código Limpio y Optimizado',
      description: 'Desarrollamos desde cero con código limpio, sin dependencias innecesarias. Tu sitio es rápido, seguro y fácil de mantener.'
    },
    {
      icon: 'speed',
      title: 'Rendimiento Superior',
      description: 'Sin plantillas pesadas. Código optimizado que carga en menos de 2 segundos y ofrece una experiencia fluida.'
    },
    {
      icon: 'security',
      title: 'Seguridad Total',
      description: 'Código personalizado significa menos vulnerabilidades. Tu sitio está protegido contra ataques comunes.'
    },
    {
      icon: 'tune',
      title: 'Totalmente Personalizable',
      description: 'Cada línea de código está diseñada para tu negocio. Modificaciones y actualizaciones sin límites.'
    },
    {
      icon: 'trending_up',
      title: 'Escalabilidad Garantizada',
      description: 'Tu sitio puede crecer sin restricciones. Agregamos funcionalidades cuando las necesites.'
    },
    {
      icon: 'support_agent',
      title: 'Mantenimiento Simplificado',
      description: 'Código bien estructurado facilita el mantenimiento. Actualizaciones rápidas y sin complicaciones.'
    }
  ];

  plans = [
    {
      name: 'START',
      price: 'S/ 1,200',
      icon: 'star',
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-purple-500 to-pink-500',
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
      color: 'from-orange-500 to-red-500',
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
  ];
}

