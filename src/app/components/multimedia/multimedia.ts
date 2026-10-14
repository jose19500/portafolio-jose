import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MediaTrack {
  id: number;
  title: string;
  category: string;
  duration: string;
  author: string;
  isPlaying: boolean;
}

interface VideoProject {
  title: string;
  genre: string;
  duration: string;
  thumbnail: string;
  description: string;
}

@Component({
  selector: 'app-multimedia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multimedia.html',
  styleUrl: './multimedia.css'
})
export class MultimediaComponent {
  activeTab: 'audio' | 'video' | 'gallery' = 'audio';

  tracks: MediaTrack[] = [
    { id: 1, title: 'Soundtrack Multimedia 2026', category: 'Producción Sonora', duration: '02:45', author: 'Jose Gabriel Parraga', isPlaying: false },
    { id: 2, title: 'Ambiente Acústico & Paisaje Sonoro', category: 'Diseño Sonoro', duration: '03:12', author: 'Jose Gabriel Parraga', isPlaying: false },
    { id: 3, title: 'Sintetizador & Beats Electrónicos', category: 'Producción Digital', duration: '01:58', author: 'Jose Gabriel Parraga', isPlaying: false }
  ];

  videos: VideoProject[] = [
    {
      title: 'Cortometraje & Edición Digital',
      genre: 'Producción Audiovisual',
      duration: '04:20 min',
      thumbnail: 'assets/img/profile-1.jpg',
      description: 'Proyecto de iluminación cinematográfica, corrección de color en DaVinci Resolve y montaje dinámico.'
    },
    {
      title: 'Spot Publicitario Universitario',
      genre: 'Comercial & Motion',
      duration: '01:30 min',
      thumbnail: 'assets/img/profile-2.jpg',
      description: 'Dirección de arte, fotografía en locación de Cochabamba y efectos visuales sincronizados.'
    },
    {
      title: 'Showreel de Efectos Visuales',
      genre: 'VFX & Animación',
      duration: '02:15 min',
      thumbnail: 'assets/img/profile-3.jpg',
      description: 'Compilación de transiciones personalizadas, tipografía cinética y animación gráfica en After Effects.'
    }
  ];

  gallery = [
    { img: 'assets/img/profile-1.jpg', title: 'Composición Vertical', tag: 'Fotografía Urbana' },
    { img: 'assets/img/profile-2.jpg', title: 'Perspectiva y Punto de Fuga', tag: 'Retrato en Escalera' },
    { img: 'assets/img/profile-3.jpg', title: 'Primer Plano e Iluminación Natural', tag: 'Retrato Editorial' }
  ];

  togglePlay(track: MediaTrack) {
    this.tracks.forEach(t => {
      if (t.id === track.id) {
        t.isPlaying = !t.isPlaying;
      } else {
        t.isPlaying = false;
      }
    });
  }

  setTab(tab: 'audio' | 'video' | 'gallery') {
    this.activeTab = tab;
  }
}
