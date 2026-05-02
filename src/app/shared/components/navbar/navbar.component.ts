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

  // Servicios con fotos reales curadas (Unsplash, tono claro/coherente con la marca)
  services: ServiceMenuItem[] = [
    {
      name: 'Página Web',
      short: 'Sitios corporativos a medida',
      route: '/servicios/pagina-web',
      icon: 'language',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Landing Page',
      short: 'Páginas de alta conversión',
      route: '/servicios/landing-page',
      icon: 'rocket_launch',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Tienda Virtual',
      short: 'E-commerce listo para vender',
      route: '/servicios/tienda-virtual',
      icon: 'shopping_bag',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Google Ads',
      short: 'Campañas medibles en Google',
      route: '/servicios/google-ads',
      icon: 'ads_click',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Marketing Digital',
      short: 'Estrategia y contenido',
      route: '/servicios/marketing-digital',
      icon: 'campaign',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Rediseño Web',
      short: 'Renovamos tu sitio actual',
      route: '/servicios/rediseno-paginas-web',
      icon: 'autorenew',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Apps Móviles',
      short: 'iOS y Android nativos',
      route: '/servicios/aplicaciones-moviles',
      icon: 'phone_iphone',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Consultoría SEO',
      short: 'Visibilidad en buscadores',
      route: '/servicios/consultoria-seo',
      icon: 'travel_explore',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Digitalización',
      short: 'Procesos automatizados',
      route: '/servicios/digitalizacion-procesos',
      icon: 'auto_awesome',
      image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=80'
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
