import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tienda-virtual',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tienda-virtual.component.html',
  styleUrl: './tienda-virtual.component.css'
})
export class TiendaVirtualComponent implements OnInit, AfterViewInit {
  sectionsVisible: { [key: string]: string } = {};

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.cleanupWebGL();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.setupScrollAnimations();
      }, 100);
    }
  }

  cleanupWebGL() {
    const splineElements = document.querySelectorAll('spline-viewer');
    splineElements.forEach(element => {
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.ngZone.run(() => {
            const sectionId = entry.target.getAttribute('data-section-id');
            if (sectionId) {
              this.sectionsVisible[sectionId] = 'visible';
              this.cdr.markForCheck();
            }
          });
        }
      });
    }, observerOptions);
    
    const sections = document.querySelectorAll('[data-section-id]');
    sections.forEach(section => observer.observe(section));
  }

  features = [
    { icon: 'shopping_cart', title: 'Carrito de Compras', description: 'Sistema completo de carrito con persistencia' },
    { icon: 'payment', title: 'Pasarelas de Pago', description: 'Integración con múltiples métodos de pago' },
    { icon: 'inventory', title: 'Gestión de Inventario', description: 'Control automático de stock' },
    { icon: 'local_shipping', title: 'Gestión de Envíos', description: 'Cálculo automático de costos de envío' },
    { icon: 'analytics', title: 'Reportes de Ventas', description: 'Dashboard completo de métricas' },
    { icon: 'security', title: 'Seguridad Avanzada', description: 'Protección de datos y transacciones' }
  ];

  methodology = [
    {
      step: '01',
      title: 'Análisis de Productos y Mercado',
      description: 'Analizamos tu catálogo, competencia y estrategia de ventas para crear la mejor experiencia de compra'
    },
    {
      step: '02',
      title: 'Diseño de Experiencia de Compra',
      description: 'Diseñamos una experiencia de compra intuitiva que guía al cliente desde el catálogo hasta el checkout'
    },
    {
      step: '03',
      title: 'Desarrollo Full Code',
      description: 'Construimos tu tienda virtual desde cero con código optimizado, carrito inteligente y pasarelas de pago'
    },
    {
      step: '04',
      title: 'Integración de Pagos y Envíos',
      description: 'Conectamos métodos de pago seguros y sistemas de envío para una experiencia completa'
    },
    {
      step: '05',
      title: 'Panel Admin y Lanzamiento',
      description: 'Entregamos panel administrativo completo y lanzamos tu tienda lista para vender'
    }
  ];

  fullCodeBenefits = [
    {
      icon: 'code',
      title: 'Código Escalable',
      description: 'Desarrollado desde cero para manejar miles de productos y transacciones sin problemas de rendimiento.'
    },
    {
      icon: 'shopping_cart',
      title: 'Carrito Inteligente',
      description: 'Carrito de compras personalizado con persistencia, cálculos automáticos y experiencia fluida.'
    },
    {
      icon: 'payment',
      title: 'Integraciones Flexibles',
      description: 'Conectamos con cualquier pasarela de pago, sistema de envío o ERP sin limitaciones.'
    },
    {
      icon: 'speed',
      title: 'Rendimiento Optimizado',
      description: 'Código optimizado que carga rápido incluso con cientos de productos. Experiencia de compra fluida.'
    },
    {
      icon: 'security',
      title: 'Seguridad de Transacciones',
      description: 'Código personalizado con validaciones robustas y protección contra fraudes en cada transacción.'
    },
    {
      icon: 'dashboard',
      title: 'Panel Admin Personalizado',
      description: 'Dashboard administrativo diseñado específicamente para tu negocio. Gestión intuitiva de productos y pedidos.'
    }
  ];

  plans = [
    {
      name: 'START',
      price: 'S/ 2,500',
      icon: 'star',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Hasta 50 productos',
        'Secciones: Inicio, Tienda, Categorías simples, Producto, Carrito, Checkout, Contacto',
        'Métodos de pago básicos',
        'Diseño moderno',
        'Inventario básico',
        'SEO simple'
      ]
    },
    {
      name: 'PRO',
      price: 'S/ 3,500',
      icon: 'rocket_launch',
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      features: [
        'Hasta 300 productos',
        'Secciones: Inicio, Tienda avanzada, Categorías profesionales, Producto completo, Cuenta usuario, Políticas, Blog',
        'Variantes y filtros',
        'Cupones y reportes',
        'SEO optimizado',
        'Integración con WhatsApp'
      ]
    },
    {
      name: 'PREMIUM',
      price: 'S/ 5,000 - S/ 8,000',
      icon: 'diamond',
      color: 'from-orange-500 to-red-500',
      features: [
        'Productos ilimitados',
        'Panel administrativo personalizado',
        'Diseño UI/UX a medida',
        'Automatizaciones (correos, estados, alertas)',
        'Integraciones API externas',
        'SEO completo',
        'Optimización de rendimiento'
      ]
    }
  ];
}

