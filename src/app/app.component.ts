import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ParticlesConfig} from "./particles-config";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {RouteService} from "./services/route.service";
declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isTransition$ = this.routeService.isTransitioning;

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
  constructor(private translate: TranslateService,
              private router: Router,
              private routeService: RouteService) {
    translate.setDefaultLang('en');
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


}
