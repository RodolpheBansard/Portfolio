import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  isTransitioning : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  goToContact(){
    if(!document.location.href.includes('contact')){
      this.transition('contact');
    }

  }

  goToHome(){
    if(!document.location.href.includes('home')){
      this.transition('home');
    }
  }


  transition(url: string){
    this.isTransitioning.next(true);
    setTimeout(()=> {
      this.router.navigateByUrl(url);
      setTimeout(()=>{
        this.isTransitioning.next(false);
      },400)
    },400);
  }

}
