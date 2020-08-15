import {UserModel} from "../../models/user.model";

export class SetUser {
  static readonly type = '[Root] Set user'
  constructor(public user: UserModel) {
  }
}
