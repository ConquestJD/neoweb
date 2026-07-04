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

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent implements OnInit, AfterViewInit, OnDestroy {
  service?: ServicioConfig;
  sectionsVisible: Record<string, boolean> = {};
  activeProcessIndex = 0;
  ctaMagnetX = 0;
  ctaMagnetY = 0;
  ctaMagnetActive = false;
  ctaVisible = false;

  private routeSub?: Subscription;
  private observer?: IntersectionObserver;
  private destroyed = false;

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
      const slug = params.get('slug');
      const service = getServicioBySlug(slug);

      if (!service) {
        void this.router.navigate(['/404']);
        return;
      }

      this.service = service;
      this.title.setTitle(service.pageTitle);
      this.activeProcessIndex = 0;
      this.sectionsVisible = {};
      this.ctaVisible = false;
      this.ctaMagnetX = 0;
      this.ctaMagnetY = 0;
      this.ctaMagnetActive = false;

      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.setupScrollAnimations(), 150);
      }
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.setupScrollAnimations(), 150);
    }
  }

  ngOnDestroy() {
    this.destroyed = true;
    this.routeSub?.unsubscribe();
    this.observer?.disconnect();
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
