import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setOverlayVisible } from 'src/app/store/actions/overlay.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public constructor(
    protected store: Store
  ) {}

  public showOverlay() {
    this.store.dispatch(setOverlayVisible({visible: true}));
  }
}
