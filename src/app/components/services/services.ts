import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  services = [
    { icon: 'bi-briefcase', title: 'Desarrollo Web', desc: 'Creación de sitios web modernos y responsivos utilizando las últimas tecnologías como Angular, HTML5 y CSS3.', delay: 100 },
    { icon: 'bi-card-checklist', title: 'Diseño UI/UX', desc: 'Diseño de interfaces intuitivas y experiencias de usuario atractivas centradas en el usuario final.', delay: 200 },
    { icon: 'bi-bar-chart', title: 'SEO y Analítica', desc: 'Optimización para motores de búsqueda y análisis de datos para mejorar el rendimiento web.', delay: 300 },
    { icon: 'bi-camera-video', title: 'Producción Multimedia', desc: 'Edición de video, fotografía y creación de contenido multimedia para diferentes plataformas.', delay: 400 },
    { icon: 'bi-brush', title: 'Diseño Gráfico', desc: 'Creación de material visual como logos, banners, infografías y material publicitario.', delay: 500 },
    { icon: 'bi-phone', title: 'Apps Móviles', desc: 'Desarrollo de aplicaciones móviles multiplataforma con interfaces modernas y funcionales.', delay: 600 }
  ];
}
