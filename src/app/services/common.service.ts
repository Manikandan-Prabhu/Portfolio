import { Injectable } from '@angular/core';
import { GMAIL } from '../constants/skills.constant';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  sendMail() {
    window.open(`mailto:${GMAIL}`, '_blank');
  }

  onVisibilityChange(isVisible: boolean) {
    return isVisible ? 'in' : 'out';
  }
}
