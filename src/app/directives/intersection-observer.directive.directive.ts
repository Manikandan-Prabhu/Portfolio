import { Directive, ElementRef, Output, EventEmitter, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserverDirective implements AfterViewInit, OnDestroy {
  @Output() isVisible = new EventEmitter<boolean>();
  private observer!: IntersectionObserver;
  isMobileScreen!: boolean;
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.onResize();
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        this.isVisible.emit(entry.isIntersecting);
      });
    }, { threshold: this.isMobileScreen ? 0.3 : 0.6 });
    this.observer.observe(this.el.nativeElement);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileScreen = !!(window.innerWidth < 600);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
