import {MainComponent} from "./main.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainComponent]
})
export class MainModule {

}
