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
  }

  goToHome(){
    this.router.navigateByUrl('');
  }
}
