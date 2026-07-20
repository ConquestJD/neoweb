import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, NgZone, ElementRef, HostBinding } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { initFooterGsapAnimations } from './footer-gsap-animations';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class.gsap-enabled') gsapEnabled = false;

  currentYear = new Date().getFullYear();

  navLinks = [
    { index: '01', label: 'Inicio', route: '/inicio' },
    { index: '02', label: 'Portafolio', route: '/portafolio' },
    { index: '03', label: 'Nosotros', route: '/nosotros' },
    { index: '04', label: 'Contacto', route: '/contacto' }
  ];

  serviceLinks = [
    { label: 'Página Web', route: '/servicios/pagina-web' },
    { label: 'Tienda Online', route: '/servicios/tienda-virtual' },
    { label: 'Marketing Digital', route: '/servicios/marketing-digital' },
    { label: 'Rediseño Web', route: '/servicios/rediseno-paginas-web' },
    { label: 'Apps Móviles', route: '/servicios/aplicaciones-moviles' },
    { label: 'Software a medida', route: '/servicios/digitalizacion-procesos' }
  ];

  contactLinks = [
    { label: 'WhatsApp', url: 'https://wa.me/51942820836' },
    { label: 'Instagram', url: 'https://instagram.com/neoweb.agency' },
    { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61583086977279' },
    { label: 'contacto@neoweb.website', url: 'mailto:contacto@neoweb.website' }
  ];

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
      return;
    }

    this.gsapEnabled = true;
    this.ngZone.runOutsideAngular(() => {
      this.gsapCleanup = initFooterGsapAnimations(this.host.nativeElement);
    });
  }

  ngOnDestroy() {
    if (this.gsapCleanup) {
      this.gsapCleanup();
      this.gsapCleanup = null;
    }
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
