import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  downloadResume() {
    const pdfUrl = 'assets/Manikandan Prabhu Resume.pdf';
    const pdfName = 'Manikandan Prabhu Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
