import {RollCallState, RollCallStateModel} from "./roll-call.state";
import {Selector} from "@ngxs/store";
import {CountryModel} from "../../../models/country.model";
import {Converter} from "../../../utils/converter";

export class RollCallSelectors {

  @Selector([RollCallState])
  static presentCountries(state: RollCallStateModel): CountryModel[] {
    const countries: CountryModel[] = state.presentCountries;
    countries.forEach(country => {
      if (!country.imageName) {
        country.imageName = Converter.toHyphenNotation(country.name);
      }
    });
    return countries;
  }
}
