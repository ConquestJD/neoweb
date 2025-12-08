import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultoria-seo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './consultoria-seo.component.html',
  styleUrl: './consultoria-seo.component.css'
})
export class ConsultoriaSeoComponent implements OnInit, AfterViewInit {
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
    { icon: 'search', title: 'Auditoría SEO', description: 'Análisis completo de tu sitio web' },
    { icon: 'trending_up', title: 'Optimización', description: 'Mejora de posicionamiento orgánico' },
    { icon: 'analytics', title: 'Keyword Research', description: 'Investigación de palabras clave' },
    { icon: 'content_copy', title: 'Contenido Optimizado', description: 'Estrategia de contenido SEO' }
  ];

  methodology = [
    {
      step: '01',
      title: 'Auditoría SEO Completa',
      description: 'Analizamos tu sitio web, competencia y palabras clave para identificar oportunidades'
    },
    {
      step: '02',
      title: 'Estrategia Personalizada',
      description: 'Desarrollamos estrategia SEO específica para tu industria y objetivos de negocio'
    },
    {
      step: '03',
      title: 'Optimización Técnica',
      description: 'Mejoramos estructura, velocidad, mobile-friendliness y aspectos técnicos del SEO'
    },
    {
      step: '04',
      title: 'Optimización de Contenido',
      description: 'Optimizamos contenido existente y creamos nuevo contenido estratégico para SEO'
    },
    {
      step: '05',
      title: 'Monitoreo y Reportes',
      description: 'Monitoreamos rankings, tráfico y conversiones con reportes mensuales detallados'
    }
  ];

  fullCodeBenefits = [
    {
      icon: 'code',
      title: 'Optimización Técnica Profunda',
      description: 'Revisamos y optimizamos el código de tu sitio para cumplir con todos los estándares de Google.'
    },
    {
      icon: 'search',
      title: 'Estrategia Personalizada',
      description: 'Cada estrategia SEO está diseñada específicamente para tu negocio y audiencia objetivo.'
    },
    {
      icon: 'analytics',
      title: 'Análisis Detallado',
      description: 'Herramientas profesionales y análisis manual para identificar oportunidades reales.'
    },
    {
      icon: 'trending_up',
      title: 'Resultados Sostenibles',
      description: 'SEO técnico y de contenido que genera resultados a largo plazo sin depender de trucos.'
    },
    {
      icon: 'link',
      title: 'Linkbuilding Estratégico',
      description: 'Estrategias de linkbuilding interno y externo basadas en contenido de calidad.'
    },
    {
      icon: 'support_agent',
      title: 'Seguimiento Continuo',
      description: 'Monitoreo constante y ajustes basados en cambios de algoritmos y tendencias.'
    }
  ];

  plans = [
    {
      name: 'START',
      price: 'S/ 400',
      period: '/mes',
      icon: 'star',
      color: 'from-yellow-500 to-amber-500',
      features: [
        'Auditoría básica',
        'Palabras clave'
      ]
    },
    {
      name: 'PRO',
      price: 'S/ 900',
      period: '/mes',
      icon: 'rocket_launch',
      color: 'from-purple-500 to-pink-500',
      featured: true,
      features: [
        'SEO técnico',
        'Optimización contenido',
        'Reportes'
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
        'Linkbuilding interno',
        'Monitoreo en tiempo real'
      ]
    }
  ];
}

