import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './common-ui/components/header/header.component';
import { ChartUiComponent } from './chart/components/chart-ui/chart-ui.component';

export const routes = [{ path: "", component: HomePageComponent }, { path: "chart/:name", component: ChartUiComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
