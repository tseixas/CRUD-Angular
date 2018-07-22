import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartialsRoutingModule } from './partials-routing.module';
import { PartialsComponent } from './partials.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsRoutingModule
  ],
  declarations: [PartialsComponent, SidebarComponent, HeaderComponent]
})
export class PartialsModule { }
