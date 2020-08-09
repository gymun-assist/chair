import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TimetableComponent} from "./timetable.component";

const routes: Routes = [
  {
    path: '', component: TimetableComponent
  }
];

@NgModule({
  declarations: [TimetableComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TimetableModule {
}
