import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainComponent]
})
export class MainModule {

}
