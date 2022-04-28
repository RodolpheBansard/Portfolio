import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

export interface Work{
  title:string;
  previewPath:string,
  tags: string[];
  illustrationsPath: string[];
}

export interface WorkTag{
  tagName : string;
  isSelected: boolean;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  private workCollection: AngularFirestoreCollection<Work>;
  works$: Observable<Work[]>

  tags: Set<string> = new Set<string>();
  checkboxes: WorkTag[] = [];

  constructor(private afs: AngularFirestore,
              private formBuilder: FormBuilder) {
    //get data from firestore
    this.workCollection = afs.collection<Work>('works');
    this.works$ = this.workCollection.valueChanges();

    // get unique tags
    this.works$.subscribe((works)=> {
      this.tags = new Set<string>();
      if(works){
        works.forEach((work) => {
          work.tags.forEach((tag) => {
            this.tags.add(tag);
          })
        })
      }
      this.tags.forEach((element) => {
        this.checkboxes.push({
          tagName:element,
          isSelected:false
        })
      })
    })

  }

  onCheckbox(workTag:WorkTag){
    workTag.isSelected = !workTag.isSelected
  }



  ngOnInit(): void {
  }

}
