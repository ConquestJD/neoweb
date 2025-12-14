import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-google-ads',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './google-ads.component.html',
  styleUrl: '../servicios-shared.component.css'
})
export class GoogleAdsComponent implements OnInit, AfterViewInit {
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
    { icon: 'ads_click', title: 'Campañas Optimizadas', description: 'Estrategias personalizadas para tu negocio' },
    { icon: 'trending_up', title: 'ROI Medible', description: 'Seguimiento completo de resultados' },
    { icon: 'target', title: 'Segmentación Precisa', description: 'Llega a tu audiencia ideal' },
    { icon: 'analytics', title: 'Reportes Detallados', description: 'Análisis continuo de rendimiento' }
  ];

  methodology = [
    {
      step: '01',
      title: 'Auditoría y Estrategia',
      description: 'Analizamos tu negocio, competencia y palabras clave para crear una estrategia publicitaria efectiva',
      icon: 'search'
    },
    {
      step: '02',
      title: 'Configuración de Campañas',
      description: 'Creamos y configuramos tus campañas con segmentación precisa y presupuesto optimizado',
      icon: 'settings'
    },
    {
      step: '03',
      title: 'Optimización Continua',
      description: 'Monitoreamos y optimizamos diariamente para mejorar el ROI y reducir costos por conversión',
      icon: 'trending_up'
    },
    {
      step: '04',
      title: 'Análisis y Reportes',
      description: 'Generamos reportes detallados con insights accionables para mejorar continuamente',
      icon: 'assessment'
    }
  ];

  fullCodeBenefits = [
    {
      icon: 'code',
      title: 'Configuración Personalizada',
      description: 'Cada campaña está configurada específicamente para tu negocio, sin plantillas genéricas.'
    },
    {
      icon: 'analytics',
      title: 'Tracking Avanzado',
      description: 'Implementamos tracking personalizado para medir cada conversión y optimizar en tiempo real.'
    },
    {
      icon: 'tune',
      title: 'Optimización Manual',
      description: 'Ajustes manuales basados en datos reales, no algoritmos automáticos que desperdician presupuesto.'
    },
    {
      icon: 'trending_up',
      title: 'ROI Maximizado',
      description: 'Estrategias personalizadas que maximizan el retorno de inversión de cada sol invertido.'
    },
    {
      icon: 'integration_instructions',
      title: 'Integraciones Completas',
      description: 'Conectamos con tu CRM, sitio web y herramientas de análisis para un seguimiento completo.'
    },
    {
      icon: 'support_agent',
      title: 'Gestión Profesional',
      description: 'Equipo experto que gestiona tu cuenta como si fuera nuestra, con atención personalizada.'
    }
  ];

  plans = [
    {
      name: 'START',
      price: 'S/ 400',
      period: '/mes',
      icon: 'star',
      color: 'from-green-500 to-emerald-500',
      features: [
        '1 campaña',
        'Segmentación básica',
        'Configuración de conversiones',
        'Reporte mensual'
      ]
    },
    {
      name: 'PRO',
      price: 'S/ 900',
      period: '/mes',
      icon: 'rocket_launch',
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      features: [
        '2-3 campañas',
        'Optimización constante',
        'Remarketing',
        'Extensiones',
        'Reportes profesionales'
      ]
    },
    {
      name: 'PREMIUM',
      price: 'S/ 1,500',
      period: '/mes',
      icon: 'diamond',
      color: 'from-orange-500 to-red-500',
      features: [
        'Estrategia completa',
        'A/B Testing',
        'Funnels',
        'Integración con CRM',
        'Reunión mensual'
      ]
    }
  ];
}

