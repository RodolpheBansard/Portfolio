import {Component, Input, OnInit} from '@angular/core';
import {TiltSettings2} from "../../home/tiltSettings";
import {Work} from "../work.component";

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {
  @Input()
  work!: Work;

  @Input()
  index!: number

  tiltSetting = TiltSettings2;

  constructor() { }

  ngOnInit(): void {
  }

}
