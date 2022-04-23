import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOverlayActive = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleOverlay(){
    this.isOverlayActive = !this.isOverlayActive;
  }

  goToContact(){
    this.router.navigateByUrl('contact');
    this.isOverlayActive=false;
  }

  goToHome(){
    this.router.navigateByUrl('');
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
