import { Component, HostListener, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ViewportScroller, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected title = 'NeoWeb';

  /** Estado de scroll: false = top (navbar transparente), true = scrolleado (navbar sólido) */
  protected readonly isScrolled = signal(false);

  private readonly router = inject(Router);
  private readonly viewport = inject(ViewportScroller);
  private readonly platformId = inject(PLATFORM_ID);
  private routerSub?: Subscription;
  private scrollTimers: ReturnType<typeof setTimeout>[] = [];

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateScrollState();
  }

  ngOnInit(): void {
    this.updateScrollState();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.routerSub = this.router.events.subscribe((event) => {
      // Sube ya al iniciar la navegación (antes de montar la nueva vista)
      if (event instanceof NavigationStart) {
        this.forceScrollTop();
        return;
      }

      // Y de nuevo cuando termina, en varios ticks (lazy load / layout)
      if (event instanceof NavigationEnd) {
        this.forceScrollTop();
        this.scheduleScrollTopPasses();
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.clearScrollTimers();
  }

  private scheduleScrollTopPasses(): void {
    this.clearScrollTimers();

    const delays = [0, 16, 50, 100, 200, 400];
    for (const delay of delays) {
      this.scrollTimers.push(
        setTimeout(() => this.forceScrollTop(), delay)
      );
    }

    requestAnimationFrame(() => {
      this.forceScrollTop();
      requestAnimationFrame(() => this.forceScrollTop());
    });
  }

  private clearScrollTimers(): void {
    for (const timer of this.scrollTimers) {
      clearTimeout(timer);
    }
    this.scrollTimers = [];
  }

  private forceScrollTop(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    try {
      this.viewport.scrollToPosition([0, 0]);
      window.scrollTo(0, 0);
      html.scrollTop = 0;
      document.body.scrollTop = 0;

      // Contenedores por si algún layout scrollea otro nodo
      const scrollingElement = document.scrollingElement;
      if (scrollingElement) {
        scrollingElement.scrollTop = 0;
      }
    } finally {
      html.style.scrollBehavior = previousBehavior;
    }

    this.isScrolled.set(false);
  }

  private updateScrollState(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 50);
    }
  }
}
