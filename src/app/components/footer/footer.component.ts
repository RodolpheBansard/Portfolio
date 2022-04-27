import { Component, OnInit } from '@angular/core';
import {RouteService} from "../../services/route.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private routeService: RouteService) { }

  goToContact(){
    this.routeService.goToContact();
  }

}
