import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-digitalizacion-procesos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './digitalizacion-procesos.component.html',
  styleUrl: '../servicios-shared.component.css'
})
export class DigitalizacionProcesosComponent implements OnInit, AfterViewInit {
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
    { icon: 'auto_awesome', title: 'Automatización', description: 'Automatiza procesos manuales' },
    { icon: 'dashboard', title: 'Dashboards', description: 'Visualiza datos en tiempo real' },
    { icon: 'integration_instructions', title: 'Integraciones', description: 'Conecta sistemas existentes' },
    { icon: 'security', title: 'Seguridad', description: 'Protección de datos y procesos' }
  ];

  methodology = [
    {
      step: '01',
      title: 'Análisis de Procesos',
      description: 'Mapeo tus procesos actuales, identifico ineficiencias y oportunidades de automatización',
      icon: 'assessment'
    },
    {
      step: '02',
      title: 'Diseño de Solución',
      description: 'Diseño la solución digital personalizada que optimiza y automatiza tus procesos',
      icon: 'design_services'
    },
    {
      step: '03',
      title: 'Desarrollo Full Code',
      description: 'Desarrollo un sistema personalizado desde cero con código limpio y escalable',
      icon: 'code'
    },
    {
      step: '04',
      title: 'Implementación y Migración',
      description: 'Implemento la solución, migro datos y capacito a tu equipo',
      icon: 'sync'
    },
    {
      step: '05',
      title: 'Optimización Continua',
      description: 'Monitoreo el sistema y optimizo continuamente para mejor rendimiento',
      icon: 'trending_up'
    }
  ];

  fullCodeBenefits = [
    {
      icon: 'code',
      title: 'Sistema Personalizado',
      description: 'Desarrollado desde cero para tus procesos específicos. No adapto software genérico, creo la solución perfecta.'
    },
    {
      icon: 'auto_awesome',
      title: 'Automatización Inteligente',
      description: 'Automatizo procesos complejos con lógica de negocio personalizada que se adapta a tus necesidades.'
    },
    {
      icon: 'dashboard',
      title: 'Dashboard Personalizado',
      description: 'Panel de control diseñado específicamente para tu negocio con métricas y reportes relevantes.'
    },
    {
      icon: 'integration_instructions',
      title: 'Integraciones Completas',
      description: 'Conecto con cualquier sistema existente: ERP, CRM, contabilidad, sin limitaciones.'
    },
    {
      icon: 'security',
      title: 'Seguridad y Permisos',
      description: 'Sistema de roles y permisos personalizado que protege información sensible según tu estructura organizacional.'
    },
    {
      icon: 'trending_up',
      title: 'Escalabilidad Garantizada',
      description: 'Código arquitecturado para crecer con tu negocio. Agrego funcionalidades sin reconstruir.'
    }
  ];

  plans = [
    {
      name: 'START',
      price: 'S/ 1,500',
      icon: 'star',
      color: 'from-gray-600 to-gray-800',
      features: [
        '1 proceso digitalizado',
        'Formularios / flujos básicos'
      ]
    },
    {
      name: 'PRO',
      price: 'S/ 4,000',
      icon: 'rocket_launch',
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-orange-500 to-red-500',
      features: [
        'Sistema interno completo',
        'Automatizaciones avanzadas',
        'Dashboard BI',
        'Capacitación'
      ]
    }
  ];
}

