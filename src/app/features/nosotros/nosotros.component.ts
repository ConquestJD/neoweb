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

  // Valores de la empresa
  values = [
    {
      icon: 'visibility',
      title: 'Visibilidad Digital',
      description: 'Ayudamos a tu negocio a ser encontrado por más clientes potenciales en internet.'
    },
    {
      icon: 'trending_up',
      title: 'Crecimiento Online',
      description: 'Creamos estrategias digitales que impulsan el crecimiento de tu empresa.'
    },
    {
      icon: 'speed',
      title: 'Rapidez y Eficiencia',
      description: 'Entregamos proyectos de calidad en tiempos récord, sin comprometer la excelencia.'
    },
    {
      icon: 'support',
      title: 'Soporte Continuo',
      description: 'Estamos contigo en cada paso, ofreciendo soporte técnico y asesoría permanente.'
    }
  ];

  // Estadísticas de la empresa
  stats = [
    {
      number: '2025',
      label: 'Año de Fundación',
      icon: 'calendar_today'
    },
    {
      number: '100+',
      label: 'Proyectos Completados',
      icon: 'check_circle'
    },
    {
      number: '50+',
      label: 'Clientes Satisfechos',
      icon: 'people'
    },
    {
      number: '24/7',
      label: 'Soporte Disponible',
      icon: 'support_agent'
    }
  ];

  // Tecnologías con imágenes
  technologies = [
    { 
      name: 'Angular 20', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
      icon: 'code'
    },
    { 
      name: 'React 18', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      icon: 'code'
    },
    { 
      name: 'Vue.js 3', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
      icon: 'code'
    },
    { 
      name: 'Node.js', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      icon: 'code'
    },
    { 
      name: 'TypeScript', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      icon: 'code'
    },
    { 
      name: 'TailwindCSS', 
      image: 'https://api.iconify.design/devicon:tailwindcss.svg?color=%2306b6d4',
      icon: 'code'
    },
    { 
      name: 'Firebase', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
      icon: 'code'
    },
    { 
      name: 'MongoDB', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      icon: 'code'
    },
    { 
      name: 'PostgreSQL', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      icon: 'code'
    },
    { 
      name: 'AWS', 
      image: 'https://api.iconify.design/logos:aws.svg',
      icon: 'code'
    },
    { 
      name: 'Docker', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
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
    },
    { 
      name: 'Adobe XD', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg',
      icon: 'code'
    },
    { 
      name: 'Spline 3D', 
      image: 'https://api.iconify.design/simple-icons:spline.svg',
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

