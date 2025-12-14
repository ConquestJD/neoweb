import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-marketing-digital',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './marketing-digital.component.html',
  styleUrl: '../servicios-shared.component.css'
})
export class MarketingDigitalComponent implements OnInit, AfterViewInit {
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
    { icon: 'campaign', title: 'Estrategia Integral', description: 'Plan completo de marketing digital' },
    { icon: 'share', title: 'Redes Sociales', description: 'Gestión profesional de tus perfiles' },
    { icon: 'email', title: 'Email Marketing', description: 'Campañas automatizadas efectivas' },
    { icon: 'analytics', title: 'Analytics Avanzado', description: 'Medición y optimización continua' }
  ];

  methodology = [
    {
      step: '01',
      title: 'Análisis de Marca y Audiencia',
      description: 'Estudiamos tu marca, competencia y audiencia objetivo para crear estrategias efectivas',
      icon: 'person_search'
    },
    {
      step: '02',
      title: 'Estrategia de Contenido',
      description: 'Desarrollamos calendario editorial y estrategia de contenido que conecta con tu audiencia',
      icon: 'content_copy'
    },
    {
      step: '03',
      title: 'Ejecución Multi-Canal',
      description: 'Gestionamos tus redes sociales, email marketing y campañas de forma coordinada',
      icon: 'campaign'
    },
    {
      step: '04',
      title: 'Análisis y Optimización',
      description: 'Medimos resultados, analizamos métricas y optimizamos continuamente para mejores resultados',
      icon: 'analytics'
    }
  ];

  fullCodeBenefits = [
    {
      icon: 'code',
      title: 'Estrategias Personalizadas',
      description: 'Cada estrategia está diseñada específicamente para tu negocio, sin plantillas genéricas.'
    },
    {
      icon: 'campaign',
      title: 'Gestión Integral',
      description: 'Gestionamos todos tus canales digitales de forma coordinada para máxima efectividad.'
    },
    {
      icon: 'analytics',
      title: 'Métricas Accionables',
      description: 'Reportes detallados con insights claros que te ayudan a tomar mejores decisiones.'
    },
    {
      icon: 'trending_up',
      title: 'ROI Medible',
      description: 'Cada estrategia está diseñada para generar resultados medibles y retorno de inversión.'
    },
    {
      icon: 'auto_awesome',
      title: 'Contenido de Calidad',
      description: 'Creamos contenido original y de valor que posiciona tu marca como autoridad en tu industria.'
    },
    {
      icon: 'support_agent',
      title: 'Soporte Continuo',
      description: 'Equipo dedicado que gestiona tu presencia digital y responde rápidamente a tus necesidades.'
    }
  ];

  plans = [
    {
      name: 'START',
      price: 'S/ 600',
      period: '/mes',
      icon: 'star',
      color: 'from-orange-500 to-red-500',
      features: [
        '8 publicaciones',
        'Diseño simple',
        'Copywriting',
        'Calendario básico',
        'Métricas simples'
      ]
    },
    {
      name: 'PRO',
      price: 'S/ 1,200',
      period: '/mes',
      icon: 'rocket_launch',
      color: 'from-purple-500 to-pink-500',
      featured: true,
      features: [
        '12 publicaciones',
        '1 reel mensual',
        'Diseño profesional',
        'Estrategia de contenido',
        'Métricas detalladas'
      ]
    },
    {
      name: 'PREMIUM',
      price: 'S/ 1,800',
      period: '/mes',
      icon: 'diamond',
      color: 'from-blue-500 to-cyan-500',
      features: [
        '16 publicaciones',
        '4 reels al mes',
        'Campaña publicitaria incluida (sin presupuesto)',
        'Branding visual',
        'Informes completos + reunión mensual'
      ]
    }
  ];
}

