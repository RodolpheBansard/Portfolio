import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TiltSettings1, TiltSettings2} from "./tiltSettings";
import {RouteService} from "../../services/route.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {PoppingSeparator, PoppingText} from "../../animations/home.anim";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    PoppingText,PoppingSeparator
  ]
})
export class HomeComponent implements OnInit {

  tiltSettings1 = TiltSettings1;
  tiltSettings2 = TiltSettings2;

  isVisible = false;

  constructor(private routeService: RouteService) { }

  goToContact(){
    this.routeService.goToContact();
  }


  ngOnInit(): void {
    setTimeout(()=> {
      this.isVisible = true;
    },200)
  }

}
