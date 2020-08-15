import {RollCallState, RollCallStateModel} from "./roll-call.state";
import {Selector} from "@ngxs/store";

export class RollCallSelectors {

  @Selector([RollCallState])
  static countries(state: RollCallStateModel): string[] {
    return state.countries;
  }
}
