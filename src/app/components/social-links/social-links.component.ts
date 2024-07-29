import { Component } from '@angular/core';
import { Link } from '../../model/social-links.model';
import { SOCIAL_LINKS } from '../../constants/social-links.constant';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.sass',
})
export class SocialLinksComponent {
  socials!: Link[];

  constructor() {
    this.socials = SOCIAL_LINKS;
  }
}
