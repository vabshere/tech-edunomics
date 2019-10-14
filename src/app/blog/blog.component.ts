import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"]
})
export class BlogComponent implements OnInit {
  blogs = [
    {
      img: "../../assets/image/10.jpg",
      imgAlt: "Card image cap",
      route: "/estate",
      heading: "Estate Planing",
      para: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`
    },
    {
      img: "../../assets/image/10.jpg",
      imgAlt: "Card image cap",
      route: "/estate",
      heading: "Estate Planing",
      para: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`
    },
    {
      img: "../../assets/image/10.jpg",
      imgAlt: "Card image cap",
      route: "/estate",
      heading: "Estate Planing",
      para: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`
    },
    {
      img: "../../assets/image/10.jpg",
      imgAlt: "Card image cap",
      route: "/estate",
      heading: "Estate Planing",
      para: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`
    },
    {
      img: "../../assets/image/10.jpg",
      imgAlt: "Card image cap",
      route: "/estate",
      heading: "Estate Planing",
      para: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`
    },
    {
      img: "../../assets/image/10.jpg",
      imgAlt: "Card image cap",
      route: "/estate",
      heading: "Estate Planing",
      para: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`
    },
    {
      img: "../../assets/image/10.jpg",
      imgAlt: "Card image cap",
      route: "/estate",
      heading: "Estate Planing",
      para: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`
    },
    {
      img: "../../assets/image/10.jpg",
      imgAlt: "Card image cap",
      route: "/estate",
      heading: "Estate Planing",
      para: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`
    },
    {
      img: "../../assets/image/10.jpg",
      imgAlt: "Card image cap",
      route: "/estate",
      heading: "Estate Planing",
      para: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`
    },
    {
      img: "../../assets/image/10.jpg",
      imgAlt: "Card image cap",
      route: "/estate",
      heading: "Estate Planing",
      para: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`
    },
    {
      img: "../../assets/image/10.jpg",
      imgAlt: "Card image cap",
      route: "/estate",
      heading: "Estate Planing",
      para: `Some quick example text to build on the card title and make up
    the bulk of the card's content.`
    }
  ];

  rows;

  constructor(public afs: AngularFirestore) {}

  ngOnInit() {
    this.rows = this.afs
      .doc("_contents_/blogs")
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
