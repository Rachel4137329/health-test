import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesGroup } from './models/routes-group.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  routesGroups: RoutesGroup[] = [ //todo move to service
    {
      title: "קורונה",
      routes: [
        { lable: "דשבורד הקורונה הלאומי", path: "line-chart" },
        { lable: "מפת תחנות בדיקה", path: "header" }
      ]
    },
    {
      title: "הנקה",
      routes: [
        { lable: "מגמה שנתית", path: "home" },
        { lable: "אחוז הנקה", path: "header" }
      ]
    }
  ]

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
