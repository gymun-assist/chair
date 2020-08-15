export class SetCountries {
  static readonly type = '[RollCall] set countries';
  constructor(public countries: string[]) {
  }
}
