import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./modules/main/main.component";
import {RoutingConstants} from "./constants/routing.constants";


const routes: Routes = [
  {path: RoutingConstants.MAIN, component: MainComponent, pathMatch: 'full'},
  {
    path: RoutingConstants.ROLL_CALL,
    loadChildren: () => import('./modules/roll-call/roll-call.module').then(module => module.RollCallModule)
  },
  {
    path: RoutingConstants.CAUCUS,
    loadChildren: () => import('./modules/caucus/caucus.module').then(module => module.CaucusModule)
  },
  {
    path: RoutingConstants.POINT,
    loadChildren: () => import('./modules/point/point.module').then(module => module.PointModule)
  },
  {
    path: RoutingConstants.RESOLUTION,
    loadChildren: () => import('./modules/resolution/resolution.module').then(module => module.ResolutionModule)
  },
  {
    path: RoutingConstants.STATISTICS,
    loadChildren: () => import('./modules/statistics/statistics.module').then(module => module.StatisticsModule)
  },
  {
    path: RoutingConstants.TIMETABLE,
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
