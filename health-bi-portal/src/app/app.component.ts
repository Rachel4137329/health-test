import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesGroup } from './models/entities/routes-group.model';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  jsonUrl: string = '../assets/config/sidebar.config.json';
  routesGroups: RoutesGroup[] = [];

  constructor(private router: Router, private http: HttpService) {
    this.http.get(this.jsonUrl).subscribe(data => this.routesGroups = data);
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }


  navigate(path: string) {
    this.router.navigateByUrl(path);
  }
}
