import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CaucusComponent} from "./caucus.component";

const routes: Routes = [
  {
    path: '', component: CaucusComponent
  }
];

@NgModule({
  declarations: [CaucusComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CaucusModule {
}
