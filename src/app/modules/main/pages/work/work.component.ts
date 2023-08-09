import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Store } from '@ngrx/store';
import { setProjects } from 'src/app/store/actions/github.action';
import { Project } from 'src/app/models/project';
import { selectProjects } from 'src/app/store/selectors/github.selectors';
import { Observable } from 'rxjs';
import { selectIsOverlayVisible } from 'src/app/store/selectors/overlay.selectors';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  @ViewChildren('tooltip') tooltips: QueryList<ElementRef>;
  public breakpoint!: number;
  public projects$: Observable<Project[]>;
  public isOverlayVisible$: Observable<boolean>;
  
  constructor(
    protected githubService: GithubService,
    protected changeDetection: ChangeDetectorRef,
    protected store: Store
  ) { 
    this.projects$ = this.store.select(selectProjects);
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

  ngOnInit(): void {
    this.githubService.getProjects().subscribe(projects => {
      this.store.dispatch(setProjects({projects}))
      this.changeDetection.detectChanges();
    });
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
  }
  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
  }
}
