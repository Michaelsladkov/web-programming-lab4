import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ShootingFormComponent } from './shooting-form/shooting-form.component';
import { DisplayComponent } from './display/display.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { HomeComponent } from './home/home.component';
import { WorkingPageComponent } from './working-page/working-page.component';
import { ShotsService } from './shared/shots.service';
import { LoginService } from './shared/login.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoginGuard } from './app.login-guard';
import { FormsModule } from '@angular/forms';

import {PasswordModule} from 'primeng/password'
import {InputTextModule} from 'primeng/inputtext';
import { SessionRepositoryService } from './shared/session-repository.service';
import { ShotsRepositoryService } from './shared/shots-repository.service';
import { RValueStorageService } from './shared/r-value-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ShootingFormComponent,
    DisplayComponent,
    ResultsTableComponent,
    HomeComponent,
    WorkingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    PasswordModule,
    InputTextModule
  ],
  providers: [ {provide: LocationStrategy, useClass: PathLocationStrategy}, 
    {provide: LoginGuard, useClass: LoginGuard}, ShotsService, LoginService, SessionRepositoryService, ShotsRepositoryService,
      RValueStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
