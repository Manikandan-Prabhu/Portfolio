import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GMAIL } from '../../constants/skills.constant';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {

  gmail!: string

  constructor(private route: ActivatedRoute, private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.gmail = GMAIL;
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
