import {Selector} from "@ngxs/store";
import {RootState, RootStateModel} from "./root.state";
import {UserModel} from "../../models/user.model";

export class RootSelectors {

  @Selector([RootState])
  static user(state: RootStateModel): UserModel {
    return state.user;
  }
}
