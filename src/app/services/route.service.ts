import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  isTransitioning : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) { }

  goToContact(){
    this.transition('contact');
  }

  goToHome(){
    this.transition('');
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
