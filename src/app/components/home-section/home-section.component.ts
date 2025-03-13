import { Component } from '@angular/core';
import { fadeInAnimation } from '../../constants/animations';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss',
  animations: [fadeInAnimation]
})
export class HomeSectionComponent {
  state = "out";

  constructor(private commonService: CommonService) { }

  onVisibilityChange(isVisible: boolean) {
    this.state = this.commonService.onVisibilityChange(isVisible);
  }
  sendMail() {
    this.commonService.sendMail();
  }
}
