import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesGroup } from './models/entities/routes-group.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; //todo why deprecated
  }

  routesGroups: RoutesGroup[] = [ //todo move to service
    {
      title: "קורונה",
      routes: [
        { lable: "דשבורד הקורונה הלאומי", path: "chart/" },
        { lable: "מפת תחנות בדיקה", path: "chart/" }
      ]
    },
    {
      title: "הנקה",
      routes: [
        { lable: "מגמה שנתית", path: "chart/NursingYearlyTrend" },
        { lable: "אחוז הנקה", path: "chart/" }
      ]
    },
    {
      title: "פוליו",
      routes: []
    },
    {
      title: "סקרי דעת קהל",
      routes: [
        { lable: "הפרש מהממוצע מוסד/אשפוז", path: "chart/Institutes" }
      ]
    },
    {
      title: "התחסנות ילדים",
      routes: []
    },
    {
      title: "מדדי איכות",
      routes: []
    }
  ]

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }
}
