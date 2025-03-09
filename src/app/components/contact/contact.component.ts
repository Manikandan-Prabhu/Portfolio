import { Component } from '@angular/core';
import { GMAIL } from '../../constants/skills.constant';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  gmail!: string;
  ngOnInit() {
    this.gmail = GMAIL;
  }
  sendMail() {
    window.open('mailto:${this.gmail}', '_blank');
  }
}
