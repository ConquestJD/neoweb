import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements OnInit, OnDestroy, AfterViewInit {
  // Estados de visibilidad para animaciones de scroll
  sectionsVisible: { [key: string]: string } = {
    'history': 'visible',
    'mission': 'visible',
    'values': 'visible',
    'technologies': 'visible',
    'stats': 'visible'
  };

  // Cómo trabajo con cada cliente
  values = [
    {
      icon: 'handshake',
      title: 'Trato directo',
      description: 'Hablas conmigo, no con un intermediario. Comunicación clara y decisiones rápidas en todo el proyecto.'
    },
    {
      icon: 'code',
      title: 'Código a medida',
      description: 'Desarrollo desde cero con código real, sin plantillas ni WordPress. Mejor rendimiento, seguridad y diseño único.'
    },
    {
      icon: 'speed',
      title: 'Rapidez y eficiencia',
      description: 'Entrego proyectos de calidad en tiempos razonables, manteniendo siempre la atención al detalle.'
    },
    {
      icon: 'support',
      title: 'Soporte cercano',
      description: 'Te acompaño después de la entrega con mejoras, ajustes y soporte técnico cuando lo necesites.'
    }
  ];

  // Métricas reales
  stats = [
    {
      number: '2025',
      label: 'Inicio del proyecto',
      icon: 'calendar_today'
    },
    {
      number: '6',
      label: 'Proyectos entregados',
      icon: 'check_circle'
    },
    {
      number: '4',
      label: 'Clientes reales',
      icon: 'people'
    },
    {
      number: '<24h',
      label: 'Respuesta inicial',
      icon: 'support_agent'
    }
  ];

  // Tecnologías con imágenes (stack real)
  technologies = [
    { 
      name: 'Angular', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
      icon: 'code'
    },
    { 
      name: 'React', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      icon: 'code'
    },
    { 
      name: 'TypeScript', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      icon: 'code'
    },
    { 
      name: 'JavaScript', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      icon: 'code'
    },
    { 
      name: 'Node.js', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      icon: 'code'
    },
    { 
      name: 'Python', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      icon: 'code'
    },
    { 
      name: 'FastAPI', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
      icon: 'code'
    },
    { 
      name: 'MySQL', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
      icon: 'code'
    },
    { 
      name: 'PostgreSQL', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      icon: 'code'
    },
    { 
      name: 'MongoDB', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      icon: 'code'
    },
    { 
      name: 'TailwindCSS', 
      image: 'https://api.iconify.design/devicon:tailwindcss.svg?color=%2306b6d4',
      icon: 'code'
    },
    { 
      name: 'Angular Material', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg',
      icon: 'code'
    },
    { 
      name: 'Firebase', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
      icon: 'code'
    },
    { 
      name: 'Git', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      icon: 'code'
    },
    { 
      name: 'Figma', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      icon: 'code'
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Inicializar animaciones
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
}

