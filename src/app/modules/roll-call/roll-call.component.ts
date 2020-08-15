import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RollCallSelectors} from "../../core/state/roll-call/roll-call.selectors";
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {SetCountries} from "../../core/state/roll-call/roll-call.actions";

@Component({
  selector: 'roll-call',
  templateUrl: './roll-call.component.html',
  styleUrls: ['./roll-call.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RollCallComponent {

  @Select(RollCallSelectors.countries) countries$: Observable<string[]>;

  constructor(private store: Store) {
    setTimeout(() => this.setCountries(), 5000);
  }

  private setCountries() {
    this.store.dispatch(new SetCountries(['Japan', 'Russia'])).subscribe(() => {
      console.log(this.store.selectSnapshot<string[]>(state => state.root.rollCall.countries));
    });
  }
}
