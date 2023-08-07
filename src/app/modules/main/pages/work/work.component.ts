import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { workData } from './work-data';
import { GithubService } from 'src/app/services/github.service';
import { Store } from '@ngrx/store';
import { setProjects } from 'src/app/store/actions/github.action';
import { Project } from 'src/app/models/project';
import { selectProjects } from 'src/app/store/selectors/github.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  public breakpoint!: number;
  public workData = workData;
  public projects$: Observable<Project[]>;
  
  constructor(
    protected githubService: GithubService,
    protected changeDetection: ChangeDetectorRef,
    protected store: Store
  ) { 
    this.projects$ = this.store.select(selectProjects);
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
