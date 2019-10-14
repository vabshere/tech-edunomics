import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  advantages = [
    {
      icon: "cogs",
      heading: "Technical partners",
      para: `We rely to specific business needs of our clients and support them
    throughout the whole way: from an idea to its implementation.`
    },
    {
      icon: "cogs",
      heading: "Technical partners",
      para: `We rely to specific business needs of our clients and support them
    throughout the whole way: from an idea to its implementation.`
    },
    {
      icon: "cogs",
      heading: "Technical partners",
      para: `We rely to specific business needs of our clients and support them
    throughout the whole way: from an idea to its implementation.`
    },
    {
      icon: "cogs",
      heading: "Technical partners",
      para: `We rely to specific business needs of our clients and support them
    throughout the whole way: from an idea to its implementation.`
    },
    {
      icon: "cogs",
      heading: "Technical partners",
      para: `We rely to specific business needs of our clients and support them
    throughout the whole way: from an idea to its implementation.`
    },
    {
      icon: "cogs",
      heading: "Technical partners",
      para: `We rely to specific business needs of our clients and support them
    throughout the whole way: from an idea to its implementation.`
    }
  ];

  rows;

  constructor(public afs: AngularFirestore) {}

  ngOnInit() {
    this.rows = this.afs
      .doc("_contents_/advantages")
      .valueChanges()
      .pipe(
        map(res => {
          res = res["data"];
          let rows = [];
          for (let i = 0; i < res["length"]; i++) {
            if (!(i % 3)) {
              rows.push([res[i]]);
            } else {
              rows[Math.floor(i / 3)].push(res[i]);
            }
          }
          console.log(rows, res["length"]);

          return rows;
        })
      );
  }
}
