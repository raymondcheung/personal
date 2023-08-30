import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MatTooltipModule } from '@angular/material/tooltip';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '@modules/navbar/navbar.component';
import { SubbarComponent } from '@modules/subbar/subbar.component';
import { FooterComponent } from '@modules/footer/footer.component';
import { GithubService } from '@services/github.service';
import { githubReducer } from '@store/reducers/github.reducer';
import { overlayReducer } from '@store/reducers/overlay.reducer';
import { AuthenticationService } from '@services/authentication.service';
import { AuthenticationInterceptor } from '@services/interceptors/authentication.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ 
      github: githubReducer,
      overlay: overlayReducer
    }),
    MatTooltipModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    GithubService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
