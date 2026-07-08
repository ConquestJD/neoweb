import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

type ContactFaq = {
  question: string;
  answer: string;
  details?: string[];
};

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements AfterViewInit, OnDestroy {
  private readonly whatsappNumber = '51942820836';

  form = {
    nombre: '',
    contacto: '',
    servicio: '',
    mensaje: ''
  };

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

  sectionVisible = {
    form: false,
    channels: false,
    schedule: false,
    faq: false
  };

  faqIntroDone = false;
  activeFaqIndex = -1;

  schedule = [
    { day: 'Lunes a Viernes', time: '9:00 AM – 8:00 PM', badge: 'Disponible', badgeClass: 'is-open' },
    { day: 'Sábados', time: '10:00 AM – 4:00 PM', badge: 'Horario reducido', badgeClass: 'is-limited' },
    { day: 'Domingos', time: 'Cerrado', badge: 'No disponible', badgeClass: 'is-closed' }
  ];

  faqs: ContactFaq[] = [
    {
      question: '¿Cuánto tarda un proyecto?',
      answer: 'Los tiempos varían según el tipo y alcance del proyecto:',
      details: [
        'Landing Page: 1 semana',
        'Sitio corporativo: 2 semanas',
        'eCommerce/App: más de 1 mes según alcance'
      ]
    },
    {
      question: '¿Incluye soporte?',
      answer: 'Sí, todos mis proyectos incluyen soporte post-entrega y planes de mantenimiento opcionales para garantizar el funcionamiento continuo de tu sitio.'
    },
    {
      question: '¿Trabajas remoto?',
      answer: 'Sí, trabajo completamente de forma remota con clientes en todo el Perú y Latinoamérica, usando herramientas modernas de comunicación y gestión de proyectos.'
    }
  ];

  private sectionObserver?: IntersectionObserver;
  private faqIntroTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const sectionId = entry.target.getAttribute('data-section');
        if (!sectionId || !(sectionId in this.sectionVisible)) {
          return;
        }

        this.sectionVisible[sectionId as keyof typeof this.sectionVisible] = true;

        if (sectionId === 'faq') {
          this.playFaqIntro();
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -48px 0px'
    });

    document.querySelectorAll('[data-section]').forEach((section) => {
      this.sectionObserver?.observe(section);
    });
  }

  ngOnDestroy() {
    this.sectionObserver?.disconnect();

    if (this.faqIntroTimeout) {
      clearTimeout(this.faqIntroTimeout);
    }
  }

  toggleFaq(index: number) {
    this.activeFaqIndex = this.activeFaqIndex === index ? -1 : index;
  }

  get formValido(): boolean {
    return this.form.nombre.trim().length > 1 && this.form.contacto.trim().length > 4;
  }

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

  private playFaqIntro() {
    if (this.faqIntroDone) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.faqIntroDone = true;
      return;
    }

    if (this.faqIntroTimeout) {
      clearTimeout(this.faqIntroTimeout);
    }

    this.faqIntroTimeout = setTimeout(() => {
      this.faqIntroDone = true;
      this.faqIntroTimeout = null;
    }, 900);
  }
}
