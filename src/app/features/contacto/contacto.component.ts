import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit, OnDestroy, AfterViewInit {
  // Número de WhatsApp de destino (sin + ni espacios)
  private readonly whatsappNumber = '51942820836';

  // Modelo del formulario de contacto
  form = {
    nombre: '',
    contacto: '',
    servicio: '',
    mensaje: ''
  };

  // Servicios disponibles para el selector
  servicios = [
    'Página web',
    'Landing page',
    'Tienda online (e-commerce)',
    'Rediseño de web',
    'Aplicación móvil',
    'Software a medida',
    'Marketing digital',
    'Otro'
  ];

  // Estados de visibilidad para animaciones de scroll
  sectionsVisible: { [key: string]: string } = {
    'contact-form': 'visible',
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
      question: '¿Incluye soporte?',
      answer: 'Sí, todos mis proyectos incluyen soporte post-entrega y planes de mantenimiento opcionales para garantizar el funcionamiento continuo de tu sitio.',
      icon: 'support_agent',
      isOpen: false
    },
    {
      question: '¿Trabajas remoto?',
      answer: 'Sí, trabajo completamente de forma remota con clientes en todo el Perú y Latinoamérica, usando herramientas modernas de comunicación y gestión de proyectos.',
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

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  // Validación mínima: nombre + algún dato de contacto
  get formValido(): boolean {
    return this.form.nombre.trim().length > 1 && this.form.contacto.trim().length > 4;
  }

  // Arma el mensaje y abre WhatsApp con el texto pre-rellenado
  enviarPorWhatsApp() {
    if (!this.formValido) {
      return;
    }

    const lineas = [
      `Hola, soy ${this.form.nombre.trim()}.`,
      this.form.servicio ? `Me interesa: ${this.form.servicio}.` : '',
      this.form.mensaje.trim() ? `Detalle: ${this.form.mensaje.trim()}` : '',
      `Mi contacto: ${this.form.contacto.trim()}`
    ].filter(Boolean);

    const texto = encodeURIComponent(lineas.join('\n'));
    const url = `https://wa.me/${this.whatsappNumber}?text=${texto}`;

    if (isPlatformBrowser(this.platformId)) {
      window.open(url, '_blank');
    }
  }
}

