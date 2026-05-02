import { Component, HostListener, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'NeoWeb';

  /** Estado de scroll: false = top (navbar transparente), true = scrolleado (navbar sólido) */
  protected readonly isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateScrollState();
  }

  ngOnInit(): void {
    this.updateScrollState();
  }

  private updateScrollState(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 50);
    }
  }
}
