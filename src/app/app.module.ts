import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { EscritorioComponent } from './escritorio/escritorio.component';
import { AuthComponent } from './auth/auth.component';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import firebase from 'firebase/app';

import {DemoMaterialModule} from './material-module';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

import {NavigationService} from './services/navigation.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EscritorioComponent,
    AuthComponent,
    SidenavComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    DemoMaterialModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
