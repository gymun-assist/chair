import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {StatisticsComponent} from "./statistics.component";

const routes: Routes = [
  {
    path: '', component: StatisticsComponent
  }
];

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class StatisticsModule {
}
