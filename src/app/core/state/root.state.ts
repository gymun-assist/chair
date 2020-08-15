import {Action, NgxsOnInit, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {SetUser} from "./root.actions";
import {RollCallState} from "./roll-call/roll-call.state";
import {UserModel} from "../../models/user.model";

export interface RootStateModel {
  user: UserModel;
}

@State<RootStateModel>({
  name: 'root',
  defaults: {
    user: null,
  },
  children: [RollCallState]
})
@Injectable()
export class RootState implements NgxsOnInit {

  constructor(private store: Store) {
  }

  ngxsOnInit(ctx?: StateContext<string | null>): any {
    //add callbacks and request
  }

  @Action(SetUser)
  logIn(ctx: StateContext<RootStateModel>, action: SetUser): void {
    //if (!ctx.getState().user) {
    ctx.patchState({user: action.user});
    //}
  }
}
