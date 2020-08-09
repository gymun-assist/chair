import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [],
})
export class SharedModule {
}
