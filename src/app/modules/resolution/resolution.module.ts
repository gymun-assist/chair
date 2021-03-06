import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ResolutionComponent} from "./resolution.component";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '', component: ResolutionComponent
  }
];

@NgModule({
  declarations: [ResolutionComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class ResolutionModule {
}
