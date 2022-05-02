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
  work!: Work;


  counter = 1;

  imageUrl: string[]= [];

  constructor(private storage: AngularFireStorage,
              private workModalService:WorkModalService) {

  }

  nextImage(){
    if(this.counter >= this.work.tags.length-1){
      this.counter = 0;
    }
    else{
      this.counter++;
    }
  }
  previousImage(){
    if(this.counter <= 0){
      // @ts-ignore
      this.counter = this.work.tags.length-1;
    }
    else{
      this.counter--;
    }
  }




  ngAfterViewInit(): void {
    if (this.work) {
      this.work.illustrationsPath.forEach((image, index) => {
        this.storage.ref('works/' + this.work.title + '/' + image + '.png').getDownloadURL().subscribe(
          (url) => {
            this.imageUrl[index] = url;
          }
        );
      })
    }
  }

  resetSelectedWork(){
    this.workModalService.resetSelectedWork();
  }

  goTo(url:string|undefined){
    if(url){
      window.open(url)
    }

  }

}
