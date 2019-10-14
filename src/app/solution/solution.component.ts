import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Component({
  selector: "app-solution",
  templateUrl: "./solution.component.html",
  styleUrls: ["./solution.component.scss"]
})
export class SolutionComponent implements OnInit {
  solutions = [
    {
      img:
        "https://uploads-ssl.webflow.com/5c98c492f5786d415aa3c82d/5d2f169e46b3c515785da4d7_Enterprise%20Applications_hover.svg",
      imgAlt: "application",
      heading: "ENTERPRISE APPLICATION",
      content:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system"
    },
    {
      img:
        "https://uploads-ssl.webflow.com/5c98c492f5786d415aa3c82d/5d2f169e46b3c515785da4d7_Enterprise%20Applications_hover.svg",
      imgAlt: "application",
      heading: "ENTERPRISE APPLICATION",
      content:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system"
    },
    {
      img:
        "https://uploads-ssl.webflow.com/5c98c492f5786d415aa3c82d/5d2f169e46b3c515785da4d7_Enterprise%20Applications_hover.svg",
      imgAlt: "application",
      heading: "ENTERPRISE APPLICATION",
      content:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system"
    },
    {
      img:
        "https://uploads-ssl.webflow.com/5c98c492f5786d415aa3c82d/5d2f169e46b3c515785da4d7_Enterprise%20Applications_hover.svg",
      imgAlt: "application",
      heading: "ENTERPRISE APPLICATION",
      content:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system"
    },
    {
      img:
        "https://uploads-ssl.webflow.com/5c98c492f5786d415aa3c82d/5d2f169e46b3c515785da4d7_Enterprise%20Applications_hover.svg",
      imgAlt: "application",
      heading: "ENTERPRISE APPLICATION",
      content:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system"
    },
    {
      img:
        "https://uploads-ssl.webflow.com/5c98c492f5786d415aa3c82d/5d2f169e46b3c515785da4d7_Enterprise%20Applications_hover.svg",
      imgAlt: "application",
      heading: "ENTERPRISE APPLICATION",
      content:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system"
    },
    {
      img:
        "https://uploads-ssl.webflow.com/5c98c492f5786d415aa3c82d/5d2f169e46b3c515785da4d7_Enterprise%20Applications_hover.svg",
      imgAlt: "application",
      heading: "ENTERPRISE APPLICATION",
      content:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system"
    },
    {
      img:
        "https://uploads-ssl.webflow.com/5c98c492f5786d415aa3c82d/5d2f169e46b3c515785da4d7_Enterprise%20Applications_hover.svg",
      imgAlt: "application",
      heading: "ENTERPRISE APPLICATION",
      content:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system"
    }
  ];

  solTechs = [
    {
      img:
        "https://uploads-ssl.webflow.com/5c98c492f5786d415aa3c82d/5d2f169e46b3c515785da4d7_Enterprise%20Applications_hover.svg",
      imgAlt: "application",
      heading: "ENTERPRISE APPLICATION",
      content:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system"
    },
    {
      img:
        "https://uploads-ssl.webflow.com/5c98c492f5786d415aa3c82d/5d2f169e46b3c515785da4d7_Enterprise%20Applications_hover.svg",
      imgAlt: "application",
      heading: "ENTERPRISE APPLICATION",
      content:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system"
    },
    {
      img:
        "https://uploads-ssl.webflow.com/5c98c492f5786d415aa3c82d/5d2f169e46b3c515785da4d7_Enterprise%20Applications_hover.svg",
      imgAlt: "application",
      heading: "ENTERPRISE APPLICATION",
      content:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system"
    },
    {
      img:
        "https://uploads-ssl.webflow.com/5c98c492f5786d415aa3c82d/5d2f169e46b3c515785da4d7_Enterprise%20Applications_hover.svg",
      imgAlt: "application",
      heading: "ENTERPRISE APPLICATION",
      content:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system"
    },
    {
      img:
        "https://uploads-ssl.webflow.com/5c98c492f5786d415aa3c82d/5d2f169e46b3c515785da4d7_Enterprise%20Applications_hover.svg",
      imgAlt: "application",
      heading: "ENTERPRISE APPLICATION",
      content:
        "Development of enterprise apps, including complex ERP, CRM, HRM, automated billing and payment system"
    }
  ];

  rows;
  techRows;

  constructor(public afs: AngularFirestore) {}

  ngOnInit() {
    this.rows = this.afs
      .doc("_contents_/solutions")
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

    this.techRows = this.afs
      .doc("_contents_/solTechs")
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
