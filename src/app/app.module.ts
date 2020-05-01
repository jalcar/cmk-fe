import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/home/navbar.component';
import { NoimagenPipe } from './pipes/noimagen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NoimagenPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
