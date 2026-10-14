import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { StatsComponent } from './components/stats/stats';
import { SkillsComponent } from './components/skills/skills';
import { ResumeComponent } from './components/resume/resume';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { ServicesComponent } from './components/services/services';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { MultimediaComponent } from './components/multimedia/multimedia';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    StatsComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    MultimediaComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  title = 'Jose Gabriel Parraga Alvarez - Portafolio';

  ngAfterViewInit() {
    setTimeout(() => {
      // Initialize AOS (Animate on Scroll)
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }

      // Scroll top button
      const scrollTop = document.querySelector('.scroll-top');
      if (scrollTop) {
        const toggleScrollTop = () => {
          window.scrollY > 100
            ? scrollTop.classList.add('active')
            : scrollTop.classList.remove('active');
        };

        scrollTop.addEventListener('click', (e: Event) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', toggleScrollTop);
        toggleScrollTop();
      }

      // Navmenu Scrollspy
      const navmenulinks = document.querySelectorAll('.navmenu a');
      const navmenuScrollspy = () => {
        navmenulinks.forEach((navmenulink: any) => {
          if (!navmenulink.hash) return;
          const section = document.querySelector(navmenulink.hash);
          if (!section) return;
          const position = window.scrollY + 200;
          if (position >= (section as HTMLElement).offsetTop &&
              position <= ((section as HTMLElement).offsetTop + (section as HTMLElement).offsetHeight)) {
            document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
            navmenulink.classList.add('active');
          } else {
            navmenulink.classList.remove('active');
          }
        });
      };

      window.addEventListener('scroll', navmenuScrollspy);
      navmenuScrollspy();
    }, 500);
  }
}
