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
      image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhZ2luYSUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Tienda Virtual',
      short: 'E-commerce listo para vender',
      route: '/servicios/tienda-virtual',
      icon: 'shopping_bag',
      image: 'https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww',

    },
    {
      name: 'Google Ads',
      short: 'Campañas medibles en Google',
      route: '/servicios/google-ads',
      icon: 'ads_click',
      image: 'https://plus.unsplash.com/premium_photo-1685208166965-d04149118ca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwYWRzfGVufDB8fDB8fHww',

    },
    {
      name: 'Marketing Digital',
      short: 'Estrategia y contenido',
      route: '/servicios/marketing-digital',
      icon: 'campaign',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hcmtldGluZyUyMGRpZ2l0YWx8ZW58MHx8MHx8fDA%3D',

    },
    {
      name: 'Rediseño Web',
      short: 'Renovamos tu sitio actual',
      route: '/servicios/rediseno-paginas-web',
      icon: 'autorenew',
      image: 'https://images.unsplash.com/photo-1657812159077-90649115008c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVkaXNlJUMzJUIxbyUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D',

    },
    {
      name: 'Apps Móviles',
      short: 'iOS y Android nativos',
      route: '/servicios/aplicaciones-moviles',
      icon: 'phone_iphone',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwcHMlMjBtb3ZpbGVzJTIwZGVzYXJyb2xsb3xlbnwwfHwwfHx8MA%3D%3D',

    },
    {
      name: 'Consultoría SEO',
      short: 'Visibilidad en buscadores',
      route: '/servicios/consultoria-seo',
      icon: 'travel_explore',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      name: 'Digitalizació  n',
      short: 'Procesos automatizados',
      route: '/servicios/digitalizacion-procesos',
      icon: 'auto_awesome',
      image: 'https://plus.unsplash.com/premium_photo-1661443822504-0e382dbc1e48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRpZ2l0YWxpemFjaW9uJTIwZGUlMjBwcm9jZXNvc3xlbnwwfHwwfHx8MA%3D%3D',

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
