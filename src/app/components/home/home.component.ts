import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TiltSettings1, TiltSettings2} from "./tiltSettings";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tiltSettings1 = TiltSettings1;
  tiltSettings2 = TiltSettings2;

  constructor(private router: Router) { }

  goToContact(){
    this.router.navigateByUrl('contact');
  }


  ngOnInit(): void {
  }

}
