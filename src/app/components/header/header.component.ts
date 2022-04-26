import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RouteService} from "../../services/route.service";
import {PoppingHeader} from "../../animations/home.anim";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[PoppingHeader]
})
export class HeaderComponent implements OnInit {

  isOverlayActive = false;
  isHeaderVisible = false;

  constructor(private router: Router,
              private routeService: RouteService) { }

  ngOnInit(): void {
    setTimeout(()=> {
      this.isHeaderVisible = true;
    },200)
  }

  toggleOverlay(){
    this.isOverlayActive = !this.isOverlayActive;
  }

  navigateFromOverlay(url: string){
    this.isOverlayActive=false;
    this.router.navigateByUrl(url);
  }

  goToContact(){
    this.routeService.goToContact();
    this.isOverlayActive=false;
  }

  goToHome(){
    this.routeService.goToHome();
    this.isOverlayActive=false;
  }

  scrollTo(element : string){
    if(document.querySelector(element)){
      this.isOverlayActive=false;
      // @ts-ignore
      document.querySelector(element).scrollIntoView({behavior: 'smooth'})
    }

  }
}
