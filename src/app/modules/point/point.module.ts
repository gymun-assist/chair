import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PointComponent} from "./point.component";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '', component: PointComponent
  }
];

@NgModule({
  declarations: [PointComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class PointModule {
}
