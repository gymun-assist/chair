import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TimetableComponent} from "./timetable.component";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '', component: TimetableComponent
  }
];

@NgModule({
  declarations: [TimetableComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class TimetableModule {
}
