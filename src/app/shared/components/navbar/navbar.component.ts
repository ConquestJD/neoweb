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
import { trigger, transition, style } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import {
  initNavbarIntro,
  playMegamenuOpen,
  playMobileMenuOpen,
  playMobileSubmenuOpen,
  PanelAnimationHandle
} from './navbar-gsap-animations';

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
    // Enter/leave instant: GSAP maneja el enter; leave largo causaba carreras
    trigger('slideDown', [
      transition(':enter', [style({ opacity: 1, transform: 'none' })]),
      transition(':leave', [style({ opacity: 0 })])
    ]),
    trigger('megaFade', [
      transition(':enter', [style({ opacity: 1, transform: 'translate(-50%, 0)' })]),
      transition(':leave', [style({ opacity: 0, transform: 'translate(-50%, 0)' })])
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
      short: 'Una página o un sitio con menú',
      route: '/servicios/pagina-web',
      icon: 'language',
      image: '/assets/services/pagina web.jpg',
    },
    {
      name: 'Tienda Online',
      short: 'Empezar a vender, vender más o con equipo',
      route: '/servicios/tienda-virtual',
      icon: 'shopping_bag',
      image: '/assets/services/tienda online.jpg',
    },
    {
      name: 'Marketing Digital',
      short: 'Presencia, contenido o ads',
      route: '/servicios/marketing-digital',
      icon: 'campaign',
      image: '/assets/services/marketing.jpg',
    },
    {
      name: 'Rediseño Web',
      short: 'Cara nueva, otro camino o de nuevo',
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
  private activePanelAnim: PanelAnimationHandle | null = null;
  private animFrame: number | null = null;
  private panelGeneration = 0;

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
    this.teardownPanelMotion();
    if (this.gsapCleanup) {
      this.gsapCleanup();
      this.gsapCleanup = null;
    }
  }

  openServicesDropdown() {
    if (this.isServicesDropdownOpen) {
      return;
    }

    this.teardownPanelMotion();
    this.megamenuPreviewIndex = 0;
    this.isServicesDropdownOpen = true;
    this.cdr.detectChanges();

    this.playAfterPaint(() => {
      if (!this.isServicesDropdownOpen) {
        return null;
      }
      return playMegamenuOpen(this.host.nativeElement);
    });
  }

  closeServicesDropdown() {
    this.teardownPanelMotion();
    this.isServicesDropdownOpen = false;
    this.megamenuPreviewIndex = 0;
    this.cdr.detectChanges();
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
    if (this.isMenuOpen) {
      this.closeMenu();
      return;
    }

    this.teardownPanelMotion();
    this.isMenuOpen = true;
    this.cdr.detectChanges();
    this.playAfterPaint(() => {
      if (!this.isMenuOpen) {
        return null;
      }
      return playMobileMenuOpen(this.host.nativeElement);
    });
  }

  closeMenu() {
    this.teardownPanelMotion();
    this.isMenuOpen = false;
    this.isServicesDropdownOpen = false;
    this.megamenuPreviewIndex = 0;
    this.cdr.detectChanges();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeMenu();
  }

  toggleServicesDropdown() {
    if (this.isServicesDropdownOpen) {
      this.teardownPanelMotion();
      this.isServicesDropdownOpen = false;
      this.megamenuPreviewIndex = 0;
      this.cdr.detectChanges();
      return;
    }

    this.teardownPanelMotion();
    this.megamenuPreviewIndex = 0;
    this.isServicesDropdownOpen = true;
    this.cdr.detectChanges();

    this.playAfterPaint(() => {
      if (!this.isServicesDropdownOpen) {
        return null;
      }
      if (this.isMenuOpen) {
        return playMobileSubmenuOpen(this.host.nativeElement);
      }
      return playMegamenuOpen(this.host.nativeElement);
    });
  }

  private teardownPanelMotion() {
    this.panelGeneration += 1;

    if (this.animFrame !== null) {
      cancelAnimationFrame(this.animFrame);
      this.animFrame = null;
    }

    if (this.activePanelAnim) {
      this.activePanelAnim.kill();
      this.activePanelAnim = null;
    }
  }

  private playAfterPaint(factory: () => PanelAnimationHandle | null) {
    if (!this.gsapEnabled || this.prefersReducedMotion()) {
      return;
    }

    const generation = this.panelGeneration;

    // Doble rAF: espera a que *ngIf monte el DOM
    this.animFrame = requestAnimationFrame(() => {
      this.animFrame = requestAnimationFrame(() => {
        this.animFrame = null;

        if (generation !== this.panelGeneration) {
          return;
        }

        this.ngZone.runOutsideAngular(() => {
          if (generation !== this.panelGeneration) {
            return;
          }
          this.activePanelAnim?.kill();
          this.activePanelAnim = factory();
        });
      });
    });
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
