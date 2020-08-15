import {CountryModel} from "../../../models/country.model";

export class SetPresentCountries {
  static readonly type = '[RollCall] Set present countries';
  constructor(public countries: CountryModel[]) {
  }
}
