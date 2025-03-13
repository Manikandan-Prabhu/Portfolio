import { Component } from '@angular/core';
import { fadeInAnimation } from '../../constants/animations';
import { CommonService } from '../../services/common.service';
import { COMPANIES, EXPERIENCE } from '../../constants/experience.constant';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  animations: [fadeInAnimation]
})
export class WorkComponent {

  companies: any;
  experience: any;
  selectedDetails!: any;
  state = "out";

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.companies = COMPANIES;
    this.experience = EXPERIENCE;
    this.selectedCompany(1);
  }

  onVisibilityChange(isVisible: boolean) {
    this.state = this.commonService.onVisibilityChange(isVisible);
  }

  selectedCompany(id: number) {
    this.selectedDetails = this.experience.find((exp: any) => { return exp.id === id });
  }
}
