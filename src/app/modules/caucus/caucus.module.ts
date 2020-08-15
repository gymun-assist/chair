import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CaucusComponent} from "./caucus.component";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '', component: CaucusComponent
  }
];

@NgModule({
  declarations: [CaucusComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class CaucusModule {
}
