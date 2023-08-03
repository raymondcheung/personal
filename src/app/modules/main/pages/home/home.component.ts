import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Store, select } from '@ngrx/store';
import { setProjects } from 'src/app/store/actions/github.action';
import { BehaviorSubject, Observable, combineLatest, map, take } from 'rxjs';
import { Project } from 'src/app/models/project';
import { selectProjects } from 'src/app/store/selectors/github.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public tiles = new BehaviorSubject([
    { rowspan: 2, colspan: 2, component: 'welcome'},
    { rowspan: 1, colspan: 1, component: 'eye'},
    { rowspan: 1, colspan: 1, component: 'now'},
    { rowspan: 1, colspan: 1, component: 'contact'},
    { rowspan: 1, colspan: 2, component: 'work'},
    { rowspan: 1, colspan: 1, component: 'linkedin'},
    { rowspan: 1, colspan: 1, component: 'github'},
  ]);

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
    ).subscribe(tiles => this.tiles.next(tiles));
  }

  public ngOnInit(): void {
    this.githubService.getProjects().subscribe(projects => {
      this.store.dispatch(setProjects({projects}))
      this.changeDetection.detectChanges();
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    this.tiles.pipe(take(1)).subscribe(tiles => {
      moveItemInArray(tiles, event.previousIndex, event.currentIndex);
      this.tiles.next(tiles);
    })
  }
}
