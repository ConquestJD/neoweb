import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef,
  NgZone,
  OnDestroy,
  HostListener
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { getServicioBySlug, ServicioConfig } from './servicios.data';

/**
 * ============================================================
 * CONVENCIÓN DE IMÁGENES — reemplaza los archivos en estas rutas
 * (mismo slug del servicio, numeración empezando en 1)
 * ============================================================
 *  Hero:        heroImage en servicios.data.ts → /assets/services/*.jpg
 *  Planes:      /assets/services/planes/{slug}-{n}.jpg       n = índice del plan (1, 2, 3...)
 *  Proceso:     imágenes en processStepImages (servicio.component.ts)
 *  Full Code:   /assets/services/fullcode/{slug}.jpg         una sola imagen de fondo
 *
 * Si un archivo no existe, se usa /assets/services/placeholder.jpg como respaldo,
 * así el layout nunca se rompe mientras vas subiendo las imágenes reales.
 * ============================================================
 */

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent implements OnInit, AfterViewInit, OnDestroy {
  service?: ServicioConfig;
  showPage = true;
  sectionsVisible: Record<string, boolean> = {};
  activeProcessIndex = 0;
  ctaMagnetX = 0;
  ctaMagnetY = 0;
  ctaMagnetActive = false;
  ctaVisible = false;

  private routeSub?: Subscription;
  private observer?: IntersectionObserver;
  private destroyed = false;
  private isFirstServiceLoad = true;
  private readonly placeholder = '/assets/services/placeholder.jpg';

  private readonly processStepImages: Record<string, string[]> = {
    'pagina-web': [
      '/assets/home/proceso/discovery.jpg',
      '/assets/home/proceso/uxui.jpg',
      '/assets/home/proceso/desarrollo.jpg',
      '/assets/home/por que neoweb/velocidad.png',
      '/assets/home/proceso/lanzamiento.jpg'
    ],
    'tienda-virtual': [
      '/assets/home/proceso/discovery.jpg',
      '/assets/services/tienda online.jpg',
      '/assets/home/proceso/desarrollo.jpg',
      '/assets/portfolio/liceum-incripcion.png',
      '/assets/portfolio/gestion-financiera-omed-login.png'
    ],
    'marketing-digital': [
      '/assets/home/proceso/discovery.jpg',
      '/assets/services/marketing.jpg',
      '/assets/home/por que neoweb/diseño web.jpg',
      '/assets/home/por que neoweb/seo.png'
    ],
    'rediseno-paginas-web': [
      '/assets/home/proceso/discovery.jpg',
      '/assets/services/rediseño.jpg',
      '/assets/home/proceso/desarrollo.jpg',
      '/assets/home/por que neoweb/codigo real.jpg',
      '/assets/home/proceso/lanzamiento.jpg'
    ],
    'aplicaciones-moviles': [
      '/assets/home/proceso/uxui.jpg',
      '/assets/services/app movil.jpg',
      '/assets/home/proceso/desarrollo.jpg',
      '/assets/home/por que neoweb/velocidad.png',
      '/assets/home/proceso/lanzamiento.jpg'
    ],
    'digitalizacion-procesos': [
      '/assets/home/proceso/discovery.jpg',
      '/assets/services/software a medida.jpg',
      '/assets/home/proceso/desarrollo.jpg',
      '/assets/portfolio/gestion-financiera-omed-login.png',
      '/assets/home/por que neoweb/soporte.jpg'
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.loadService(params.get('slug'));
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.service) {
      setTimeout(() => this.setupScrollAnimations(), 150);
    }
  }

  ngOnDestroy() {
    this.destroyed = true;
    this.routeSub?.unsubscribe();
    this.observer?.disconnect();
  }

  private loadService(slug: string | null) {
    const service = getServicioBySlug(slug);

    if (!service) {
      void this.router.navigate(['/404']);
      return;
    }

    const shouldRemount = !this.isFirstServiceLoad;
    this.isFirstServiceLoad = false;

    if (shouldRemount && isPlatformBrowser(this.platformId)) {
      this.showPage = false;
      this.observer?.disconnect();
      window.scrollTo({ top: 0, behavior: 'auto' });
      this.cdr.detectChanges();
    }

    this.resetPageState(service);

    if (!shouldRemount) {
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.setupScrollAnimations(), 150);
      }
      return;
    }

    requestAnimationFrame(() => {
      if (this.destroyed) {
        return;
      }

      this.showPage = true;
      this.cdr.detectChanges();

      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.setupScrollAnimations(), 150);
      }
    });
  }

  private resetPageState(service: ServicioConfig) {
    this.service = service;
    this.title.setTitle(service.pageTitle);
    this.activeProcessIndex = 0;
    this.sectionsVisible = {};
    this.ctaVisible = false;
    this.ctaMagnetX = 0;
    this.ctaMagnetY = 0;
    this.ctaMagnetActive = false;
  }
  @HostListener('window:scroll')
  onScroll() {
    if (!isPlatformBrowser(this.platformId) || this.ctaVisible) {
      return;
    }

    const cta = document.getElementById('svc-cta');
    if (cta) {
      const rect = cta.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        this.ctaVisible = true;
        this.cdr.markForCheck();
      }
    }
  }

  setupScrollAnimations() {
    if (!isPlatformBrowser(this.platformId) || this.destroyed) {
      return;
    }

    this.observer?.disconnect();

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section-id');
          if (sectionId) {
            this.ngZone.run(() => {
              this.sectionsVisible[sectionId] = true;
              if (sectionId === 'cta') {
                this.ctaVisible = true;
              }
              this.cdr.markForCheck();
            });
          }
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('[data-section-id]').forEach(section => {
      this.observer?.observe(section);
    });
  }

  setActiveProcess(index: number) {
    this.activeProcessIndex = index;
  }

  getServiceHeroImage(): string {
    return this.service?.heroImage ?? '/assets/services/pagina web.jpg';
  }

  getServiceHeroBackground(): string {
    return `url("${encodeURI(this.getServiceHeroImage())}")`;
  }

  // ----- Helpers de imágenes por sección -----
  getPlanImage(slug: string, index: number): string {
    return `/assets/services/planes/${slug}-${index + 1}.jpg`;
  }

  getStepImage(index: number): string {
    const slug = this.service?.slug;
    const images = slug ? this.processStepImages[slug] : undefined;
    return images?.[index] ?? '/assets/home/proceso/discovery.jpg';
  }

  getStepBackground(index: number): string {
    return `url("${encodeURI(this.getStepImage(index))}")`;
  }

  getFullcodeImage(slug: string): string {
    return `/assets/services/fullcode/${slug}.jpg`;
  }

  isCompareBool(value: string | boolean): boolean {
    return typeof value === 'boolean';
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img && img.src.indexOf('placeholder.jpg') === -1) {
      img.src = this.placeholder;
    }
  }

  onCtaMouseMove(event: MouseEvent) {
    const wrap = event.currentTarget as HTMLElement;
    const rect = wrap.getBoundingClientRect();
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
    this.ctaMagnetX = 0;
    this.ctaMagnetY = 0;
    this.ctaMagnetActive = false;
  }
}