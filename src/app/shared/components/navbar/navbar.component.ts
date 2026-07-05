import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

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
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-8px)' }),
        animate('200ms cubic-bezier(0.22, 1, 0.36, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-8px)' }))
      ])
    ]),
    // Trigger especial para el megamenú: incluye el translateX(-50%)
    // que centra el panel para que la animación NO sobreescriba el centrado.
    trigger('megaFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translate(-50%, -8px)' }),
        animate('220ms cubic-bezier(0.22, 1, 0.36, 1)', style({ opacity: 1, transform: 'translate(-50%, 0)' }))
      ]),
      transition(':leave', [
        animate('160ms ease-in', style({ opacity: 0, transform: 'translate(-50%, -8px)' }))
      ])
    ])
  ]
})
export class NavbarComponent {
  isMenuOpen = false;
  @Input() isScrolled = false;
  isServicesDropdownOpen = false;

  // Servicios con imágenes locales
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

  constructor(private router: Router) {}

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
