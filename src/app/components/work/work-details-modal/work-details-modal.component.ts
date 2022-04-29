import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";
import {Work} from "../work.component";
import {WorkModalService} from "../../../services/work-modal.service";

@Component({
  selector: 'app-work-details-modal',
  templateUrl: './work-details-modal.component.html',
  styleUrls: ['./work-details-modal.component.scss']
})
export class WorkDetailsModalComponent implements AfterViewInit {

  @Input()
  work!: Work|null;


  counter = 1;

  imageUrl!: Observable<string>;

  constructor(private storage: AngularFireStorage,
              private workModalService:WorkModalService) {

  }

  nextImage(){
    // @ts-ignore
    if(this.counter >= this.work.tags.length){
      this.counter = 1;
    }
    else{
      this.counter++;
    }
    this.changeImage();
  }
  previousImage(){
    if(this.counter <= 1){
      // @ts-ignore
      this.counter = this.work.tags.length;
    }
    else{
      this.counter--;
    }
    this.changeImage();
  }

  changeImage(){
    if(this.work){
      console.log(this.work);
      // @ts-ignore
      this.imageUrl = this.storage.ref('works/'+ this.work.title +'/'+ this.counter +'.png').getDownloadURL();
      console.log(this.imageUrl);
    }

  }

  ngAfterViewInit(): void {
    this.changeImage();
  }

  resetSelectedWork(){
    this.workModalService.resetSelectedWork();
  }

}
