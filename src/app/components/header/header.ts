import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  menuOpen = false;

  navItems = [
    { icon: 'bi-house', label: 'Inicio', link: '#hero', active: true },
    { icon: 'bi-person', label: 'Sobre Mí', link: '#about', active: false },
    { icon: 'bi-file-earmark-text', label: 'Currículum', link: '#resume', active: false },
    { icon: 'bi-images', label: 'Portafolio', link: '#portfolio', active: false },
    { icon: 'bi-film', label: 'Multimedia', link: '#multimedia', active: false },
    { icon: 'bi-hdd-stack', label: 'Servicios', link: '#services', active: false },
    { icon: 'bi-envelope', label: 'Contacto', link: '#contact', active: false }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
