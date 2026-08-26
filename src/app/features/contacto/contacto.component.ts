import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, NgZone, ElementRef, HostBinding } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { initContactoGsapAnimations } from './contacto-gsap-animations';

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
  @HostBinding('class.gsap-enabled') gsapEnabled = false;

  private readonly whatsappNumber = '51942820836';

  form = {
    nombre: '',
    contacto: '',
    servicio: '',
    mensaje: ''
  };

  servicios = [
    'Página web (landing o sitio)',
    'Tienda online',
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
        'Landing o Actualiza: 1 semana',
        'Sitio, Sitio Pro, Evoluciona o Transforma: 1 a 3 semanas',
        'Tienda online: más de 1 mes según alcance',
        'App Lanzamiento: 3 a 4 semanas',
        'App Crecimiento o Escala: 2 a 3 meses'
      ]
    },
    {
      question: '¿Qué diferencia hay entre los planes de páginas web?',
      answer: 'Cada uno te entrega una web distinta. No es “la misma un poco más grande”:',
      details: [
        'Landing (S/ 700): una sola página. Quien abre el link te escribe. Sirve para un anuncio o WhatsApp.',
        'Sitio (S/ 1,200): 5 páginas con menú (Inicio, Nosotros, Servicios, Preguntas, Contacto).',
        'Sitio Pro (S/ 2,000): el Sitio más hasta 4 páginas extra (un servicio, el equipo, una sede…) y ves cuánta gente entra.'
      ]
    },
    {
      question: '¿Qué diferencia hay entre los planes de rediseño web?',
      answer: 'Cada uno hace un trabajo distinto con la web que ya tienes. Si no tienes web, el servicio es Páginas web:',
      details: [
        'Actualiza (S/ 700): misma web, cara nueva. Conservas páginas y textos.',
        'Evoluciona (S/ 1,200): eso, y además cambio qué ven primero para que te escriban.',
        'Transforma (S/ 2,000): la armo de nuevo, paso textos y fotos, y conservo tu dirección.'
      ]
    },
    {
      question: '¿Qué diferencia hay entre los planes de marketing?',
      answer: 'Cada plan hace un trabajo distinto. No es la misma gestión con más publicaciones:',
      details: [
        'Start (S/ 600/mes): presencia en Facebook e Instagram. No incluye anuncios.',
        'Pro (S/ 1,200/mes): contenido con objetivo de consultas o visitas a tu web. Sin pauta.',
        'Premium (S/ 1,800/mes): lo anterior más gestión de Meta Ads. La pauta la inviertes tú.'
      ]
    },
    {
      question: '¿Qué diferencia hay entre los planes de tienda online?',
      answer: 'Cada uno hace un trabajo distinto. No es “más productos”:',
      details: [
        'Emprende (S/ 2,000): el cliente paga y tú ves el pedido. Productos simples, sin talla ni color.',
        'Crece (S/ 3,000): talla o color, cupones, aviso si dejan la compra, y lista para anuncios de Facebook e Instagram.',
        'Escala (desde S/ 4,500): un empleado también ve pedidos, o cada compra se copia a un programa que ya usas. Se cotiza.'
      ]
    },
    {
      question: '¿Qué diferencia hay entre los planes de apps móviles?',
      answer: 'Cada uno hace un trabajo distinto. No es “más pantallas”:',
      details: [
        'Lanzamiento (S/ 3,000): sin cuentas, solo Android. Ven lo que ofreces y te escriben por WhatsApp.',
        'Crecimiento (S/ 5,500): se registran y les llega un aviso. Solo Android.',
        'Escala (desde S/ 8,000): una extra cotizada: iPhone, cobrar, un empleado, o copiar datos a otro programa.'
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
  private gsapCleanup: (() => void) | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone,
    private host: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.prefersReducedMotion()) {
      this.revealAllInstant();
      return;
    }

    this.gsapEnabled = true;
    this.ngZone.runOutsideAngular(() => {
      this.gsapCleanup = initContactoGsapAnimations(this.host.nativeElement, {
        onFormComplete: () => this.ngZone.run(() => {
          this.sectionVisible.form = true;
        }),
        onChannelsComplete: () => this.ngZone.run(() => {
          this.sectionVisible.channels = true;
        }),
        onScheduleComplete: () => this.ngZone.run(() => {
          this.sectionVisible.schedule = true;
        }),
        onFaqComplete: () => this.ngZone.run(() => {
          this.sectionVisible.faq = true;
          this.faqIntroDone = true;
        })
      });
    });
  }

  ngOnDestroy() {
    this.sectionObserver?.disconnect();

    if (this.gsapCleanup) {
      this.gsapCleanup();
      this.gsapCleanup = null;
    }

    if (this.faqIntroTimeout) {
      clearTimeout(this.faqIntroTimeout);
    }
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private revealAllInstant() {
    this.sectionVisible.form = true;
    this.sectionVisible.channels = true;
    this.sectionVisible.schedule = true;
    this.sectionVisible.faq = true;
    this.faqIntroDone = true;
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
}
