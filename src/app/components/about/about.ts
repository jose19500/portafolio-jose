import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  personalInfo = [
    { label: 'Cumpleaños', value: '15 Mar 2000', icon: 'bi-chevron-right' },
    { label: 'Teléfono', value: '+591 70000000', icon: 'bi-chevron-right' },
    { label: 'Ciudad', value: 'Cochabamba, Bolivia', icon: 'bi-chevron-right' },
    { label: 'Edad', value: '26', icon: 'bi-chevron-right' },
    { label: 'Carrera', value: 'Ingeniería en Sistemas', icon: 'bi-chevron-right' },
    { label: 'Email', value: 'jose19200500627183@gmail.com', icon: 'bi-chevron-right' },
    { label: 'Freelance', value: 'Disponible', icon: 'bi-chevron-right' },
    { label: 'Universidad', value: 'UNIVALLE', icon: 'bi-chevron-right' }
  ];
}
