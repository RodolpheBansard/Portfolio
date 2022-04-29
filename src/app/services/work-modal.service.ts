import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Work} from "../components/work/work.component";

@Injectable({
  providedIn: 'root'
})
export class WorkModalService {

  // @ts-ignore
  selectedWork: BehaviorSubject<Work> = new BehaviorSubject<Work>(null);



  constructor() { }

  updateSelectedWork(work:Work){
    this.selectedWork.next(work);
  }
  resetSelectedWork(){
    // @ts-ignore
    this.selectedWork.next(null);
  }


}
