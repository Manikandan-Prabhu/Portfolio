import { Component, OnInit } from '@angular/core';
import { SKILLS } from '../../constants/skills.constant';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  skillDetails: any
  ngOnInit() {
    this.skillDetails = SKILLS
  }
}
