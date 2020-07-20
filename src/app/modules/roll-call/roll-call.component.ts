import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'roll-call',
  templateUrl: './roll-call.component.html',
  styleUrls: ['./roll-call.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RollCallComponent {
}
