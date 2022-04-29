import {Component, Input, OnInit} from '@angular/core';
import {TiltSettings2} from "../../home/tiltSettings";
import {Work} from "../work.component";
import {WorkModalService} from "../../../services/work-modal.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";

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

  previewImageUrl$! : Observable<string>;

  constructor( private workModalService:WorkModalService,
               private storage: AngularFireStorage) {


  }

  ngOnInit(): void {
    console.log(this.work.previewPath)
    this.previewImageUrl$ = this.storage.ref('works/'+ this.work.title +'/1.png').getDownloadURL();
  }



  onClickWork(work:Work){
    this.workModalService.updateSelectedWork(work);
  }

}
