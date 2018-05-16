import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const bounceAnimations = [
  trigger('bounce', [
    state('inactive', style({
      opacity: 0,
      transform: 'scale(0) translate3d(0,0,0)'
    })),
    state('active', style({
      opacity: 1,
      transform: 'scale(1) translate3d(0,0,0)'
    })),
    transition('inactive => active', animate('300ms ease-in', keyframes([
        style({ transform: 'scale(.3)', opacity: .9 }),
        style({ transform: 'scale(1.1)', opacity: 1 }),
        style({ transform: 'scale(.89)', opacity: 1 })
      ])
    )),
    transition('active => inactive', animate('300ms ease-out',
      keyframes([
        style({ transform: 'scale(.89)', opacity: .9 }),
        style({ transform: 'scale(1.1)', opacity: 1 }),
        style({ transform: 'scale(.3)' })
      ])
    ))
  ])
];

export const dropAnimations = [
  trigger('drop', [
    state('active', style({
      transform: 'translate3d(0, 0, 0)',
      opacity: '1'
    })),
    state('inactive', style({
      transform: 'translate3d(0, -100%, 0)',
      opacity: 0
    })),
    transition('active => inactive', animate('400ms ease-in-out')),
    transition('inactive => active', animate('400ms ease-in-out'))
  ]),
];

export const slideAnimations = [
  trigger('slide', [
    state('active', style({
      transform: 'translate3d(0, 0, 0)',
      opacity: '1'
    })),
    state('inactive', style({
      transform: 'translate3d(-100%, 0, 0)',
      opacity: 0
    })),
    transition('active => inactive', animate('400ms ease-in-out')),
    transition('inactive => active', animate('400ms ease-in-out'))
  ]),
];
