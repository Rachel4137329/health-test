import { Component } from '@angular/core';
import { ChartNames } from 'src/app/chart/models/enums/chart-names.enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  public get ChartNames() {
    return ChartNames;
  }
}
