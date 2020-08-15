import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./modules/shared/shared.module";
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {RootState} from "./core/state/root.state";
import {RollCallState} from "./core/state/roll-call/roll-call.state";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxsModule.forRoot([RootState, RollCallState]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
