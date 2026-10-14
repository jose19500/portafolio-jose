import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var Waypoint: any;

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent implements AfterViewInit {
  skillsLeft = [
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 85 },
    { name: 'JavaScript', value: 75 }
  ];

  skillsRight = [
    { name: 'Angular', value: 70 },
    { name: 'TypeScript', value: 65 },
    { name: 'Photoshop', value: 60 }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      const skillsAnimation = document.querySelectorAll('.skills-animation');
      skillsAnimation.forEach((item: any) => {
        if (typeof Waypoint !== 'undefined') {
          new Waypoint({
            element: item,
            offset: '80%',
            handler: function() {
              const progress = item.querySelectorAll('.progress .progress-bar');
              progress.forEach((el: any) => {
                el.style.width = el.getAttribute('aria-valuenow') + '%';
              });
            }
          });
        }
      });
    }, 500);
  }
}
