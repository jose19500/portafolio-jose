import { Component, AfterViewInit, OnDestroy } from '@angular/core';

declare var Typed: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private typedInstance: any;

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof Typed !== 'undefined') {
        this.typedInstance = new Typed('.typed', {
          strings: ['Ingeniero en Sistemas', 'Desarrollador de Software', 'Desarrollador Web', 'Freelancer'],
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      }
    }, 500);
  }

  ngOnDestroy() {
    if (this.typedInstance) {
      this.typedInstance.destroy();
    }
  }
}
