import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.css'
})
export class Error404Component {}

