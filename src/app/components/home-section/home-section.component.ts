import { Component } from '@angular/core';
import { GMAIL } from '../../constants/skills.constant';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss'
})
export class HomeSectionComponent {

  gmail!: string;
  ngOnInit() {
    this.gmail = GMAIL;
  }
  sendMail() {
    window.open('mailto:${this.gmail}', '_blank');
  }
}
