import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartUiComponent } from './components/chart-ui/chart-ui.component';
import { MatCardModule } from '@angular/material/card';
import { HttpService } from './services/http.service';
import { ChartOptionsService } from './services/chart-options.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartNames } from './models/enums/chart-names.enum';



@NgModule({
  declarations: [
    ChartUiComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [
    ChartUiComponent
  ],
  providers: [
    ChartOptionsService,
    HttpService
  ]
})
export class ChartModule { }
