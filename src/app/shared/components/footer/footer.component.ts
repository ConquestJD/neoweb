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

  socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/profile.php?id=61583086977279', 
      icon: 'facebook'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/neoweb.agency', 
      icon: 'instagram'
    },
    { 
      name: 'WhatsApp', 
      url: 'https://wa.me/51942820836', 
      icon: 'whatsapp'
    }
  ];

  quickLinks = [
    { name: 'Inicio', route: '/inicio' },
    { name: 'Servicios', route: '/servicios' },
    { name: 'Portafolio', route: '/portafolio' },
    { name: 'Nosotros', route: '/nosotros' }
  ];

  services = [
    'Landing Page',
    'Sitio Web Profesional',
    'E-commerce',
    'Full Digital'
  ];
}

