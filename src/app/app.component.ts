import {Component, HostListener, OnInit} from '@angular/core';
import {ParticlesConfig} from "./particles-config";
import {TranslateService} from "@ngx-translate/core";
declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{



  public ngOnInit(): void {
    this.invokeParticles();
  }
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
}
