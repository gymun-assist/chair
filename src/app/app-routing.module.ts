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
  {
    path: 'point',
    loadChildren: () => import('./modules/point/point.module').then(module => module.PointModule)
  },
  {
    path: 'resolution',
    loadChildren: () => import('./modules/resolution/resolution.module').then(module => module.ResolutionModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./modules/statistics/statistics.module').then(module => module.StatisticsModule)
  },
  {
    path: 'timetable',
    loadChildren: () => import('./modules/timetable/timetable.module').then(module => module.TimetableModule)
  },
  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
