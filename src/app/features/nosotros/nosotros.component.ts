import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, NgZone, ElementRef, HostBinding } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { initNosotrosGsapAnimations } from './nosotros-gsap-animations';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class.gsap-enabled') gsapEnabled = false;

  sectionVisible = {
    historia: false,
    purpose: false,
    valores: false,
    tech: false
  };

  ctaVisible = false;
  ctaMagnetX = 0;
  ctaMagnetY = 0;
  ctaMagnetActive = false;
  private ctaMagnetRect: DOMRect | null = null;

  stats = [
    { value: '2025', label: 'Inicio del proyecto' },
    { value: '6', label: 'Proyectos entregados' }
  ];

  missionVision = [
    {
      title: 'Misión',
      description: 'Darle a cada negocio una presencia digital profesional, rápida y clara, con código a medida y un trato cercano que entienda sus objetivos reales.',
      points: ['Desarrollo accesible y a medida', 'Enfoque en conversión']
    },
    {
      title: 'Visión',
      description: 'Convertirme en el desarrollador de confianza de pymes y emprendedores que buscan resultados medibles y un sitio que de verdad trabaje por su negocio.',
      points: ['Relaciones a largo plazo', 'Resultados reales']
    }
  ];

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

  technologies = [
    { name: 'Angular', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg', icon: 'code' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', icon: 'code' },
    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', icon: 'code' },
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', icon: 'code' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', icon: 'code' },
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', icon: 'code' },
    { name: 'FastAPI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', icon: 'code' },
    { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', icon: 'code' },
    { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', icon: 'code' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', icon: 'code' },
    { name: 'TailwindCSS', image: 'https://api.iconify.design/devicon:tailwindcss.svg?color=%2306b6d4', icon: 'code' },
    { name: 'Angular Material', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg', icon: 'code' },
    { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', icon: 'code' },
    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', icon: 'code' },
    { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', icon: 'code' }
  ];

  private sectionObserver?: IntersectionObserver;
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
      this.gsapCleanup = initNosotrosGsapAnimations(this.host.nativeElement, {
        onHistoriaComplete: () => this.ngZone.run(() => {
          this.sectionVisible.historia = true;
        }),
        onPurposeComplete: () => this.ngZone.run(() => {
          this.sectionVisible.purpose = true;
        }),
        onValoresComplete: () => this.ngZone.run(() => {
          this.sectionVisible.valores = true;
        }),
        onTechComplete: () => this.ngZone.run(() => {
          this.sectionVisible.tech = true;
        }),
        onCtaComplete: () => this.ngZone.run(() => {
          this.ctaVisible = true;
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
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private revealAllInstant() {
    this.sectionVisible.historia = true;
    this.sectionVisible.purpose = true;
    this.sectionVisible.valores = true;
    this.sectionVisible.tech = true;
    this.ctaVisible = true;
  }

  onCtaMouseMove(event: MouseEvent) {
    const wrap = event.currentTarget as HTMLElement;
    if (!this.ctaMagnetRect) {
      this.ctaMagnetRect = wrap.getBoundingClientRect();
    }
    const rect = this.ctaMagnetRect;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const maxOffset = window.innerWidth <= 768 ? 12 : 24;
    const deltaX = (event.clientX - centerX) * 0.18;
    const deltaY = (event.clientY - centerY) * 0.18;

    this.ctaMagnetX = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
    this.ctaMagnetY = Math.max(-maxOffset, Math.min(maxOffset, deltaY));
    this.ctaMagnetActive = true;
  }

  onCtaMouseLeave() {
    this.ctaMagnetRect = null;
    this.ctaMagnetX = 0;
    this.ctaMagnetY = 0;
    this.ctaMagnetActive = false;
  }
}
