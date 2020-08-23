import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RollCallComponent} from "./roll-call.component";
import {SharedModule} from "../shared/shared.module";
import {RollCallProcedureComponent} from "./roll-call-procedure/roll-call-procedure.component";

const routes: Routes = [
  {
    path: '', component: RollCallComponent,
  },
  {
    path: 'procedure', component: RollCallProcedureComponent,
  },
  {
    path: '**', component: RollCallComponent
  }
];

@NgModule({
  declarations: [
    RollCallComponent,
    RollCallProcedureComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class RollCallModule {
}
