import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Store } from '@ngrx/store';
import { setProjects } from 'src/app/store/actions/github.action';
import { Observable, Subscription, combineLatest, map } from 'rxjs';
import { selectProjects } from 'src/app/store/selectors/github.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { selectIsOverlayVisible } from 'src/app/store/selectors/overlay.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChildren('tooltip') tooltips: QueryList<ElementRef>;
  public breakpoint: number;

  public isOverlayVisible$: Observable<boolean>;
  public presetTiles = [
    { rowspan: 2, colspan: 2, component: 'welcome'},
    { rowspan: 1, colspan: 1, component: 'eye'},
    { rowspan: 1, colspan: 1, component: 'now'},
    { rowspan: 1, colspan: 1, component: 'contact'},
    { rowspan: 1, colspan: 2, component: 'work'},
    { rowspan: 1, colspan: 1, component: 'linkedin'},
    { rowspan: 1, colspan: 1, component: 'github'},
  ];
  public tiles: any[] = [];
  protected subscriptions: Subscription[] = [];

  public constructor(
    protected githubService: GithubService,
    protected changeDetection: ChangeDetectorRef,
    protected store: Store,
    protected router: Router,
    protected route: ActivatedRoute
  ) {
    this.subscriptions.push(combineLatest([
        this.store.select(selectProjects).pipe(
          map(projects => 
            [...projects].sort((a, b) => new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf()))), // we sort projects by last updated, need to create new array bc angular complains we can't modify array
        this.route.data
      ])
    .subscribe(([projects, data]) => {
      switch (data['sort']) {
        case 'projects':
          this.tiles = [
            ...projects,
            ...this.presetTiles
          ]
          break;
        case 'contact':
          this.tiles = [
            { rowspan: 1, colspan: 1, component: 'contact'},
            ...this.presetTiles.filter(tile => tile.component !== 'contact'),
            ...projects,
          ]
          break;
        default: 
          this.tiles = [
            ...this.presetTiles,
            ...projects
        ]
      }
    })
    );
    (this.isOverlayVisible$ = this.store.select(selectIsOverlayVisible)).pipe().subscribe(visible => {
      setTimeout(() => {
        if (visible) {
          this.tooltips.forEach((el: any) => {
            el.matTooltipDisabled = false;
            el.show();
          });
        }
      }, 0);
    });
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  public ngOnInit(): void {
    this.githubService.getProjects().subscribe(projects => {
      this.store.dispatch(setProjects({projects}))
      this.changeDetection.detectChanges();
    });
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
  }
  
  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
  }

}
