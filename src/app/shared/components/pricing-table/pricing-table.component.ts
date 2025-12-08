import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  icon: string;
}

@Component({
  selector: 'app-pricing-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pricing-table.component.html',
  styleUrl: './pricing-table.component.css'
})
export class PricingTableComponent {
  plans: PricingPlan[] = [
    {
      name: 'Landing Page',
      price: 'S/600',
      description: 'Ideal para presentar un producto o servicio',
      icon: 'rocket_launch',
      features: [
        'Diseño moderno y responsive',
        'Sección hero impactante',
        'Formulario de contacto',
        'Integración con redes sociales',
        'SEO básico',
        'Hosting por 1 año'
      ]
    },
    {
      name: 'Sitio Web Profesional',
      price: 'S/1,200',
      description: 'Para negocios que necesitan presencia digital completa',
      icon: 'business',
      recommended: true,
      features: [
        'Hasta 5 páginas personalizadas',
        'Diseño único y profesional',
        'Blog integrado',
        'SEO avanzado',
        'Formularios múltiples',
        'Hosting y dominio por 1 año',
        'Soporte técnico 3 meses',
      ]
    },
    {
      name: 'E-commerce',
      price: 'S/2,500',
      description: 'Tienda online completa para vender tus productos',
      icon: 'shopping_cart',
      features: [
        'Catálogo de 50 productos',
        'Carrito de compras',
        'Pasarela de pagos integrada',
        'Gestión de inventario',
        'Panel de administración avanzado',
        'SEO para productos',
        'Hosting y dominio por 1 año',
        'Soporte técnico 6 meses'
      ]
    },
    {
      name: 'Full Digital',
      price: 'Personalizado',
      description: 'Solución digital completa para tu negocio',
      icon: 'auto_awesome',
      features: [
        'Todo lo anterior incluido',
        'Aplicación web progresiva (PWA)',
        'Sistema de membresías',
        'Integración con CRM',
        'Dashboard analítico avanzado',
        'Optimización de conversión',
        'Hosting premium por 1 año',
        'Soporte técnico 12 meses',
        'Actualizaciones trimestrales'
      ]
    }
  ];
}

