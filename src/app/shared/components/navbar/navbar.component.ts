import {
  Component,
  Input,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  NgZone,
  ElementRef,
  HostBinding,
  ChangeDetectorRef
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {
  initNavbarIntro,
  playMegamenuOpen,
  playMobileMenuOpen,
  playMobileSubmenuOpen
} from './navbar-gsap-animations';

type PanelTimeline = NonNullable<ReturnType<typeof playMegamenuOpen>>;

interface ServiceMenuItem {
  name: string;
  short: string;
  route: string;
  icon: string;
  image: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    // Enter lo maneja GSAP; leave se mantiene ligero
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 1, transform: 'none' })
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-8px)' }))
      ])
    ]),
    trigger('megaFade', [
      transition(':enter', [
        style({ opacity: 1, transform: 'translate(-50%, 0)' })
      ]),
      transition(':leave', [
        animate('160ms ease-in', style({ opacity: 0, transform: 'translate(-50%, -8px)' }))
      ])
    ])
  ]
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class.gsap-enabled') gsapEnabled = false;

  isMenuOpen = false;
  @Input() isScrolled = false;
  isServicesDropdownOpen = false;
  megamenuPreviewIndex = 0;

  services: ServiceMenuItem[] = [
    {
      name: 'Página Web',
      short: 'Sitios corporativos a medida',
      route: '/servicios/pagina-web',
      icon: 'language',
      image: '/assets/services/pagina web.jpg',
    },
    {
      name: 'Tienda Online',
      short: 'E-commerce listo para vender',
      route: '/servicios/tienda-virtual',
      icon: 'shopping_bag',
      image: '/assets/services/tienda online.jpg',
    },
    {
      name: 'Marketing Digital',
      short: 'Estrategia y contenido',
      route: '/servicios/marketing-digital',
      icon: 'campaign',
      image: '/assets/services/marketing.jpg',
    },
    {
      name: 'Rediseño Web',
      short: 'Renovamos tu sitio actual',
      route: '/servicios/rediseno-paginas-web',
      icon: 'autorenew',
      image: '/assets/services/rediseño.jpg',
    },
    {
      name: 'Apps Móviles',
      short: 'iOS y Android nativos',
      route: '/servicios/aplicaciones-moviles',
      icon: 'phone_iphone',
      image: '/assets/services/app movil.jpg',
    },
    {
      name: 'Software a medida',
      short: 'Sistemas y apps personalizados',
      route: '/servicios/digitalizacion-procesos',
      icon: 'auto_awesome',
      image: '/assets/services/software a medida.jpg',
    }
  ];

  private gsapCleanup: (() => void) | null = null;
  private activePanelTl: PanelTimeline | null = null;
  private animFrame: number | null = null;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone,
    private host: ElementRef<HTMLElement>,
    private cdr: ChangeDetectorRef
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
      this.gsapCleanup = initNavbarIntro(this.host.nativeElement);
    });
  }

  ngOnDestroy() {
    if (this.animFrame !== null) {
      cancelAnimationFrame(this.animFrame);
      this.animFrame = null;
    }
    this.activePanelTl?.kill();
    this.activePanelTl = null;
    if (this.gsapCleanup) {
      this.gsapCleanup();
      this.gsapCleanup = null;
    }
  }

  openServicesDropdown() {
    if (this.isServicesDropdownOpen) {
      return;
    }
    this.megamenuPreviewIndex = 0;
    this.isServicesDropdownOpen = true;
    this.cdr.detectChanges();
    this.playAfterPaint(() => playMegamenuOpen(this.host.nativeElement));
  }

  closeServicesDropdown() {
    this.isServicesDropdownOpen = false;
    this.megamenuPreviewIndex = 0;
  }

  setMegamenuPreview(index: number) {
    if (index === this.megamenuPreviewIndex) {
      return;
    }
    this.megamenuPreviewIndex = index;
  }

  megamenuBg(image: string): string {
    return `url("${encodeURI(image)}")`;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.cdr.detectChanges();
      this.playAfterPaint(() => playMobileMenuOpen(this.host.nativeElement));
    } else {
      this.isServicesDropdownOpen = false;
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isServicesDropdownOpen = false;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeMenu();
    this.isServicesDropdownOpen = false;
  }

  toggleServicesDropdown() {
    this.isServicesDropdownOpen = !this.isServicesDropdownOpen;
    if (this.isServicesDropdownOpen) {
      this.cdr.detectChanges();
      this.playAfterPaint(() => {
        if (this.isMenuOpen) {
          return playMobileSubmenuOpen(this.host.nativeElement);
        }
        return playMegamenuOpen(this.host.nativeElement);
      });
    }
  }

  private playAfterPaint(factory: () => PanelTimeline | null) {
    if (!this.gsapEnabled || this.prefersReducedMotion()) {
      return;
    }

    if (this.animFrame !== null) {
      cancelAnimationFrame(this.animFrame);
    }

    this.animFrame = requestAnimationFrame(() => {
      this.animFrame = null;
      this.ngZone.runOutsideAngular(() => {
        this.activePanelTl?.kill();
        this.activePanelTl = factory();
      });
    });
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
