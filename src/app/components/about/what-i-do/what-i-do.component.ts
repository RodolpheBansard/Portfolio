import { Component, OnInit } from '@angular/core';
import {TiltSettings1} from "../../home/tiltSettings";

@Component({
  selector: 'app-what-i-do',
  templateUrl: './what-i-do.component.html',
  styleUrls: ['./what-i-do.component.scss']
})
export class WhatIDoComponent implements OnInit {

  tiltSettings1 = TiltSettings1;

  constructor() { }

  ngOnInit(): void {
  }

}
