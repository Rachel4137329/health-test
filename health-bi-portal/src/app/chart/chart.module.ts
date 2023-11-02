import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    LineChartComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule
  ]
})
export class ChartModule { }
