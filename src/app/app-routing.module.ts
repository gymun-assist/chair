import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./modules/main/main.component";


const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {
    path: 'roll-call',
    loadChildren: () => import('./modules/roll-call/roll-call.module').then(module => module.RollCallModule)
  },
  {
    path: 'caucus',
    loadChildren: () => import('./modules/caucus/caucus.module').then(module => module.CaucusModule)
  },
  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
