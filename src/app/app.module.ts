import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { SubbarComponent } from './modules/subbar/subbar.component';
import { MainComponent } from './modules/main/main.component';
import { FooterComponent } from './modules/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { GithubService } from './services/github.service';
import { githubReducer } from './store/reducers/github.reducer';
import { overlayReducer } from './store/reducers/overlay.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubbarComponent,
    MainComponent,
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
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
