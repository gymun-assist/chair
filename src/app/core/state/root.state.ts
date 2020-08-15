import {Action, NgxsOnInit, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {LogIn} from "./root.actions";
import {RollCallState} from "./roll-call/roll-call.state";

export interface RootStateModel {
  user: string;
}

@State<RootStateModel>({
  name: 'root',
  defaults: {
    user: 'Uladzislau Dzemiantsei',
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

  @Action(LogIn)
  logIn(ctx: StateContext<RootStateModel>, action: LogIn): void {
    if (!ctx.getState().user) {
      ctx.patchState({user: action.user});
    }
  }
}
