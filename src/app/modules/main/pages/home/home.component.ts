import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Store } from '@ngrx/store';
import { setProjects } from 'src/app/store/actions/github.action';
import { map } from 'rxjs';
import { selectProjects } from 'src/app/store/selectors/github.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public tiles: any[] = [
    { rowspan: 2, colspan: 2, component: 'welcome'},
    { rowspan: 1, colspan: 1, component: 'eye'},
    { rowspan: 1, colspan: 1, component: 'now'},
    { rowspan: 1, colspan: 1, component: 'contact'},
    { rowspan: 1, colspan: 2, component: 'work'},
    { rowspan: 1, colspan: 1, component: 'linkedin'},
    { rowspan: 1, colspan: 1, component: 'github'},
  ];

  public constructor(
    protected githubService: GithubService,
    protected changeDetection: ChangeDetectorRef,
    protected store: Store
  ) {
    this.store.select(selectProjects).pipe(
      map(projects => [
        { rowspan: 2, colspan: 2, component: 'welcome'},
        { rowspan: 1, colspan: 1, component: 'eye'},
        { rowspan: 1, colspan: 1, component: 'now'},
        { rowspan: 1, colspan: 1, component: 'contact'},
        { rowspan: 1, colspan: 2, component: 'work'},
        { rowspan: 1, colspan: 1, component: 'linkedin'},
        { rowspan: 1, colspan: 1, component: 'github'},
        ...projects.map(project => ({rowspan: 1, colspan: 1, component: 'project', ...project}))
      ])
    ).subscribe(tiles => this.tiles = tiles);
  }

  public ngOnInit(): void {
    this.githubService.getProjects().subscribe(projects => {
      this.store.dispatch(setProjects({projects}))
      this.changeDetection.detectChanges();
    });
  }
}
