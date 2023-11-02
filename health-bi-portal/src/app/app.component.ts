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

  title = 'health-bi-portal';
  routesGroups: RoutesGroup[] = [
    {
      tytle: "קורונה",
      routes: [
        { lable: "דשבורד הקורונה הלאומי", path: "home" },
        { lable: "מפת תחנות בדיקה", path: "header" }
      ]
    },
    {
      tytle: "הנקה",
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
