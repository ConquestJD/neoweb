import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
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
}
