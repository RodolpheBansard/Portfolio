import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOverlayActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleOverlay(){
    this.isOverlayActive = !this.isOverlayActive;
  }

}
