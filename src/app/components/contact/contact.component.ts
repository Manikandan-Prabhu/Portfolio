import { Component } from '@angular/core';
import { fadeInAnimation } from '../../constants/animations';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [fadeInAnimation]
})
export class ContactComponent {
  state = "out";

  constructor(private commonService: CommonService) { }
  onVisibilityChange(isVisible: boolean) {
    this.state = this.commonService.onVisibilityChange(isVisible);
  }
  sendMail() {
    this.commonService.sendMail();
  }
}
