import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, fromEvent, tap } from 'rxjs';
import { toggleOverlayVisible } from 'src/app/store/actions/overlay.action';
import { selectIsOverlayVisible } from 'src/app/store/selectors/overlay.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit  {
  @ViewChild('toggleOverlayButton') toggleOverlayButton: ElementRef;
  @ViewChildren('tooltip') tooltips: QueryList<ElementRef>;
  public isOverlayVisible$: Observable<boolean>;

  public constructor(
    protected store: Store
  ) {
    (this.isOverlayVisible$ = this.store.select(selectIsOverlayVisible)).pipe().subscribe(visible => {
      setTimeout(() => {
        if (visible) {
          this.tooltips.forEach((el: any) => {
            el.matTooltipDisabled = false;
            el.show()
          });
        }
      }, 0);
    });
  }

  public ngAfterViewInit(): void {
    fromEvent(this.toggleOverlayButton.nativeElement, 'click').pipe(
      tap(() => this.store.dispatch(toggleOverlayVisible()))
    ).subscribe();
  }
}
