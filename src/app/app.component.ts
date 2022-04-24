import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ParticlesConfig} from "./particles-config";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isTransition = false;

  @HostListener('document:mousemove', ['$event']) onMouseMove(event: any) {
    this.mouseX = event.clientX -25;
    this.clientY = event.clientY;
    this.mouseY = this.clientY + window.scrollY -25 ;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.mouseY = this.clientY + window.scrollY -25 ;
  }

  @ViewChild("circle") cursor!: ElementRef;

  clientY : number = 0;
  mouseX : number = 0;
  mouseY : number = 0;
  xp : number =0;
  yp : number=0;

  public ngOnInit(): void {
    this.invokeParticles();
  }
  constructor(translate: TranslateService,
              private router: Router) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    setInterval(() =>{
      this.xp += ((this.mouseX - this.xp)/10);
      this.yp += ((this.mouseY - this.yp)/10);
      this.cursor.nativeElement.setAttribute('style', 'left: '+this.xp +'px; top: '+ this.yp+'px');
    }, 10);

    this.router.events.pipe(filter(e => e instanceof  NavigationEnd)).subscribe((e) => {
      this.xp = 0;
      this.yp = 0;
    })
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  transition(){
    this.isTransition = true;
    setTimeout(()=> {
      this.isTransition = false
    },1000);
  }
}
