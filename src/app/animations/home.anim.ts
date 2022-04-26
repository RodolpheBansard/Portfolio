import {animate, state, style, transition, trigger} from "@angular/animations";

export const PoppingText = trigger('text-pop',[
  state('hidden',style({
    top:'100%'
  })),
  state('visible',style({
    top:'0'
  })),
  transition('hidden => visible', [
    animate('.8s ease-in-out')
  ])
])

export const PoppingSeparator = trigger('separator-pop',[
  state('hidden',style({
    width:'0%'
  })),
  state('visible',style({
    width:'20%'
  })),
  transition('hidden => visible', [
    animate('.8s ease-in-out')
  ])
])

export const PoppingHeader = trigger('header-pop',[
  state('hidden',style({
    top:'-7rem'
  })),
  state('visible',style({
    top:'0'
  })),
  transition('hidden => visible', [
    animate('.8s ease-in-out')
  ])
])
