import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bento-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bento-layout.component.html',
  styleUrl: './bento-layout.component.css'
})
export class BentoLayoutComponent {
  // Este componente sirve como contenedor para layout tipo Bento
  // El contenido se proyecta mediante <ng-content>
}

