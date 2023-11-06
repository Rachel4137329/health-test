import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ActivatedRoute } from '@angular/router';
import { ChartOptionsService } from '../../services/chart-options.service';
import { ChartNames } from '../../models/enums/chart-names.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chart-ui',
  templateUrl: './chart-ui.component.html',
  styleUrls: ['./chart-ui.component.css']
})
export class ChartUiComponent implements OnInit {

  @Input()
  chartName: ChartNames | undefined;

  highcharts = Highcharts;

  chartOptions: Observable<any> = new Observable<any>();

  constructor(private chartOptionsService: ChartOptionsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let name = this.chartName || <ChartNames>this.route.snapshot.paramMap.get('chartName');
    this.chartOptions = name in ChartNames ?
      this.chartOptionsService.getChartOptionsByName(name) :
      this.chartOptions;
  }
}
