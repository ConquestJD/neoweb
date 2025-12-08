import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: 0, opacity: 0, transform: 'translateY(-8px)' }),
        animate('200ms ease-out', style({ height: '*', opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('180ms ease-in', style({ height: 0, opacity: 0, transform: 'translateY(-8px)' }))
      ])
    ])
  ]
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;
  isServicesDropdownOpen = false;

  // Lista de servicios para el menú desplegable
  services = [
    { name: 'Página Web', route: '/servicios/pagina-web', icon: 'language' },
    { name: 'Landing Page', route: '/servicios/landing-page', icon: 'rocket_launch' },
    { name: 'Tienda Virtual', route: '/servicios/tienda-virtual', icon: 'shopping_cart' },
    { name: 'Google Ads', route: '/servicios/google-ads', icon: 'ads_click' },
    { name: 'Marketing Digital', route: '/servicios/marketing-digital', icon: 'campaign' },
    { name: 'Rediseño de Páginas Web', route: '/servicios/rediseno-paginas-web', icon: 'refresh' },
    { name: 'Aplicaciones Móviles', route: '/servicios/aplicaciones-moviles', icon: 'phone_android' },
    { name: 'Consultoría SEO', route: '/servicios/consultoria-seo', icon: 'search' },
    { name: 'Digitalización de Procesos', route: '/servicios/digitalizacion-procesos', icon: 'auto_awesome' }
  ];

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeMenu();
    this.isServicesDropdownOpen = false;
  }

  toggleServicesDropdown() {
    this.isServicesDropdownOpen = !this.isServicesDropdownOpen;
  }

  closeServicesDropdown() {
    this.isServicesDropdownOpen = false;
  }
}

