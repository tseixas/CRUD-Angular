import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { PartialsComponent } from './partials/partials.component';
import { SidebarComponent } from './partials/components/sidebar/sidebar.component';
import { HeaderComponent } from './partials/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PartialsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
