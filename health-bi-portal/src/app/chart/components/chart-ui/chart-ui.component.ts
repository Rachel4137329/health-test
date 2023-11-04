import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ActivatedRoute } from '@angular/router';
import { ChartOptionsService } from '../../services/chart-options.service';

@Component({
  selector: 'app-chart-ui',
  templateUrl: './chart-ui.component.html',
  styleUrls: ['./chart-ui.component.css']
})
export class ChartUiComponent {

  highcharts = Highcharts;

  chartOptions: any = {};

  chartName: string = "";

  constructor(private chartOptionsService: ChartOptionsService, private route: ActivatedRoute) {
    this.chartName += this.route.snapshot.paramMap.get('name'); //todo const?
    this.chartOptions = chartOptionsService.getChartOptionsByName(this.chartName)
  }
}
