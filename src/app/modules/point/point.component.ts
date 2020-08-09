import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PointComponent {
}
