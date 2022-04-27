import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

export interface Work{
  title:string;
  previewPath:string,
  tags: string[];
  illustrationsPath: string[];
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  private workCollection: AngularFirestoreCollection<Work>;
  works: Observable<Work[]>

  constructor(private afs: AngularFirestore) {
    this.workCollection = afs.collection<Work>('works');
    this.works = this.workCollection.valueChanges();

  }

  ngOnInit(): void {
  }

}
