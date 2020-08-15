import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {NavigationItemModel} from "../../../../models/navigation-item.model";
import {RoutingConstants} from "../../../../constants/routing.constants";
import {NavigationStart, Router} from "@angular/router";
import {filter, take} from "rxjs/operators";
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {RootSelectors} from "../../../../core/state/root.selectors";
import {UserModel} from "../../../../models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public readonly links: NavigationItemModel[] = [
    {caption: "Roll Call", path: RoutingConstants.ROLL_CALL},
    {caption: "Caucus", path: RoutingConstants.CAUCUS},
    {caption: "Point Discussion", path: RoutingConstants.POINT},
    {caption: "Resolution", path: RoutingConstants.RESOLUTION},
    {caption: "Statistics", path: RoutingConstants.STATISTICS},
    {caption: "Timetable", path: RoutingConstants.TIMETABLE},
  ];

  @Select(RootSelectors.user) user$: Observable<UserModel>;

  isUserInfoExpanded: boolean = false;

  constructor(private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart),
        take(1)
      )
      .subscribe((event: NavigationStart) => {
        const navigatedPage: NavigationItemModel = this.links.find(elem => event.url.includes(elem.path));
        if (navigatedPage) {
          navigatedPage.selected = true;
          this.cdr.detectChanges();
        }
      });
  }

  navigate(link?: NavigationItemModel): void {
    this.links.forEach(elem => elem.selected = false);
    if (link) {
      link.selected = true;
    }
    this.router.navigate([link?.path || '']);
  }

  logout(): void {
    //TODO add implementation
  }
}
