import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RollCallComponent} from "./roll-call.component";

const routes: Routes = [
  {
    path: '', component: RollCallComponent
  }
];

@NgModule({
  declarations: [RollCallComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RollCallModule {
}
