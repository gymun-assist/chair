import {Action, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {SetCountries} from "./roll-call.actions";

export interface RollCallStateModel {
  countries: string[];
}

export const defaultRollCallState: RollCallStateModel = {
  countries: ['Spain', 'Denmark'],
}

@State<RollCallStateModel>({
  name: 'rollCall',
  defaults: {...defaultRollCallState}
})
@Injectable()
export class RollCallState {

  constructor(private store: Store) {
  }

  @Action(SetCountries)
  setCountries(ctx: StateContext<RollCallStateModel>, action: SetCountries) {
    ctx.patchState({countries: action.countries});
  }

}
