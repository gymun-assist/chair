import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ResolutionComponent} from "./resolution.component";

const routes: Routes = [
  {
    path: '', component: ResolutionComponent
  }
];

@NgModule({
  declarations: [ResolutionComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ResolutionModule {
}
