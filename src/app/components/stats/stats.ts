import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var PureCounter: any;

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.html',
  styleUrl: './stats.css'
})
export class StatsComponent implements AfterViewInit {
  stats = [
    { icon: 'bi-emoji-smile', end: 15, label: 'Clientes Felices', desc: 'proyectos completados' },
    { icon: 'bi-journal-richtext', end: 25, label: 'Proyectos', desc: 'trabajos realizados' },
    { icon: 'bi-headset', end: 800, label: 'Horas de Trabajo', desc: 'dedicación constante' },
    { icon: 'bi-people', end: 10, label: 'Colaboradores', desc: 'trabajo en equipo' }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof PureCounter !== 'undefined') {
        new PureCounter();
      }
    }, 1000);
  }
}
