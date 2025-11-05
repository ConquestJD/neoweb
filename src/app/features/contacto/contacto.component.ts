import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ContactLinksComponent } from '../../shared/components/contact-links/contact-links.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ContactLinksComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit, OnDestroy, AfterViewInit {
  // Estados de visibilidad para animaciones de scroll
  sectionsVisible: { [key: string]: string } = {
    'contact-methods': 'visible',
    'schedule': 'visible',
    'faq': 'visible'
  };

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

  ngOnDestroy() {
    // Cleanup si es necesario
  }

  cleanupWebGL() {
    // Limpiar elementos Spline que puedan estar causando errores WebGL
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
    
    // Observar todas las secciones con data-section-id
    const sections = document.querySelectorAll('[data-section-id]');
    sections.forEach(section => {
      observer.observe(section);
    });
  }

  // Enlaces de contacto con información adicional

}

