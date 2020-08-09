import {ChangeDetectionStrategy, Component} from "@angular/core";
import {NavigationItemModel} from "../../../../models/navigation-item.model";
import {RoutingConstants} from "../../../../constants/routing.constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(private router: Router) {
  }

  public links: NavigationItemModel[] = [
    {caption: "Roll Call", path: RoutingConstants.ROLL_CALL},
    {caption: "Caucus", path: RoutingConstants.CAUCUS},
    {caption: "Point Discussion", path: RoutingConstants.POINT},
    {caption: "Resolution", path: RoutingConstants.RESOLUTION},
    {caption: "Statistics", path: RoutingConstants.STATISTICS},
    {caption: "Timetable", path: RoutingConstants.TIMETABLE},
  ];

  navigate(path?: string) {
    this.router.navigate([path || '']);
  }
}
