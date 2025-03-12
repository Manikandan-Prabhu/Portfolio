import { trigger, state, style, transition, animate } from "@angular/animations";

export const fadeInAnimation =
  trigger('fadeIn', [
    state('out', style({ opacity: 0, transform: 'translateY(20px)' })),
    transition('out => in', [
      animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ]),
    transition('in => out', [
      animate('800ms ease-out', style({ opacity: 0 }))
    ])
  ])
