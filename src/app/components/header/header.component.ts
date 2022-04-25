import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RouteService} from "../../services/route.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOverlayActive = false;

  constructor(private router: Router,
              private routeService: RouteService) { }

  ngOnInit(): void {
  }

  toggleOverlay(){
    this.isOverlayActive = !this.isOverlayActive;
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
