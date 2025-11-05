import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css'
})
export class CardServiceComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() icon = 'web';
  @Input() price = '';
  @Input() features: string[] = [];
  @Input() gradient = 'from-neo-blue to-neo-violet';
}

