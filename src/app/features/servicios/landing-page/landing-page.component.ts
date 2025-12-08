import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit, AfterViewInit {
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
      icon: 'trending_up',
      title: 'Alta Conversión',
      description: 'Diseñada específicamente para convertir visitantes en clientes'
    },
    {
      icon: 'speed',
      title: 'Carga Instantánea',
      description: 'Optimizada para velocidad máxima y mejor experiencia'
    },
    {
      icon: 'target',
      title: 'Enfoque Único',
      description: 'Una página, un objetivo: tu conversión'
    },
    {
      icon: 'analytics',
      title: 'Tracking Completo',
      description: 'Mide cada clic y optimiza tus resultados'
    }
  ];

  methodology = [
    {
      step: '01',
      title: 'Análisis de Conversión',
      description: 'Estudiamos tu audiencia objetivo y creamos una estrategia de conversión personalizada'
    },
    {
      step: '02',
      title: 'Copywriting y Diseño',
      description: 'Desarrollamos mensajes persuasivos y diseño visual que guía al usuario hacia la acción'
    },
    {
      step: '03',
      title: 'Desarrollo Full Code',
      description: 'Construimos tu landing page desde cero con código optimizado para máxima velocidad'
    },
    {
      step: '04',
      title: 'Optimización de Conversión',
      description: 'A/B testing, formularios optimizados y llamados a la acción estratégicamente ubicados'
    },
    {
      step: '05',
      title: 'Integración y Lanzamiento',
      description: 'Conectamos con tus herramientas de marketing y lanzamos tu landing page lista para convertir'
    }
  ];

  fullCodeBenefits = [
    {
      icon: 'code',
      title: 'Código Optimizado para Conversión',
      description: 'Código limpio y rápido que carga instantáneamente. Cada milisegundo cuenta para convertir visitantes.'
    },
    {
      icon: 'speed',
      title: 'Velocidad Extrema',
      description: 'Sin plantillas pesadas. Tu landing page carga en menos de 1 segundo para maximizar conversiones.'
    },
    {
      icon: 'analytics',
      title: 'Tracking Completo',
      description: 'Código personalizado permite tracking detallado de cada interacción para optimizar continuamente.'
    },
    {
      icon: 'tune',
      title: 'A/B Testing Nativo',
      description: 'Fácil implementación de variantes para probar qué funciona mejor y aumentar conversiones.'
    },
    {
      icon: 'integration_instructions',
      title: 'Integraciones Flexibles',
      description: 'Conectamos con cualquier CRM, email marketing o herramienta sin limitaciones de plantillas.'
    },
    {
      icon: 'trending_up',
      title: 'Escalabilidad para Campañas',
      description: 'Tu landing page puede manejar tráfico masivo sin problemas. Lista para campañas grandes.'
    }
  ];

  plans = [
    {
      name: 'START',
      price: 'S/ 500',
      icon: 'star',
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-purple-500 to-pink-500',
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
      color: 'from-orange-500 to-red-500',
      features: [
        '8-10 bloques: Hero premium, Valor diferencial, Solución, Beneficios, Video/Demo, Planes, Testimonios, Casos de éxito, FAQ, CTA final',
        'Diseño totalmente personalizado',
        'Animaciones avanzadas',
        'SEO completo',
        'Optimizada para campañas masivas',
        'Automatizaciones (email + etiquetas)'
      ]
    }
  ];
}

