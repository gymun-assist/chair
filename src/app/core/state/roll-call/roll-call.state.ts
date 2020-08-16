import {Action, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {SetPresentCountries} from "./roll-call.actions";
import {CountryModel} from "../../../models/country.model";

export interface RollCallStateModel {
  presentCountries: CountryModel[];
}

export const defaultRollCallState: RollCallStateModel = {
  presentCountries: [
    {name: 'Germany'}, {name: 'United Arab Emirates'}, {name: 'Germany'}, {name: 'Germany'},
    {name: 'Germany'}, {name: 'Germany'}, {name: 'Germany'}, {name: 'Germany'},
    {name: 'Germany'}, {name: 'Germany'}, {name: 'Germany'}, {name: 'Germany'},
    {name: 'Germany'}, {name: 'Germany'}, {name: 'Germany'}, {name: 'Germany'},
    {name: 'Germany'}, {name: 'Germany'}, {name: 'Germany'}, {name: 'Germany'},
    {name: 'Germany'}, {name: 'Germany'}, {name: 'Germany'}, {name: 'Germany'},
    {name: 'Germany'}, {name: 'Germany'}, {name: 'Germany'}, {name: 'Germany'},
  ],
}

@State<RollCallStateModel>({
  name: 'rollCall',
  defaults: {...defaultRollCallState}
})
@Injectable()
export class RollCallState {

  constructor(private store: Store) {
  }

  @Action(SetPresentCountries)
  setCountries(ctx: StateContext<RollCallStateModel>, action: SetPresentCountries) {
    ctx.patchState({presentCountries: action.countries});
  }

}
