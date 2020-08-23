import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RollCallSelectors} from "../../core/state/roll-call/roll-call.selectors";
import {Observable} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {SetPresentCountries} from "../../core/state/roll-call/roll-call.actions";
import {CountryModel} from "../../models/country.model";
import {RxUnsubscribe} from "../../core/services/rx-unsubscribe";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'roll-call',
  templateUrl: './roll-call.component.html',
  styleUrls: ['./roll-call.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RollCallComponent extends RxUnsubscribe {

  @Select(RollCallSelectors.presentCountries) presentCountries$: Observable<CountryModel[]>;

  constructor(private store: Store) {
    super();
    //setTimeout(() => this.setCountries(), 5000);
  }

  private setCountries() {
    this.store.dispatch(new SetPresentCountries([{name: 'Japan'}, {name: 'Russia'}]))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        console.log(this.store.selectSnapshot<CountryModel[]>(state => state.root.rollCall.presentCountries));
      });
  }

  edit(): void {
    console.log('edit');
  }

  newRollCall(): void {
    console.log('start new roll call')
  }
}
