import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aplicaciones-moviles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aplicaciones-moviles.component.html',
  styleUrl: '../servicios-shared.component.css'
})
export class AplicacionesMovilesComponent implements OnInit, AfterViewInit {
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
    { icon: 'phone_android', title: 'iOS y Android', description: 'Aplicaciones nativas para ambas plataformas' },
    { icon: 'speed', title: 'Alto Rendimiento', description: 'Optimizadas para velocidad y fluidez' },
    { icon: 'design_services', title: 'Diseño Intuitivo', description: 'Interfaz moderna y fácil de usar' },
    { icon: 'cloud', title: 'Sincronización', description: 'Datos en la nube accesibles desde cualquier lugar' }
  ];

  methodology = [
    {
      step: '01',
      title: 'Análisis y Diseño UX/UI',
      description: 'Estudio tu audiencia y diseño una experiencia móvil intuitiva y atractiva',
      icon: 'phone_android'
    },
    {
      step: '02',
      title: 'Prototipado y Validación',
      description: 'Creo prototipos interactivos para validar la experiencia antes del desarrollo',
      icon: 'design_services'
    },
    {
      step: '03',
      title: 'Desarrollo Full Code',
      description: 'Desarrollo tu app desde cero con código nativo o híbrido optimizado para rendimiento',
      icon: 'code'
    },
    {
      step: '04',
      title: 'Testing y Optimización',
      description: 'Pruebo en múltiples dispositivos y optimizo rendimiento y experiencia',
      icon: 'bug_report'
    },
    {
      step: '05',
      title: 'Publicación y Mantenimiento',
      description: 'Publico en App Store y Google Play, y brindo mantenimiento continuo',
      icon: 'publish'
    }
  ];

  fullCodeBenefits = [
    {
      icon: 'code',
      title: 'Código Nativo o Híbrido',
      description: 'Desarrollo con código nativo para máximo rendimiento o híbrido para llegar a más plataformas.'
    },
    {
      icon: 'speed',
      title: 'Rendimiento Superior',
      description: 'Apps optimizadas que funcionan fluidamente incluso con datos limitados o conexión lenta.'
    },
    {
      icon: 'security',
      title: 'Seguridad de Datos',
      description: 'Código personalizado con encriptación y protección de datos del usuario.'
    },
    {
      icon: 'integration_instructions',
      title: 'Integraciones Completas',
      description: 'Conecto con APIs, sistemas backend y servicios externos sin limitaciones.'
    },
    {
      icon: 'offline_bolt',
      title: 'Funcionalidad Offline',
      description: 'Apps que funcionan sin conexión con sincronización inteligente cuando hay internet.'
    },
    {
      icon: 'update',
      title: 'Actualizaciones Rápidas',
      description: 'Código bien estructurado permite actualizaciones y nuevas funcionalidades sin problemas.'
    }
  ];

  plans = [
    {
      name: 'START',
      price: 'S/ 4,000',
      icon: 'star',
      color: 'from-teal-500 to-cyan-500',
      features: [
        'App informativa',
        '4-6 pantallas',
        'Android'
      ]
    },
    {
      name: 'PRO',
      price: 'S/ 7,500',
      icon: 'rocket_launch',
      color: 'from-gray-700 to-gray-900',
      featured: true,
      features: [
        'Login + BD',
        'Notificaciones',
        'Android + iOS'
      ]
    },
    {
      name: 'PREMIUM',
      price: 'S/ 12,000+',
      icon: 'diamond',
      color: 'from-orange-500 to-red-500',
      features: [
        'App completa',
        'Integraciones API',
        'Dashboard admin',
        'UI/UX avanzado'
      ]
    }
  ];
}

