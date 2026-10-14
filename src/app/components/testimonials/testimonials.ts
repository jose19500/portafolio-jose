import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var Swiper: any;

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class TestimonialsComponent implements AfterViewInit {
  testimonials = [
    { name: 'Carlos Méndez', role: 'Cliente Freelance', img: 'assets/img/testimonials/testimonials-1.jpg', text: 'Jose Gabriel realizó un excelente trabajo en el rediseño de nuestro sitio web. Su atención al detalle y creatividad superaron nuestras expectativas.' },
    { name: 'María López', role: 'Diseñadora', img: 'assets/img/testimonials/testimonials-2.jpg', text: 'Trabajar con Jose fue una experiencia muy profesional. Entendió perfectamente nuestras necesidades y entregó un producto de alta calidad.' },
    { name: 'Andrea Rojas', role: 'Emprendedora', img: 'assets/img/testimonials/testimonials-3.jpg', text: 'Su conocimiento en desarrollo web y diseño multimedia es impresionante. Recomiendo sus servicios a cualquier persona que busque calidad.' },
    { name: 'Luis Herrera', role: 'Gerente de Proyectos', img: 'assets/img/testimonials/testimonials-4.jpg', text: 'Jose Gabriel demostró gran habilidad técnica y compromiso con el proyecto. Los resultados fueron excepcionales.' },
    { name: 'Patricia Vargas', role: 'Directora Creativa', img: 'assets/img/testimonials/testimonials-5.jpg', text: 'Un profesional dedicado y talentoso. Su trabajo en nuestro proyecto de branding fue clave para el éxito de la campaña.' }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof Swiper !== 'undefined') {
        const swiperEl = document.querySelector('.testimonials .init-swiper');
        if (swiperEl) {
          new Swiper(swiperEl, {
            loop: true,
            speed: 600,
            autoplay: { delay: 5000 },
            slidesPerView: 'auto',
            pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 40 },
              1200: { slidesPerView: 3, spaceBetween: 1 }
            }
          });
        }
      }
    }, 500);
  }
}
