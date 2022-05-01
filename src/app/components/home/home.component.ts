import {Component, OnInit} from '@angular/core';
import {TiltSettings1, TiltSettings2} from "./tiltSettings";
import {RouteService} from "../../services/route.service";
import {PoppingSeparator, PoppingText} from "../../animations/home.anim";
import {Observable} from "rxjs";
import {Work} from "../work/work.component";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {filter, map} from "rxjs/operators";
import {WorkModalService} from "../../services/work-modal.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    PoppingText,PoppingSeparator
  ]
})
export class HomeComponent implements OnInit {

  tiltSettings1 = TiltSettings1;
  tiltSettings2 = TiltSettings2;

  selectedWork!: Work;
  featuredWork$: Observable<Work[]> = new Observable<Work[]>();

  isVisible = false;

  constructor(private routeService: RouteService,
              private afs: AngularFirestore,
              private workModalService : WorkModalService) {
    this.workModalService.selectedWork.subscribe((value) => {
      this.selectedWork = value;
    })

    this.featuredWork$ = afs.collection<Work>('works').valueChanges().pipe(map((works) => {
      return works.filter((work) => work.isFeatured)
    }))
  }

  goToContact(){
    this.routeService.goToContact();
  }


  ngOnInit(): void {
    setTimeout(()=> {
      this.isVisible = true;
    },1)
  }

}
