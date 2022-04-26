import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  workExperiences : string[] = ['SODIUS', 'LUMIPLAN', 'THALES'];
  educations: string[] = ['ENSIM1',"ENSIM2"];

  constructor() { }

  ngOnInit(): void {
  }

}
