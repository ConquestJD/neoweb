import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactLink {
  name: string;
  url: string;
  icon: string;
  gradient: string;
}

@Component({
  selector: 'app-contact-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-links.component.html',
  styleUrl: './contact-links.component.css'
})
export class ContactLinksComponent {
  contactLinks: ContactLink[] = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61583086977279',
      icon: 'facebook',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/neoweb.agency',
      icon: 'instagram',
      gradient: 'from-pink-600 to-purple-600'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/51942820836',
      icon: 'whatsapp',
      gradient: 'from-green-600 to-green-400'
    }
  ];
}

