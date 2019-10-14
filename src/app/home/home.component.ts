import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  imgs;
  homeProjects;
  homeProjectsSmall;
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
      pauseOnHover: false,
      responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  }

  constructor(public afs: AngularFirestore) {}

  ngOnInit() {
    this.imgs = this.afs
      .doc("_contents_/home_sponsors")
      .valueChanges()
      .pipe(map(res => res["data"]));
    this.afs
      .doc("_contents_/home_projects")
      .valueChanges()
      .subscribe(res => {
        this.homeProjects = res["data"];
        console.log(this.homeProjects);
      });
    this.afs
      .doc("_contents_/home_projects_small")
      .valueChanges()
      .subscribe(res => {
        this.homeProjectsSmall = res["data"];
      });
  }
}
