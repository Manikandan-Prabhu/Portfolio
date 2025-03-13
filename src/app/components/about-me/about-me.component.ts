import { Component, OnInit } from '@angular/core';
import { SKILLS } from '../../constants/skills.constant';
import { fadeInAnimation } from '../../constants/animations';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [fadeInAnimation]
})
export class AboutMeComponent implements OnInit {
  skillDetails: any;
  state = "out";

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.skillDetails = SKILLS
  }

  onVisibilityChange(isVisible: boolean) {
    this.state = this.commonService.onVisibilityChange(isVisible);
  }
}
