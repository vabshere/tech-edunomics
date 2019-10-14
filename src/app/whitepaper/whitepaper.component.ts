import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Component({
  selector: "app-whitepaper",
  templateUrl: "./whitepaper.component.html",
  styleUrls: ["./whitepaper.component.scss"]
})
export class WhitepaperComponent implements OnInit {
  whitePapers;

  constructor(public afs: AngularFirestore) {}

  ngOnInit() {
    this.whitePapers = this.afs
      .doc("_contents_/whitePapers")
      .valueChanges()
      .pipe(map(res => res["data"]));
  }
}
