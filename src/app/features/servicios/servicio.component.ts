import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef,
  NgZone,
  OnDestroy,
  HostListener,
  HostBinding,
  ElementRef,
  ViewChild
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { getServicioBySlug, ServicioConfig } from './servicios.data';
import { initServicioGsapAnimations } from './servicio-gsap-animations';

/**
 * ============================================================
 * CONVENCIÓN DE IMÁGENES — reemplaza los archivos en estas rutas
 * (mismo slug del servicio, numeración empezando en 1)
 * ============================================================
 *  Hero:        heroImage en servicios.data.ts → /assets/services/*.webp
 *  Planes:      /assets/services/planes/{slug}-{n}.webp       n = índice del plan (1, 2, 3...)
 *  Proceso:     imágenes en processStepImages (servicio.component.ts)
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
  @HostBinding('class.gsap-enabled') gsapEnabled = false;
  @ViewChild('processStory') processStory?: ElementRef<HTMLElement>;

  service?: ServicioConfig;
  showPage = true;
  sectionsVisible: Record<string, boolean> = {};
  activeProcessIndex = 0;
  processCopyNonce = 0;
  ctaMagnetX = 0;
  ctaMagnetY = 0;
  ctaMagnetActive = false;
  ctaVisible = false;

  private routeSub?: Subscription;
  private observer?: IntersectionObserver;
  private destroyed = false;
  private isFirstServiceLoad = true;
  private gsapCleanup: (() => void) | null = null;
  private processScrollUnbind: (() => void) | null = null;
  private ctaMagnetRect: DOMRect | null = null;
  private storyRangeByEl = new WeakMap<HTMLElement, number>();
  private storyScrollRaf = 0;

  private readonly processStepImages: Record<string, string[]> = {
    'pagina-web': [
      '/assets/home/proceso/discovery.webp',
      '/assets/home/proceso/uxui.webp',
      '/assets/home/proceso/desarrollo.webp',
      '/assets/home/por que neoweb/velocidad.webp',
      '/assets/home/proceso/lanzamiento.webp'
    ],
    'tienda-virtual': [
      '/assets/home/proceso/discovery.webp',
      '/assets/services/tienda online.webp',
      '/assets/home/proceso/desarrollo.webp',
      '/assets/portfolio/liceum-incripcion.webp',
      '/assets/portfolio/gestion-financiera-omed-login.webp'
    ],
    'marketing-digital': [
      '/assets/home/proceso/discovery.webp',
      '/assets/services/marketing.webp',
      '/assets/home/por que neoweb/diseño web.webp',
      '/assets/home/por que neoweb/seo.webp'
    ],
    'rediseno-paginas-web': [
      '/assets/home/proceso/discovery.webp',
      '/assets/services/rediseño.webp',
      '/assets/home/proceso/desarrollo.webp',
      '/assets/home/por que neoweb/codigo real.webp',
      '/assets/home/proceso/lanzamiento.webp'
    ],
    'aplicaciones-moviles': [
      '/assets/home/proceso/uxui.webp',
      '/assets/services/app movil.webp',
      '/assets/home/proceso/desarrollo.webp',
      '/assets/home/por que neoweb/velocidad.webp',
      '/assets/home/proceso/lanzamiento.webp'
    ],
    'digitalizacion-procesos': [
      '/assets/home/proceso/discovery.webp',
      '/assets/services/software a medida.webp',
      '/assets/home/proceso/desarrollo.webp',
      '/assets/portfolio/gestion-financiera-omed-login.webp',
      '/assets/home/por que neoweb/soporte.webp'
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private host: ElementRef<HTMLElement>
  ) {}

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.loadService(params.get('slug'));
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.service) {
      if (!this.prefersReducedMotion()) {
        this.gsapEnabled = true;
      }
      setTimeout(() => this.setupScrollAnimations(), 150);
    }
  }

  ngOnDestroy() {
    this.destroyed = true;
    this.routeSub?.unsubscribe();
    this.teardownMotion();
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private teardownMotion() {
    this.observer?.disconnect();
    this.observer = undefined;
    this.unbindProcessStoryScroll();
    if (this.gsapCleanup) {
      this.gsapCleanup();
      this.gsapCleanup = null;
    }
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
      this.teardownMotion();
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
        if (!this.prefersReducedMotion()) {
          this.gsapEnabled = true;
        }
        setTimeout(() => this.setupScrollAnimations(), 150);
      }
    });
  }

  private resetPageState(service: ServicioConfig) {
    this.service = service;
    this.title.setTitle(service.pageTitle);
    this.meta.updateTag({ name: 'description', content: service.metaDescription });
    this.meta.updateTag({ property: 'og:title', content: service.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: service.metaDescription });
    this.activeProcessIndex = 0;
    this.processCopyNonce = 0;
    this.sectionsVisible = {};
    this.ctaVisible = false;
    this.ctaMagnetX = 0;
    this.ctaMagnetY = 0;
    this.ctaMagnetActive = false;
  }

  @HostListener('window:resize')
  onResize() {
    if (!isPlatformBrowser(this.platformId) || this.destroyed) {
      return;
    }
    this.storyRangeByEl = new WeakMap();
    this.ctaMagnetRect = null;
    this.bindProcessStoryScroll();
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!isPlatformBrowser(this.platformId) || this.ctaVisible || this.gsapEnabled) {
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
    if (!isPlatformBrowser(this.platformId) || this.destroyed || !this.service) {
      return;
    }

    this.teardownMotion();

    if (this.prefersReducedMotion()) {
      this.gsapEnabled = false;
      this.revealAllSectionsInstant();
      return;
    }

    this.gsapEnabled = true;

    this.ngZone.runOutsideAngular(() => {
      this.gsapCleanup = initServicioGsapAnimations(this.host.nativeElement, {
        onSectionVisible: (sectionId) => {
          this.ngZone.run(() => {
            this.sectionsVisible[sectionId] = true;
            if (sectionId === 'cta') {
              this.ctaVisible = true;
            }
            this.cdr.markForCheck();
          });
        },
        onCtaComplete: () => {
          this.ngZone.run(() => {
            this.ctaVisible = true;
            this.cdr.markForCheck();
          });
        }
      });
    });

    this.bindProcessStoryScroll();
  }

  private revealAllSectionsInstant() {
    ['plans', 'includes', 'process', 'cta'].forEach((id) => {
      this.sectionsVisible[id] = true;
    });
    this.ctaVisible = true;
    this.cdr.markForCheck();
    this.bindProcessStoryScroll();
  }

  private isCompactProcess(): boolean {
    return window.matchMedia('(max-width: 768px)').matches;
  }

  private bindProcessStoryScroll() {
    this.unbindProcessStoryScroll();
    if (!isPlatformBrowser(this.platformId) || this.destroyed || !this.isCompactProcess()) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      const onScroll = () => {
        if (this.storyScrollRaf) {
          return;
        }
        this.storyScrollRaf = requestAnimationFrame(() => {
          this.storyScrollRaf = 0;
          this.syncProcessStoryIndex();
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      this.processScrollUnbind = () => {
        window.removeEventListener('scroll', onScroll);
        if (this.storyScrollRaf) {
          cancelAnimationFrame(this.storyScrollRaf);
          this.storyScrollRaf = 0;
        }
      };
      this.syncProcessStoryIndex();
    });
  }

  private unbindProcessStoryScroll() {
    this.processScrollUnbind?.();
    this.processScrollUnbind = null;
  }

  private syncProcessStoryIndex() {
    const el = this.processStory?.nativeElement;
    const steps = this.service?.methodology.length ?? 0;
    if (!el || steps < 1) {
      return;
    }

    const spacer = el.querySelector('.pin-spacer') as HTMLElement | null;
    const track = spacer ?? el;
    let range = this.storyRangeByEl.get(track);
    if (range == null) {
      range = track.offsetHeight - window.innerHeight;
      this.storyRangeByEl.set(track, range);
    }
    if (range <= 0) {
      return;
    }

    const t = Math.min(1, Math.max(0, -track.getBoundingClientRect().top / range));
    const raw = t * steps;
    const next = Math.min(steps - 1, Math.floor(raw + 1e-4));
    const stepProgress = Math.min(1, Math.max(0, raw - next));

    el.style.setProperty('--story-step-p', stepProgress.toFixed(4));
    el.style.setProperty('--story-hue', String(24 + next * 16));

    if (next === this.activeProcessIndex) {
      return;
    }

    this.ngZone.run(() => {
      this.activeProcessIndex = next;
      this.processCopyNonce += 1;
      this.cdr.markForCheck();
    });
  }

  setActiveProcess(index: number) {
    this.activeProcessIndex = index;
  }

  getServiceHeroImage(): string {
    return this.service?.heroImage ?? '/assets/services/pagina web.webp';
  }

  getServiceHeroBackground(): string {
    return `url("${encodeURI(this.getServiceHeroImage())}")`;
  }

  // ----- Helpers de imágenes por sección -----
  getPlanImage(slug: string, index: number): string {
    return `/assets/services/planes/${slug}-${index + 1}.webp`;
  }

  getStepImage(index: number): string {
    const slug = this.service?.slug;
    const images = slug ? this.processStepImages[slug] : undefined;
    return images?.[index] ?? '/assets/home/proceso/discovery.webp';
  }

  getStepBackground(index: number): string {
    return `url("${encodeURI(this.getStepImage(index))}")`;
  }

  isCompareBool(value: string | boolean): boolean {
    return typeof value === 'boolean';
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