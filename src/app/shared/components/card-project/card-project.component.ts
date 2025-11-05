import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent {
  @Input() title = '';
  @Input() category = '';
  @Input() imageUrl = '';
  @Input() description = '';
  @Input() technologies: string[] = [];
}

