import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthenticationService } from '@services/authentication.service';
import { logIn } from '@store/actions/authentication.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username = new FormControl('');
  public password = new FormControl('');


  public constructor(
    protected authenticationService: AuthenticationService,
    protected store: Store) {}

  public submit() {
    if (this.username.value && this.password.value) {
      this.store.dispatch(logIn({username: this.username.value, password: this.password.value}))
    }
  }
}
