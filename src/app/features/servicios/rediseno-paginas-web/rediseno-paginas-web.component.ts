import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rediseno-paginas-web',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rediseno-paginas-web.component.html',
  styleUrl: '../servicios-shared.component.css'
})
export class RedisenoPaginasWebComponent implements OnInit, AfterViewInit {
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
    { icon: 'refresh', title: 'Modernización', description: 'Diseño actual y profesional' },
    { icon: 'speed', title: 'Optimización', description: 'Mejora de velocidad y rendimiento' },
    { icon: 'devices', title: 'Responsive', description: 'Adaptación a todos los dispositivos' },
    { icon: 'trending_up', title: 'Mejores Resultados', description: 'Aumento de conversiones' }
  ];

  methodology = [
    {
      step: '01',
      title: 'Auditoría Completa',
      description: 'Analizamos tu sitio actual, identificamos problemas y oportunidades de mejora',
      icon: 'assessment'
    },
    {
      step: '02',
      title: 'Propuesta de Rediseño',
      description: 'Presentamos propuesta visual y funcional que mejora tu sitio manteniendo tu identidad',
      icon: 'palette'
    },
    {
      step: '03',
      title: 'Desarrollo Full Code',
      description: 'Reconstruimos tu sitio desde cero con código moderno, optimizado y escalable',
      icon: 'code'
    },
    {
      step: '04',
      title: 'Migración y Optimización',
      description: 'Migramos tu contenido sin pérdida de datos y optimizamos velocidad y SEO',
      icon: 'sync'
    },
    {
      step: '05',
      title: 'Lanzamiento y Capacitación',
      description: 'Lanzamos tu nuevo sitio y te capacitamos en el uso del nuevo panel administrativo',
      icon: 'school'
    }
  ];

  fullCodeBenefits = [
    {
      icon: 'code',
      title: 'Código Moderno y Limpio',
      description: 'Reemplazamos código obsoleto con tecnología actual. Tu sitio es más rápido, seguro y fácil de mantener.'
    },
    {
      icon: 'speed',
      title: 'Rendimiento Mejorado',
      description: 'Código optimizado que reduce tiempos de carga hasta en un 70%. Mejor experiencia para tus usuarios.'
    },
    {
      icon: 'security',
      title: 'Seguridad Actualizada',
      description: 'Eliminamos vulnerabilidades y actualizamos a los últimos estándares de seguridad web.'
    },
    {
      icon: 'tune',
      title: 'Totalmente Personalizable',
      description: 'Código limpio permite modificaciones y actualizaciones sin limitaciones técnicas.'
    },
    {
      icon: 'trending_up',
      title: 'SEO Mejorado',
      description: 'Estructura de código optimizada para SEO que mejora tu posicionamiento en Google.'
    },
    {
      icon: 'devices',
      title: 'Responsive Perfecto',
      description: 'Código moderno garantiza que tu sitio se vea perfecto en todos los dispositivos.'
    }
  ];

  plans = [
    {
      name: 'START',
      price: 'S/ 800',
      icon: 'star',
      color: 'from-indigo-500 to-blue-500',
      features: [
        'Modernización estética',
        'Ajustes de contenido',
        'Mejora de estructura'
      ]
    },
    {
      name: 'PRO',
      price: 'S/ 1,400',
      icon: 'rocket_launch',
      color: 'from-purple-500 to-pink-500',
      featured: true,
      features: [
        'Rediseño completo de front-end',
        'Nuevas animaciones',
        'SEO on-page básico'
      ]
    },
    {
      name: 'PREMIUM',
      price: 'S/ 2,500',
      icon: 'diamond',
      color: 'from-orange-500 to-red-500',
      features: [
        'Reconstrucción total',
        'Optimización de velocidad',
        'SEO técnico completo',
        'Migración profesional'
      ]
    }
  ];
}

