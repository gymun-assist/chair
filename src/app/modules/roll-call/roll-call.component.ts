import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RollCallSelectors} from "../../core/state/roll-call/roll-call.selectors";
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {SetPresentCountries} from "../../core/state/roll-call/roll-call.actions";
import {CountryModel} from "../../models/country.model";

@Component({
  selector: 'roll-call',
  templateUrl: './roll-call.component.html',
  styleUrls: ['./roll-call.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RollCallComponent {

  @Select(RollCallSelectors.presentCountries) presentCountries$: Observable<CountryModel[]>;

  constructor(private store: Store) {
    setTimeout(() => this.setCountries(), 5000);
  }

  private setCountries() {
    this.store.dispatch(new SetPresentCountries([{name: 'Japan'}, {name: 'Russia'}]))
      .subscribe(() => {
        console.log(this.store.selectSnapshot<CountryModel[]>(state => state.root.rollCall.presentCountries));
      });
  }
}
