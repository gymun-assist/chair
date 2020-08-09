import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PointComponent} from "./point.component";

const routes: Routes = [
  {
    path: '', component: PointComponent
  }
];

@NgModule({
  declarations: [PointComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PointModule {
}
