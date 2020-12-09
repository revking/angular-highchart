import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HighchartsChartComponent } from "highcharts-angular";
import { PiechartComponent } from "./piechart/piechart.component";

const routes: Routes = [
  { path: "Piechart", component: PiechartComponent }
  //{path: 'barchart', component: HighchartsChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
