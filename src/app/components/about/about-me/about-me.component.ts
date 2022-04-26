import { Component, OnInit } from '@angular/core';
import {TiltSettings2} from "../../home/tiltSettings";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  tiltSettings2 = TiltSettings2;

  constructor() { }

  ngOnInit(): void {
  }

}
