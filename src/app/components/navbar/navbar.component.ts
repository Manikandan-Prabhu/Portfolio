import { Component, ElementRef, HostListener, Renderer2, viewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  prevScrollpos!: number;
  navRef = viewChild("navRef");

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.prevScrollpos = window.scrollY ?? 0;
  }

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

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const nav = (this.navRef() as ElementRef).nativeElement;
    const currentScrollPos = window.scrollY ?? 0;
    if (this.prevScrollpos > currentScrollPos) {
      //show navbar
      this.renderer.setStyle(nav, 'top', '0rem');
      this.renderer.addClass(nav, 'shadow');
    } else {
      //hide navbar   
      this.renderer.setStyle(nav, 'top', '-5rem');
      this.renderer.removeClass(nav, 'shadow');
    }
    if (currentScrollPos < 200) {
      this.renderer.removeClass(nav, 'shadow');
    }
    this.prevScrollpos = currentScrollPos;
  }
}
