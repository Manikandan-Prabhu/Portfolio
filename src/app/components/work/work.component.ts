import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
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
        "Designed and developed scalable, reusable UI components and features using Angular & Angular Material.",
        "Implemented performance optimizations, reducing bundle size and improving load times by 40%.",
        "Led the development of key modules like Navbar, Floating Cart, and Product Listing, enhancing user experience.",
        "Built and maintained REST APIs, streamlining backend communication.",
        "Conducted unit testing using Jest, ensuring high code quality and performance.",
        "Mentored junior developers, fostering team collaboration and knowledge sharing."
      ]
    }
  ];

  selectedDetails!: any;

  ngOnInit() {
    this.selectedCompany(1);
  }

  selectedCompany(id: number) {
    console.log(id)
    this.selectedDetails = this.experience.find(exp => { return exp.id === id });
  }
}
