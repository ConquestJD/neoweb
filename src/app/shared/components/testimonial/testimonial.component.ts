import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
  @Input() name = '';
  @Input() position = '';
  @Input() company = '';
  @Input() testimonial = '';
  @Input() avatarUrl = '';
  @Input() rating = 5;

  get stars(): number[] {
    return Array(this.rating).fill(0);
  }
}

