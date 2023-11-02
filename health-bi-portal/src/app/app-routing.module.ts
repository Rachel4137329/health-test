import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './common-ui/components/header/header.component';
import { LineChartComponent } from './chart/components/line-chart/line-chart.component';

export const routes = [{ path: "home", component: HomePageComponent }, { path: "line-chart", component: LineChartComponent }, { path: "header", component: HeaderComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
