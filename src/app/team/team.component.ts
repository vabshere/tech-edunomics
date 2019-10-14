import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  rows;

  constructor(public afs: AngularFirestore) { }

  ngOnInit() {
    this.rows = this.afs.doc('_contents_/team').valueChanges().pipe(        map(res => {
      res = res["data"];
      let rows = [];
      for (let i = 0; i < res["length"]; i++) {
        if (!(i % 4)) {
          rows.push([res[i]]);
        } else {
          rows[Math.floor(i / 4)].push(res[i]);
        }
      }
      return rows;
    }))
  }

}
