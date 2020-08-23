import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";

@Component({
  selector: 'roll-call-procedure',
  templateUrl: './roll-call-procedure.component.html',
  styleUrls: ['./roll-call-procedure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RollCallProcedureComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
