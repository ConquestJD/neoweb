import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactLinksComponent } from '../../shared/components/contact-links/contact-links.component';

interface FAQ {
  question: string;
  answer: string;
  icon: string;
  isOpen: boolean;
  details?: string[];
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactLinksComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit, OnDestroy, AfterViewInit {
  // Estados de visibilidad para animaciones de scroll
  sectionsVisible: { [key: string]: string } = {
    'contact-methods': 'visible',
    'schedule': 'visible',
    'faq': 'visible'
  };

  // FAQs
  faqs: FAQ[] = [
    {
      question: '¿Cuánto tarda un proyecto?',
      answer: 'Los tiempos varían según el tipo y alcance del proyecto:',
      icon: 'schedule',
      isOpen: false,
      details: [
        'Landing Page: 1 semana',
        'Sitio corporativo: 2 semanas',
        'eCommerce/App: más de 1 mes según alcance'
      ]
    },
    {
      question: '¿Incluyen soporte?',
      answer: 'Sí, todos nuestros proyectos incluyen soporte post-entrega y planes de mantenimiento opcionales para garantizar el funcionamiento continuo de tu sitio.',
      icon: 'support_agent',
      isOpen: false
    },
    {
      question: '¿Trabajan remoto?',
      answer: 'Sí, colaboramos completamente de forma remota con clientes en toda Latinoamérica, utilizando herramientas modernas de comunicación y gestión de proyectos.',
      icon: 'public',
      isOpen: false
    }
  ];

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

  // Enlaces de contacto con información adicional

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}

