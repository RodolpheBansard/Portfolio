import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TiltSettings1, TiltSettings2} from "./tiltSettings";
import {RouteService} from "../../services/route.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tiltSettings1 = TiltSettings1;
  tiltSettings2 = TiltSettings2;

  constructor(private routeService: RouteService) { }

  goToContact(){
    this.routeService.goToContact();
  }


  ngOnInit(): void {
  }

}
