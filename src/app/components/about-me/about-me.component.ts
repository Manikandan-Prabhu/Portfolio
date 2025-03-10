import { Component, ElementRef, OnInit } from '@angular/core';
import { SKILLS } from '../../constants/skills.constant';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
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
export class AboutMeComponent implements OnInit {
  skillDetails: any;
  state = "out";

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.skillDetails = SKILLS
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        this.state = entry.isIntersecting ? 'in' : 'out';
      });
    }, { threshold: 0.6 });

    observer.observe(this.el.nativeElement);
  }
}
