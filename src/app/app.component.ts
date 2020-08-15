import {Component} from '@angular/core';
import {Store} from "@ngxs/store";
import {SetUser} from "./core/state/root.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chair-assistant';

  constructor(private store: Store) {
    this.store.dispatch(new SetUser({name: 'Uladzislau', surname: 'Dzemiantsei', position: 'EcoFin chair'}));
  }
}
