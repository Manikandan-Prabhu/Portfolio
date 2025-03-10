import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
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
export class WorkComponent {

  companies = [{ id: 1, name: "Centizen, Inc." }]

  experience = [
    {
      id: 1,
      role: "Software Engineer",
      company: "@ Centizen, Inc.",
      from: "Aug 2022",
      to: "Present",
      exp: [
        "Played a key role in building a scalable e-commerce platform using Angular, ensuring high performance, maintainability, and a seamless user experience.",
        "Provided technical guidance, conducted code reviews, and shared best practices, improving team efficiency and accelerating the learning curve for new developers.",
        "Refactored and consolidated multiple product card variations into a single, reusable Angular component, reducing redundant code in product module by 30% and streamlining future updates across the platform.",
        "Designed a modular banner system with multiple UI configurations, eliminating 40% of unnecessary components in the banner module and improving maintainability.",
        "Developed a floating cart with live product updates, increasing cart retention by 15% through an improved user experience and seamless interactions.",
        "Built a RESTful API to handle domain deletion requests and restructured the store domain module to enhance efficiency and maintainability.",
        "Created a flexible navbar component integrated with an admin editor, allowing non-technical users to modify navigation settings dynamically.",
        "Contributed in converted heavy Angular components into lightweight web components and angular elements, reducing bundle size and improving product load time by 75% for a faster user experience.",
        "Worked with NgRx state management and lazy-loaded modules, cutting redundant API calls by 50% and significantly improving page load times.",
      ]
    }
  ];

  selectedDetails!: any;
  state = "out";

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.selectedCompany(1);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        this.state = entry.isIntersecting ? 'in' : 'out';
      });
    }, { threshold: 0.6 });

    observer.observe(this.el.nativeElement);
  }

  selectedCompany(id: number) {
    console.log(id)
    this.selectedDetails = this.experience.find(exp => { return exp.id === id });
  }
}
