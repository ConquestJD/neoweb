import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PricingTableComponent } from '../../shared/components/pricing-table/pricing-table.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule, PricingTableComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
  
})
export class ServiciosComponent implements OnInit, OnDestroy, AfterViewInit {
  // Texto rotatorio para el hero
  businessTypes = [
    { text: 'Restaurante', color: 'text-orange-400' },
    { text: 'Clínica', color: 'text-green-400' },
    { text: 'Gimnasio', color: 'text-red-400' },
    { text: 'Cafetería', color: 'text-yellow-400' },
    { text: 'Consultorio', color: 'text-blue-400' },
  ];
  
  currentBusinessIndex = 0;
  currentBusiness = this.businessTypes[0];
  private rotationInterval: any;
  
  // Visibilidad para animaciones de scroll - iniciar ocultos
  servicesVisible: { [key: number]: string } = {};
  pricingVisible = '';
  sectionTitleVisible = '';
  ctaVisible = '';
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}
  
  ngOnInit() {
    // Iniciar rotación del texto
    if (isPlatformBrowser(this.platformId)) {
      this.startTextRotation();
      this.cleanupWebGL();
    }
  }
  
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Delay para asegurar que el DOM esté listo
      setTimeout(() => {
        this.setupScrollAnimations();
      }, 100);
    }
  }
  
  ngOnDestroy() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }
  }

  cleanupWebGL() {
    // Limpiar elementos Spline que puedan estar causando errores WebGL
    const splineElements = document.querySelectorAll('spline-viewer');
    splineElements.forEach(element => {
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
    
    // Limpiar canvas WebGL huérfanos
    const canvases = document.querySelectorAll('canvas');
    canvases.forEach(canvas => {
      if (canvas.getContext('webgl') || canvas.getContext('webgl2')) {
        const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
        if (gl) {
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        }
      }
    });
  }
  
  startTextRotation() {
    // Usar NgZone para asegurar que Angular detecte los cambios
    this.ngZone.runOutsideAngular(() => {
      this.rotationInterval = setInterval(() => {
        this.ngZone.run(() => {
          // Agregar clase de salida
          const textElement = document.querySelector('.rotating-text');
          if (textElement) {
            textElement.classList.add('exiting');
            
            // Cambiar el texto después de la animación de salida
            setTimeout(() => {
              this.currentBusinessIndex = (this.currentBusinessIndex + 1) % this.businessTypes.length;
              this.currentBusiness = this.businessTypes[this.currentBusinessIndex];
              this.cdr.markForCheck();
              
              // Quitar clase de salida y agregar de entrada
              textElement.classList.remove('exiting');
              textElement.classList.add('entering');
              
              // Quitar clase de entrada después de la animación
              setTimeout(() => {
                textElement.classList.remove('entering');
              }, 800);
            }, 400);
          } else {
            // Fallback si no se encuentra el elemento
            this.currentBusinessIndex = (this.currentBusinessIndex + 1) % this.businessTypes.length;
            this.currentBusiness = this.businessTypes[this.currentBusinessIndex];
            this.cdr.markForCheck();
          }
        });
      }, 2000); // Cambiar cada 2 segundos
    });
  }
  
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.ngZone.run(() => {
            // Servicios individuales
            const index = entry.target.getAttribute('data-service-index');
            if (index !== null) {
              this.servicesVisible[parseInt(index)] = 'visible';
              this.cdr.markForCheck();
            }
            
            // Sección de precios
            if (entry.target.id === 'pricing-section') {
              this.pricingVisible = 'visible';
              this.cdr.markForCheck();
            }
            
            // Título de sección "Cómo te ayudamos"
            if (entry.target.id === 'section-title') {
              this.sectionTitleVisible = 'visible';
              this.cdr.markForCheck();
            }
            
            // CTA Final
            if (entry.target.id === 'cta-final') {
              this.ctaVisible = 'visible';
              this.cdr.markForCheck();
            }
            
            // Elementos con clase .scroll-reveal genéricos
            if (entry.target.classList.contains('scroll-reveal')) {
              entry.target.classList.add('visible');
            }
          });
        }
      });
    }, observerOptions);
    
    // Observar servicios individuales
    const serviceElements = document.querySelectorAll('[data-service-index]');
    serviceElements.forEach(el => observer.observe(el));
    
    // Observar sección de precios
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) observer.observe(pricingSection);
    
    // Observar título de sección
    const sectionTitle = document.getElementById('section-title');
    if (sectionTitle) observer.observe(sectionTitle);
    
    // Observar CTA final
    const ctaFinal = document.getElementById('cta-final');
    if (ctaFinal) observer.observe(ctaFinal);
    
    // Observar todos los elementos con scroll-reveal
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    scrollRevealElements.forEach(el => observer.observe(el));
  }
  
  scrollToPricing() {
    if (isPlatformBrowser(this.platformId)) {
      const pricingSection = document.getElementById('pricing-section');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Beneficios reales de cada servicio
  serviceDetails = [
    {
      img: 'assets/services/landing-page.png',
      title: 'Landing Page',
      subtitle: 'Perfecta para promocionar un producto o servicio específico',
      icon: 'rocket_launch',
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Aumenta tus conversiones con diseño enfocado en resultados',
        'Captura hasta 3x más leads con formularios optimizados',
        'Mejora tu posicionamiento en Google y atrae más clientes',
        'Llega a clientes en cualquier dispositivo (móvil, tablet, PC)',
        'Carga ultra rápida = más ventas (60% abandona si es lento)',
        'Diseño profesional que genera confianza instantánea'
      ]
    },
    {
      img: 'assets/services/sitio-web.png',
      title: 'Sitio Web Profesional',
      subtitle: 'Ideal para empresas que buscan presencia digital completa',
      icon: 'business',
      color: 'from-neo-blue to-neo-violet',
      benefits: [
        'Proyecta autoridad y profesionalismo frente a tu competencia',
        'Aparece en Google cuando tus clientes te busquen',
        'Muestra todos tus servicios de forma organizada y atractiva',
        'Blog para educar a tus clientes y posicionarte como experto',
        'Seguridad garantizada que protege tu reputación',
        'Conoce qué buscan tus visitantes y optimiza tu negocio',
        'Conecta con tus redes sociales y amplifica tu alcance',
        'Backups automáticos: tu información siempre protegida'
      ]
    },
    {
      img: 'assets/services/e-commerce.png',
      title: 'E-commerce',
      subtitle: 'Tu tienda online lista para vender 24/7',
      icon: 'shopping_cart',
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Vende las 24 horas sin descanso, incluso mientras duermes',
        'Expande tu mercado: vende a todo el país (o el mundo)',
        'Automatiza inventario y evita quedarte sin stock',
        'Cobra de forma segura: tus clientes compran con confianza',
        'Gestiona envíos fácilmente y mantén a tus clientes informados',
        'Crea promociones y descuentos para aumentar ventas',
        'Reportes en tiempo real: sabes qué se vende y cuánto ganas',
        'Cada producto optimizado para Google = más visitas',
        'Reduce costos operativos vs. tienda física'
      ]
    },
    {
      img: 'assets/services/full-digital.png',
      title: 'Full Digital',
      subtitle: 'La solución más completa para tu transformación digital',
      icon: 'auto_awesome',
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Transformación digital completa: todo lo que necesitas en un solo lugar',
        'App web instalable: tus clientes te tienen siempre a un clic',
        'Fideliza clientes con membresías y genera ingresos recurrentes',
        'Chatbot inteligente atiende consultas 24/7 sin personal extra',
        'Email marketing automático: recupera ventas perdidas',
        'Dashboard inteligente: toma decisiones con datos reales',
        'Optimización continua: mejoramos tus conversiones cada mes',
        'Hosting premium: tu web siempre rápida y disponible',
        'Soporte prioritario: resolvemos cualquier problema al instante',
        'Actualizaciones incluidas: tu web siempre al día',
        'ROI comprobado: recupera tu inversión en menos de 6 meses'
      ]
    }
  ];
}

