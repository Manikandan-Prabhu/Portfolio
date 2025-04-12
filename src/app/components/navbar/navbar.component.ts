import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Renderer2, viewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideIn', [
      state(':enter', style({ zIndex: 110 })),
      transition(':enter', [style({ left: "100%" }),
      animate('500ms ease-out', style({ left: "0px" }))
      ]),
      transition(':leave', [animate('200ms', style({ left: "100%" }))]),
    ])
  ]
})
export class NavbarComponent {
  prevScrollpos!: number;
  navRef = viewChild("navRef");
  isMobileScreen!: boolean;
  openMenu!: boolean;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.onResize();
    this.prevScrollpos = window.scrollY ?? 0;
  }

  downloadResume() {
    const pdfUrl = 'https://raw.githubusercontent.com/Manikandan-Prabhu/Resume/master/Manikandan%20Prabhu%20Resume.pdf';
    const pdfName = 'Manikandan Prabhu Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.toggleMenu();
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
      if (currentScrollPos < 30) {
        this.renderer.setStyle(nav, 'top', '0rem');
      }
      this.renderer.removeClass(nav, 'shadow');
    }
    this.prevScrollpos = currentScrollPos;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileScreen = !!(window.innerWidth < 600);
  }

  toggleMenu() {
    if (!this.isMobileScreen) return;
    this.openMenu = !this.openMenu;
    const body = document.body;
    if (this.openMenu)
      this.renderer.setStyle(body, "overflow", 'hidden');
    else
      this.renderer.removeStyle(body, "overflow");
  }
}
