import {RollCallState, RollCallStateModel} from "./roll-call.state";
import {Selector} from "@ngxs/store";
import {CountryModel} from "../../../models/country.model";

export class RollCallSelectors {

  @Selector([RollCallState])
  static presentCountries(state: RollCallStateModel): CountryModel[] {
    return state.presentCountries;
  }
}
