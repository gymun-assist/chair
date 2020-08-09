import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimetableComponent {
}
