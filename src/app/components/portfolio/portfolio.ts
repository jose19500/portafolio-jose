import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var Isotope: any;
declare var imagesLoaded: any;
declare var GLightbox: any;

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class PortfolioComponent implements AfterViewInit {
  filters = [
    { label: 'Todos', filter: '*', active: true },
    { label: 'Web', filter: '.filter-web', active: false },
    { label: 'Diseño', filter: '.filter-design', active: false },
    { label: 'Multimedia', filter: '.filter-multimedia', active: false }
  ];

  portfolioItems = [
    { img: 'assets/img/profile-1.jpg', title: 'Producción Fotográfica Urbana', category: 'filter-multimedia', desc: 'Sesión de fotos y post-producción digital' },
    { img: 'assets/img/portfolio/app-1.jpg', title: 'Plataforma Web Angular', category: 'filter-web', desc: 'Desarrollo web moderno con Angular 22' },
    { img: 'assets/img/profile-2.jpg', title: 'Composición y Perspectiva', category: 'filter-multimedia', desc: 'Fotografía en locación universitaria' },
    { img: 'assets/img/portfolio/product-1.jpg', title: 'Diseño UX/UI Producto', category: 'filter-design', desc: 'Prototipado interactivo en Figma' },
    { img: 'assets/img/profile-3.jpg', title: 'Retrato e Identidad Digital', category: 'filter-design', desc: 'Branding y dirección de arte personal' },
    { img: 'assets/img/portfolio/books-1.jpg', title: 'Edición Multimedia', category: 'filter-multimedia', desc: 'Producción audiovisual y efectos visuales' },
    { img: 'assets/img/portfolio/app-2.jpg', title: 'Sistema Web Interactivo', category: 'filter-web', desc: 'Frontend responsivo y dinámico' },
    { img: 'assets/img/portfolio/branding-1.jpg', title: 'Identidad Corporativa', category: 'filter-design', desc: 'Diseño de marca y manual de identidad' },
    { img: 'assets/img/portfolio/app-3.jpg', title: 'Dashboard Multimedia', category: 'filter-web', desc: 'Panel de control con métricas en tiempo real' }
  ];

  activeFilter = '*';
  private initIsotope: any;

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.filters.forEach(f => f.active = f.filter === filter);
    if (this.initIsotope) {
      this.initIsotope.arrange({ filter: filter === '*' ? '*' : filter });
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const isotopeContainer = document.querySelector('.isotope-container');
      if (isotopeContainer && typeof imagesLoaded !== 'undefined' && typeof Isotope !== 'undefined') {
        imagesLoaded(isotopeContainer, () => {
          this.initIsotope = new Isotope(isotopeContainer, {
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
            filter: '*',
            sortBy: 'original-order'
          });
        });
      }
      if (typeof GLightbox !== 'undefined') {
        GLightbox({ selector: '.glightbox' });
      }
    }, 500);
  }
}
