import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Component({
  selector: "app-casestudies",
  templateUrl: "./casestudies.component.html",
  styleUrls: ["./casestudies.component.scss"]
})
export class CasestudiesComponent implements OnInit {
  caseStudies = [
    {
      img: "../../assets/image/download.png",
      imgAlt: "Uber",
      heading: "Uber",
      para: `We have build a sentiment analysis tool for uber; they can
    understand the frustration.`
    },
    {
      img: "../../assets/image/download.png",
      imgAlt: "Uber",
      heading: "Uber",
      para: `We have build a sentiment analysis tool for uber; they can
    understand the frustration.`
    },
    {
      img: "../../assets/image/download.png",
      imgAlt: "Uber",
      heading: "Uber",
      para: `We have build a sentiment analysis tool for uber; they can
    understand the frustration.`
    },
    {
      img: "../../assets/image/download.png",
      imgAlt: "Uber",
      heading: "Uber",
      para: `We have build a sentiment analysis tool for uber; they can
    understand the frustration.`
    },
    {
      img: "../../assets/image/download.png",
      imgAlt: "Uber",
      heading: "Uber",
      para: `We have build a sentiment analysis tool for uber; they can
    understand the frustration.`
    },
    {
      img: "../../assets/image/download.png",
      imgAlt: "Uber",
      heading: "Uber",
      para: `We have build a sentiment analysis tool for uber; they can
    understand the frustration.`
    },
    {
      img: "../../assets/image/download.png",
      imgAlt: "Uber",
      heading: "Uber",
      para: `We have build a sentiment analysis tool for uber; they can
    understand the frustration.`
    },
    {
      img: "../../assets/image/download.png",
      imgAlt: "Uber",
      heading: "Uber",
      para: `We have build a sentiment analysis tool for uber; they can
    understand the frustration.`
    },
    {
      img: "../../assets/image/download.png",
      imgAlt: "Uber",
      heading: "Uber",
      para: `We have build a sentiment analysis tool for uber; they can
    understand the frustration.`
    },
    {
      img: "../../assets/image/download.png",
      imgAlt: "Uber",
      heading: "Uber",
      para: `We have build a sentiment analysis tool for uber; they can
    understand the frustration.`
    }
  ];

  rows;

  constructor(public afs: AngularFirestore) {}

  ngOnInit() {
    this.rows = this.afs
      .doc("_contents_/caseStudies")
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
