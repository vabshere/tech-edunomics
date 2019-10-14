import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Component({
  selector: "app-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.scss"]
})
export class CareerComponent implements OnInit {
  careers = [
    {
      img: "../../assets/image/26.jpg",
      heading: "Happy “work” environment",
      para: `The work we do doesn’t just pay the bills; it makes us happy. We
    choose career paths that play to our strengths and work together to
    make the office a collaborative, diverse environment.`
    },
    {
      img: "../../assets/image/26.jpg",
      heading: "Happy “work” environment",
      para: `The work we do doesn’t just pay the bills; it makes us happy. We
    choose career paths that play to our strengths and work together to
    make the office a collaborative, diverse environment.`
    },
    {
      img: "../../assets/image/26.jpg",
      heading: "Happy “work” environment",
      para: `The work we do doesn’t just pay the bills; it makes us happy. We
    choose career paths that play to our strengths and work together to
    make the office a collaborative, diverse environment.`
    },
    {
      img: "../../assets/image/26.jpg",
      heading: "Happy “work” environment",
      para: `The work we do doesn’t just pay the bills; it makes us happy. We
    choose career paths that play to our strengths and work together to
    make the office a collaborative, diverse environment.`
    },
    {
      img: "../../assets/image/26.jpg",
      heading: "Happy “work” environment",
      para: `The work we do doesn’t just pay the bills; it makes us happy. We
    choose career paths that play to our strengths and work together to
    make the office a collaborative, diverse environment.`
    },
    {
      img: "../../assets/image/26.jpg",
      heading: "Happy “work” environment",
      para: `The work we do doesn’t just pay the bills; it makes us happy. We
    choose career paths that play to our strengths and work together to
    make the office a collaborative, diverse environment.`
    },
    {
      img: "../../assets/image/26.jpg",
      heading: "Happy “work” environment",
      para: `The work we do doesn’t just pay the bills; it makes us happy. We
    choose career paths that play to our strengths and work together to
    make the office a collaborative, diverse environment.`
    },
    {
      img: "../../assets/image/26.jpg",
      heading: "Happy “work” environment",
      para: `The work we do doesn’t just pay the bills; it makes us happy. We
    choose career paths that play to our strengths and work together to
    make the office a collaborative, diverse environment.`
    }
  ];

  rows;

  constructor(public afs: AngularFirestore) {}

  ngOnInit() {
    this.rows = this.afs
      .doc("_contents_/careers")
      .valueChanges()
      .pipe(
        map(res => {
          res = res["data"];
          let rows = [];
          if (res["length"] != 1) rows.push([res]);
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
