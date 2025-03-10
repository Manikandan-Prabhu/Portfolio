import { Component, ElementRef } from '@angular/core';
import { GMAIL } from '../../constants/skills.constant';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss',
  animations: [
    trigger('fadeIn', [
      state('out', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition('out => in', [
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition('in => out', [
        animate('800ms ease-out', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class HomeSectionComponent {

  gmail!: string;
  state = "out";

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.gmail = GMAIL;
  }
  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        this.state = entry.isIntersecting ? 'in' : 'out';
      });
    }, { threshold: 0.6 });

    observer.observe(this.el.nativeElement);
  }
  sendMail() {
    window.open('mailto:${this.gmail}', '_blank');
  }
}
